import React from 'react'
import { Link } from "react-router-dom"

const products = [
  { id: 1, name: "laptop", price: "300" },
  { id: 2, name: "mouse", price: "100" },
  { id: 3, name: "Mobile", price: "30" },
  { id: 4, name: "Keyboard", price: "20" },
  { id: 5, name: "charger", price: "10" },
]

const Product = () => {
  return (
    <div>
      <h1>Products</h1>

      {products.map((p) => (
        <div key={p.id}>
          <h2>{p.name}</h2>
          <h3>{p.price}</h3>
          <Link to={`/productDetails/${p.id}`}>View Details</Link>
        </div>
      ))}

    </div>
  )
}

export default Product