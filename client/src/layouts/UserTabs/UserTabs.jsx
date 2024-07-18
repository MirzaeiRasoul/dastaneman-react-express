import "./UserTabs.css"
import { NavLink } from "react-router-dom"

function UserTabs() {
  return (
    <section className="user-tabs-section">
      <div className="container">
        <nav className="user-nav">
          <ul className="user-tabs">
            <li className="user-tab-item">
              <NavLink to="/user/profile">ویرایش مشخصات</NavLink>
            </li>
            <li className="user-tab-item">
              <NavLink to="/user/orders">سابقه سفارش ها</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default UserTabs
