/*
Name:         Mark Ali
File:         App.jsx
Date:         8 Feb 2026
Description:  Assignment 1 - Product Listing and Entry. Main container for the application, which manages the full product list and controls the current view.
*/

import React, { useMemo, useState, useEffect } from 'react'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'
import { getAllProducts, addProduct, removeProduct } from "./storage/productStorage"

export default function App(){
  // TODO: start with [] and consider hydrating from storage once storage helpers are implemented
  //  Holds the list of products entered by the user.
  const [items, setItems] = useState([])

  // Optional: toggle between views; start on 'list'
  const [view, setView] = useState('list') // 'list' | 'form'

  //  Loads saved products from productStorage when the app first opens. 
  useEffect(function () {
    const saved = getAllProducts()
    setItems(saved)
  }, [])

  // TODO: compute total from items
  const total = useMemo(() => {
    return items.length
  }, [items])

  function handleCreate(data){
    // TODO: validate (in the form), persist to storage, then update state
    // Example flow (do not copy/paste): create id, add to storage, reload items
    // setItems(...)
    // setView('list')
    console.log('Create product:', data)
        
    const newProduct = {
      id: Date.now(),
      name: data.name,
      price: data.price,
      stock: data.stock,
      description: data.description
    }

    addProduct(newProduct)

    const updated = getAllProducts()
    setItems(updated)

    setView("list")
  }

  function handleDelete(id){
    // TODO: remove from storage, then update state
    console.log('Delete product (student to implement):', id)

    removeProduct(id)

    const updated = getAllProducts()
    setItems(updated)

  }

  return (
    <div className="container py-3">
      <header className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="h3 m-0">My Web Shop</h1>
        <div className="btn-group">
          <button className={`btn btn-sm btn-${view==='list'?'primary':'outline-primary'}`} onClick={() => setView('list')}>
            Product List ({total})
          </button>
          <button className={`btn btn-sm btn-${view==='form'?'primary':'outline-primary'}`} onClick={() => setView('form')}>
            Add Product
          </button>
        </div>
      </header>

      {view === 'form' ? (
        <ProductForm onSubmit={handleCreate} />
      ) : (
        <ProductList items={items} onDelete={handleDelete} />
      )}
    </div>
  )
}
