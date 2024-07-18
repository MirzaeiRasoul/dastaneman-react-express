import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import RootLayout from "../../layouts/RootLayout.jsx"
import UserTabs from "../../layouts/UserTabs/UserTabs.jsx"
import { useAuthenticated } from "../../contexts/AuthContext.jsx"

function UserProfile() {
  const navigate = useNavigate()
  const { isAuth } = useAuthenticated()

  useEffect(() => {
    if (!isAuth) navigate("/")
  }, [])

  return (
    <RootLayout>
      <main className="page user-profile-page">
        <div className="container">
          <UserTabs />
          <section className="profile-section pdn-1">
            <h1 className="page-title">حساب کاربری شما:</h1>
          </section>
        </div>
      </main>
    </RootLayout>
  )
}

export default UserProfile
