import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const products = [
    { id: 1, name: "laptop", price: "300", description: "hello this is laptop" },
    { id: 2, name: "mouse", price: "100", description: "hello this is mouse" },
    { id: 3, name: "Mobile", price: "30", description: "hello this is mobile" },
    { id: 4, name: "Keyboard", price: "20", description: "hello this is keyboard" },
    { id: 5, name: "charger", price: "10", description: "hello this is charger" },
  ]

  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id))

  if (!product) {
    return <h2>Product not found</h2>
  }

  return (
    <div>
      <h1>Product Details</h1>
      <h2>Name: {product.name}</h2>
      <h2>Price: {product.price}</h2>
      <h2>Description: {product.description}</h2>
    </div>
  )
}

export default ProductDetails