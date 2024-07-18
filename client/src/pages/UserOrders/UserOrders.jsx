import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import RootLayout from "../../layouts/RootLayout.jsx"
import UserTabs from "../../layouts/UserTabs/UserTabs.jsx"
import { useAuthenticated } from "../../contexts/AuthContext.jsx"

function UserOrders() {
  const navigate = useNavigate()
  const { isAuth } = useAuthenticated()

  useEffect(() => {
    if (!isAuth) navigate("/")
  }, [])

  return (
    <RootLayout>
      <main className="page user-orders-page">
        <div className="container">
          <UserTabs />
          <section className="orders-section pdn-1">
            <h1 className="page-title">سفارش‌های شما:</h1>
          </section>
        </div>
      </main>
    </RootLayout>
  )
}

export default UserOrders
