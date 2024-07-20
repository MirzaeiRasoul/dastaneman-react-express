import "./ProductCard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons/faAnglesLeft"
import { Link } from "react-router-dom"

function ProductCard({ product }) {
  return (
    <div className="product">
      <Link to={"/products/" + product._id} className="product-link">
        <img src={product.image} alt={product.title} />

        <h2 className="product-title">{product.title}</h2>
        <p className="product-excerpt">{product.excerpt}</p>
      </Link>
      <div className="price-box">
        <div className="product-price">
          قیمت: <span className="price">{product.price}</span> تومان
        </div>
        <button data-href="BestDad" className="product-btn">
          {product.buttonText}
          <FontAwesomeIcon icon={faAnglesLeft} />
        </button>
      </div>
    </div>
  )
}

export default ProductCard
