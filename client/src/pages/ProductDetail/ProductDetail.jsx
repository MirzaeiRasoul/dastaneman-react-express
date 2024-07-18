import "./ProductDetail.css"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons"
import RootLayout from "../../layouts/RootLayout"
import RelatedProducts from "../../components/RelatedProducts"

function ProductDetail() {
  const { productId } = useParams()
  const [product, setProduct] = useState({})

  const fetchProducts = async () => {
    const response = await fetch(`http://localhost:3001/products/${productId}`)
    const data = await response.json()
    setProduct(data.result)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <RootLayout>
      <main className="page product-detail-page">
        {product?.id ? (
          <div className="container">
            <section className="content-section">
              <div className="product-img">
                <img src={product.imgSrc} alt={product.title} />
              </div>
              <div className="product-content">
                <h1 className="product-title">{product.title}</h1>
                <p className="product-detail">{product.detail}</p>
                <div className="product-price-box">
                  <div className="product-price">قیمت از:‌{product.price} تومان</div>
                  <div className="product-price-label">مطالعه آنلاین مجانی</div>
                </div>
                <Link to="./create" className="product-link">
                  از اینجا شروع کنید
                  <FontAwesomeIcon icon={faAnglesLeft} />
                </Link>
                <div className="product-price-and-detail">مشاهده قیمت و جزئیات</div>
              </div>
            </section>

            <section className="related-products-section">
              <h2 className="section-title">این محصولات رو هم ببین</h2>
              <RelatedProducts />
            </section>

            <section className="gallery-section">
              <h2 className="section-title">بچه ها با کتاب بهترین کودک دنیا</h2>
              <div className="gallery-list dragable">
                <div className="gallery-item">
                  <img src="/img/28.jpg" alt="" />
                </div>
                <div className="gallery-item">
                  <img src="/img/21.jpg" alt="" />
                </div>
                <div className="gallery-item">
                  <img src="/img/20.jpg" alt="" />
                </div>
                <div className="gallery-item">
                  <img src="/img/17.jpg" alt="" />
                </div>
                <div className="gallery-item">
                  <img src="/img/3.jpg" alt="" />
                </div>
              </div>
            </section>
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "50px 0" }}>محصول مورد نظر یافت نشد!</div>
        )}
      </main>
    </RootLayout>
  )
}

export default ProductDetail
