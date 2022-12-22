import { connection } from "../db/db.js";
import bcrypt from 'bcrypt'
import dotenv from "dotenv";
import jwt from 'jsonwebtoken'

dotenv.config();

export const addUser = async (req, res) => {
  const { username, email, passwords } = req.body;

  const hashPassword = await bcrypt.hash(passwords, 10)

  connection.query(
    "INSERT INTO users (username, email, passwords) VALUES (?, ?, ?)",
    [username, email, hashPassword],
    (err, result) => {
      if (err) throw err;
      res.send("Add Users").status(201);
    }
  );
}

export const getUser = (req, res) => {
  const { email, passwords } = req.body;

  connection.query("SELECT * FROM users WHERE email = ?", [email], (err, data) => {
    if (err) {
      console.log(err);
    } else {
      if (data.length === 0) {
        res.json({ msg: "No existe este correo" });
      } else {
        bcrypt.compare(passwords, data[0].passwords, (err, result) => {
          if (result) {
            const { id, username } = data[0];

            const token = jwt.sign({ id, username }, process.env.SECRET_KEY, {
              expiresIn: "1h",
            });

            res.json({ token });
          } else {
            res.json({ msg: "Contraseña incorrecta" }).status(401);
          }
        });
      }
    }
  });
}