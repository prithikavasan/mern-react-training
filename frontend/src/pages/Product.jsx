import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

const Product = () => {
  const [products, setProducts] = useState([]) // ✅ state for API data
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch products")
        }
        return res.json()
      })
      .then(data => {
        setProducts(data)
      })
      .catch(err => {
        console.error("Fetch error:", err)
      })
  }, [])
  return (
    <div>
      <h1>Products</h1>
      {products.map((p) => (
        <div key={p.id} >
          <h2>{p.title}</h2>
          <h3>{p.price}</h3>
          <Link to={`/productDetails/${p.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  )
}

export default Product
