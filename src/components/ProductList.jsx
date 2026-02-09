import React from 'react'
import ProductItem from './ProductItem'

export default function ProductList({ items, onDelete }){
  // TODO: if items is empty, show "No products available."
  // TODO: otherwise, map items to <ProductItem />


  function renderItems() {
    return items.map(function (product) {
      return (
        <ProductItem
          key={product.id}
          product={product}
          onDelete={onDelete}
        />
      )
    })
  }


  return (
    <div>
      <h2 className="h5 mb-3">Products</h2>
      {items.length === 0 && (
        <div className="alert alert-secondary">
          No products available.
        </div>
      )}

      {items.length > 0 && (
        <div>
          {renderItems()}
        </div>
      )}
    </div>
  )
}