import * as React from "react"
import { useState } from "react";
import PropTypes from "prop-types"
import Navbar from "./navbar"

import { FaBars } from 'react-icons/fa';

const Header = ({ siteTitle }) => {
    const [showLinks, setShowLinks] = useState(false);
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    Header.propTypes = {
        siteTitle: PropTypes.string,
    }
    Header.defaultProps = {
        siteTitle: ``,
    }

    return (
        <header>
            <div className='nav-center'>
                <div className='nav-header'>
                    <h1>{ siteTitle }</h1>
                    <button className='nav-toggle' onClick={ toggleLinks }>
                        <FaBars />
                    </button>
                </div>
                <Navbar showLinks={ showLinks } />
            </div>
        </header>
    );
}
export default Header
