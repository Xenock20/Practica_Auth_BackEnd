export const getProducts = (req, res) => {
  res.send("Obteniendo Productos").status(200)
}

export const getProduct = (req, res) => {
  res.send("Obteniendo un Producto").status(200)
}

export const addProduct = (req, res) => {
  res.send("Añadiendo Producto").status(200)
}

export const updateProduct = (req, res) => {
  res.send("Actulizando Producto").status(200)
}

export const deleteProduct = (req, res) => {
  res.send("Eliminando Producto").status(200)
}