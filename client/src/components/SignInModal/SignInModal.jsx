import "./SignInModal.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import { faClose, faLock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useAuthenticated } from "../../contexts/AuthContext.jsx"

function SignInModal({ isOpened, setIsOpened }) {
  const [step, setStep] = useState(1)
  const [username, setUsername] = useState("")
  const [usernameError, setUsernameError] = useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const { setIsAuth } = useAuthenticated()

  const usernameInputHandler = e => {
    e.preventDefault()
    setUsername(e.target.value)
    setUsernameError("")
  }

  const checkUsername = e => {
    e.preventDefault()
    if (!username) {
      setUsernameError("نام کاربری خود را وارد نمایید!")
    } else {
      setStep(2)
    }
  }

  const passwordInputHandler = e => {
    e.preventDefault()
    setPassword(e.target.value)
    setPasswordError("")
  }

  const checkRegisterLogin = async e => {
    e.preventDefault()
    if (!password) {
      setPasswordError("پسورد خود را وارد نمایید!")
    } else {
      try {
        const response = await fetch("http://localhost:3001/auth/v2/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ username, password }),
        })
        const data = await response.json()
        if (!response.ok) {
          throw new Error(data.error.message)
        }
        alert(data.result.message)
        setIsOpened(false)
        setIsAuth(true)
      } catch (err) {
        setPasswordError(err.message)
      }
    }
  }

  return (
    <div className="modal-wrapper" style={{ display: isOpened ? "flex" : "none" }}>
      <div className="modal-overlay"></div>
      <div className="modal-container">
        <div className="modal-header">
          {/* <a href="#" className="close-icon" onClick={() => setIsOpened(!isOpened)}> */}
          <a href="#" className="close-icon" onClick={() => setIsOpened(prev => !prev)}>
            <FontAwesomeIcon icon={faClose} />
          </a>
          <h2 className="modal-title">ورود به سایت</h2>
          <span className="lock-icon">
            <FontAwesomeIcon icon={faLock} />
          </span>
        </div>
        {step == 1 ? (
          <div className="modal-username-step">
            <div className="modal-body">
              <div className="modal-text">برای ادامه باید وارد شوید</div>
              <form className="username-form" onSubmit={checkUsername}>
                <div className="form-group username-form-group">
                  <label htmlFor="username">نام کاربری</label>
                  <input name="username" type="tel" placeholder="نام کاربری خود را وارد نمایید." value={username} onChange={usernameInputHandler} />
                  <span className="input-error">{usernameError}</span>
                </div>
                <div className="term">
                  با ورود به سایت <Link to="/terms">شرایط استفاده</Link> را می پذیرید
                </div>
                <input type="submit" value="ادامه" />
              </form>
              <div className="modal-close">
                {/* <a href="#" onClick={() => setIsOpened(!isOpened)}> */}
                <a href="#" onClick={() => setIsOpened(prev => !prev)}>
                  الان نمی خواهم، بستن پنجره
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="modal-password-step">
            <div className="modal-body">
              <div className="modal-text">رمز عبور برای کابر {username} را در زیر وارد کنید:</div>
              <form className="password-form" onSubmit={checkRegisterLogin}>
                <div className="form-group password-form-group">
                  <label htmlFor="password">رمز عبور</label>
                  <input name="password" type="text" placeholder="رمز عبور خود را وارد نمایید." value={password} onChange={passwordInputHandler} />
                  <span className="input-error">{passwordError}</span>
                </div>
                <input type="submit" value="ورود / ثبت‌نام" />
              </form>
              <div className="modal-change-username">
                <a href="#" onClick={() => setStep(1)}>
                  تغییر نام کاربری
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SignInModal
