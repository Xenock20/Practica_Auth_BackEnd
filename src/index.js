import express from 'express'
import dotenv from 'dotenv'
import router from './router/router.js'
import cors from 'cors'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(router)
app.use(cors())


app.listen(PORT, ()=>{
  console.log('Server listen', PORT)
})

