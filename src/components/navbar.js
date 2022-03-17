import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Navbar = () => (
    <nav>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
            <Link to="/using-ssr">Go to "Using SSR"</Link>
            <Link to="/using-dsg">Go to "Using DSG"</Link>
        </div>
    </nav>
)

export default Navbar