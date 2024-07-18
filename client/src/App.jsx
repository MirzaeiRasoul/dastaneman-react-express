import "./styles.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, ProductList, ProductDetail, UserOrders, UserProfile, NotFound } from "./pages"
import { AuthProvider } from "./contexts/AuthContext.jsx"

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products">
            <Route index element={<ProductList />} />
            <Route path=":productId" element={<ProductDetail />} />
          </Route>
          <Route path="/user">
            <Route path="orders" element={<UserOrders />} />
            <Route path=":profile" element={<UserProfile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
