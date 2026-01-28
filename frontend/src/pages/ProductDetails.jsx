import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch product")
        }
        return res.json()
      })
      .then(data => setProduct(data)) // ✅ correct setter
      .catch(err => console.error("Fetch error:", err))
  }, [id])

  if (!product) {
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <h1>Product Details</h1>
      <h2>Name: {product.title}</h2>
      <h2>Price: ₹{product.price}</h2>
      <p>Description: {product.description}</p>
    </div>
  )
}

export default ProductDetails
