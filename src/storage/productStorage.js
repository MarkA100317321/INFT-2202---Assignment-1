// TODO: Implement localStorage-based persistence using JSON.parse / JSON.stringify.
// Use this key for storage:
export const STORAGE_KEY = 'a1_products';

// TODO: return an array of products from localStorage (or [] if none)
export function getAllProducts() {
  const json = localStorage.getItem(STORAGE_KEY)

  if (!json) {
    return []
  }

  try {
    return JSON.parse(json)
  } catch (e) {
    console.error("Error parsing storage JSON:", e)
    return []
  }
}

// TODO: persist a product into storage
export function addProduct(product) {
  const items = getAllProducts()
  items.push(product)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

// TODO: remove a product by id and persist
export function removeProduct(id) {
  const items = getAllProducts()
  const filtered = items.filter(function (item) {
    return item.id !== id
  })
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
}
