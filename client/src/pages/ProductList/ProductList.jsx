import "./ProductList.css"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import RootLayout from "../../layouts/RootLayout"
import ProductCard from "../../components/ProductCard/ProductCard"
import options from "../../config/options.json"
import PaginateLinks from "../../components/PaginateLinks"

function Products() {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [pagesNumber, setPagesNumber] = useState()
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const fetchProducts = async () => {
    const perPage = options.paginate.perPage
    const response = await fetch(`http://localhost:3001/products?page=${page}&per_page=${perPage}`, {
      credentials: "include",
    })
    const data = await response.json()
    if (data.success) {
      setHasError(false)
      setPagesNumber(data.pages)
      setProducts(data.result)
    } else {
      setHasError(true)
      setErrorMessage(data.error.message)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [page])

  return (
    <RootLayout>
      {!hasError ? (
        <main className="page product-list-page">
          <section className="filters-section">
            <div className="container">
              <div className="topics">
                انتخاب موضوع
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
              <div className="ages">
                انتخاب رده سنی
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </div>
          </section>

          <section className="products-section">
            <div className="container">
              <div className="products">
                {products.map((product, index) => (
                  <ProductCard product={product} key={index} />
                ))}
              </div>
            </div>
          </section>

          <section className="paginate-section">
            <div className="container">
              <PaginateLinks pagesNumber={pagesNumber} setPage={setPage} />
            </div>
          </section>
        </main>
      ) : (
        <main className="page product-list-page">
          <div className="container">{errorMessage}</div>
        </main>
      )}
    </RootLayout>
  )
}

export default Products
