import "./Header.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-regular-svg-icons"
import TopBanner from "../../components/TopBanner/TopBanner.jsx"
import logo from "../../assets/img/logo-bg-white.svg"
import SignInForm from "../../components/SignInModal/SignInModal.jsx"

import { useAuthenticated } from "../../contexts/AuthContext.jsx"

function Header() {
  const [isOpened, setIsOpened] = useState(false)
  const { isAuth, setIsAuth } = useAuthenticated()

  const loadLoginForm = e => {
    e.preventDefault()
    setIsOpened(prev => !prev)
  }

  const logout = async e => {
    e.preventDefault()
    const response = await fetch("http://localhost:3001/auth/logout", {
      credentials: "include",
    })
    const data = await response.json()
    alert(data.result.message)
    setIsAuth(false)
  }

  return (
    <>
      <TopBanner />
      <header>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Dastane Man" width="70" />
          </Link>
        </div>
        <nav className="main-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/products">همه کتاب‌‌ها</Link>
            </li>
            <li className="nav-item">
              <HashLink to="/#about">داستان من چیست؟</HashLink>
            </li>
            <li className="nav-item">
              <Link to="/user/orders">پیگیری سفارش</Link>
            </li>
            {!isAuth ? (
              <li className="nav-item">
                <a href="#" onClick={loadLoginForm}>
                  <FontAwesomeIcon icon={faUserCircle} />
                  ورود به حساب کاربری
                </a>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/user/profile">ویرایش مشخصات</Link>
                </li>
                <li className="nav-item">
                  <a href="#" onClick={logout}>
                    خروج
                  </a>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      {isOpened && <SignInForm isOpened={isOpened} setIsOpened={setIsOpened} />}
    </>
  )
}

export default Header
