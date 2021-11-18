import PropTypes from "prop-types"
import React from "react"
import "@fontsource/yeseva-one"
import "@fontsource/work-sans"
import "../styles/style.css"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
}

export default Layout
