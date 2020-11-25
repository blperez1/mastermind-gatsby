import React from "react"
import "../styles/global.css"
import "../styles/main.css"

const Layout = ({children}) => {
    return (
        <main>
            {children}
        </main>
    )
}

export default Layout