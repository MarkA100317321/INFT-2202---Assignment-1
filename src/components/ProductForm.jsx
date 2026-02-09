import React from 'react'

// TODO: Use useState to manage a model with fields:
// { name: '', price: '', stock: '', description: '' }
// TODO: Create a validate() that sets an errors object and returns boolean:
// - All fields required
// - price: number with up to 2 decimals, >= 0
// - stock: non-negative integer
// TODO: On submit: console.log the model; if valid, call onSubmit(normalizedData)

export default function ProductForm({ onSubmit }){
  // const [model, setModel] = ...
  // const [errors, setErrors] = ...


  const [model, setModel] = React.useState({
    name: "",
    price: "",
    stock: "",
    description: ""
  })


  const [errors, setErrors] = React.useState({})

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value

    setModel(prev => ({
      ...prev,
      [name]: value
    }))
  }

  function validate() {
    const newErrors = {}

    if (model.name.trim() === "") {
      newErrors.name = "Name is required."
    }

    if (model.price.trim() === "") {
      newErrors.price = "Price is required."
    } else {
      const priceNumber = Number(model.price)
      if (isNaN(priceNumber) || priceNumber < 0) {
        newErrors.price = "Price must be a number >= 0."
      }
    }

    if (model.stock.trim() === "") {
      newErrors.stock = "Stock is required."
    } else {
      const stockNumber = Number(model.stock)
      if (!Number.isInteger(stockNumber) || stockNumber < 0) {
        newErrors.stock = "Stock must be a non-negative integer."
      }
    }

    if (model.description.trim() === "") {
      newErrors.description = "Description is required."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }


  function handleSubmit(e){
    e.preventDefault()
    // console.log('Submitting:', model)
    // if (!validate()) return
    // onSubmit({ name: ..., price: Number(...), stock: Number(...), description: ... })

    console.log('Submitting:', model)
    if (!validate()) {
      return
    }

    const normalized = {
      name: model.name.trim(),
      price: Number(model.price),
      stock: Number(model.stock),
      description: model.description.trim()
    }

    onSubmit(normalized)

    setModel({
      name: "",
      price: "",
      stock: "",
      description: ""
    })
    setErrors({})
  }

  return (
    <form className="row g-3" onSubmit={handleSubmit} noValidate>
      <div className="col-md-6">
        <label className="form-label">Product Name</label>
        
        <input
          className={errors.name ? "form-control is-invalid" : "form-control"}
          name="name"
          value={model.name}
          onChange={handleChange}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      
      </div>

      <div className="col-md-3">
        <label className="form-label">Price</label>
        
        <input
          className={errors.price ? "form-control is-invalid" : "form-control"}
          name="price"
          value={model.price}
          onChange={handleChange}
        />
        
        <div className="form-text">Format: 12.34</div>
        
        {errors.price && <div className="invalid-feedback">{errors.price}</div>}

      </div>

      <div className="col-md-3">
        <label className="form-label">Stock</label>

        <input
          className={errors.stock ? "form-control is-invalid" : "form-control"}
          name="stock"
          value={model.stock}
          onChange={handleChange}
        />
        {errors.stock && <div className="invalid-feedback">{errors.stock}</div>}

      </div>

      <div className="col-12">
        <label className="form-label">Description</label>
        
        <textarea
          className={errors.description ? "form-control is-invalid" : "form-control"}
          rows="3"
          name="description"
          value={model.description}
          onChange={handleChange}
        />
        {errors.description && (
          <div className="invalid-feedback">{errors.description}</div>
        )}

      </div>

      <div className="col-12 d-flex gap-2">
        <button className="btn btn-primary" type="submit">Save Product</button>
      </div>
    </form>
  )
}
