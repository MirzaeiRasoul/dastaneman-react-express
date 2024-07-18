import { useEffect, useState } from "react"
import ProductCard from "./ProductCard/ProductCard"

function RelatedProducts() {
  const [data, setData] = useState([])

  const perPage = 4
  const fetchProducts = async () => {
    const response = await fetch(`http://localhost:3001/products?page=1&per_page=${perPage}`, {
      credentials: "include",
    })
    const data = await response.json()
    setData(data.result)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="products">
      {data.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
  )
}

export default RelatedProducts
