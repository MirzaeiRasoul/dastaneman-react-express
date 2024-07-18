import Header from "./Header/Header.jsx"
import Footer from "./Footer/Footer.jsx"

function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default RootLayout
