import React from 'react'

export default function ProductItem({ product, onDelete }){
  // TODO: render a Bootstrap card with product details and a Delete button
  
  
function handleDelete() {
    onDelete(product.id)
  }

  return (
    <div className="card mb-3">
      <div className="card-body">

        <h5 className="card-title">{product.name}</h5>

        <p className="card-text mb-1">
          <strong>Price:</strong> ${product.price.toFixed(2)}
        </p>

        <p className="card-text mb-1">
          <strong>Stock:</strong> {product.stock}
        </p>

        <p className="card-text">
          {product.description}
        </p>

        <button
          className="btn btn-outline-danger btn-sm"
          onClick={handleDelete}
        >
          Delete
        </button>

      </div>
    </div>
  )
}