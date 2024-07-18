import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext({})

export function useAuthenticated() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false)

  const fetchAuth = async () => {
    const response = await fetch("http://localhost:3001/auth/", {
      credentials: "include",
    })
    const data = await response.json()
    if (data.success) {
      setIsAuth(true)
    } else {
      setIsAuth(false)
    }
  }

  useEffect(() => {
    fetchAuth()
  }, [])

  return <AuthContext.Provider value={{ isAuth, setIsAuth }}>{children}</AuthContext.Provider>
}

export default AuthContext
