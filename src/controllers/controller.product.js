import { connection } from "../db/db.js";

export const getProducts = (req, res) => {
  connection.query("SELECT * FROM product", (err, result) => {
    res.send(result).status(200);
  });
};

export const getProduct = (req, res) => {
  const { id } = req.params;

  connection.query(
    "SELECT * FROM product WHERE id = ?",
    [id],
    (err, result) => {
      if (err) throw err;

      if(result.length === 0){
        res.send("Not Found").status(404)
      }else{
        res.send(result).status(200);
      }
    }
  );
};

export const addProduct = (req, res) => {
  const { title, price, image, description } = req.body;

  connection.query(
    "INSERT INTO product (title, price, image, description) VALUES (?, ?, ?, ?)",
    [title, price, image, description],
    (err, result) => {
      if (err) throw err;
      res.send("Add Product").status(201);
    }
  );
};

export const updateProduct = (req, res) => {
  const { id } = req.params;
  const { title, price, image, description } = req.body;

  connection.query(
    "UPDATE product SET `title` = ?, `price` = ?, `image` = ?, `description` = ? WHERE id = ?",
    [title, price, image, description, id],
    (err) => {
      if (err) throw err;
      res.send("Update product").status(201);
    }
  );
};

export const deleteProduct = (req, res) => {
  const { id } = req.params;
  connection.query("DELETE FROM product WHERE id = ?", [id], (err) => {
    if (err) throw err;
    res.send("Delete product");
  });
};
