import * as React from "react"
import { useEffect, useRef } from "react";

import { links } from "./links";
import { Link } from "gatsby"

const Navbar = ({ showLinks }) => {
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerRef.current.style.height = `${ linksHeight }px`;
        } else {
            linksContainerRef.current.style.height = '0px';
        }
    }, [showLinks]);

    return (
        <nav>
            <div className='links-container' ref={ linksContainerRef }>
                <ul className='links' ref={ linksRef }>
                    { links.map((link) => {
                        const { id, url, text } = link;
                        return (
                            <li key={ id }>
                                <Link to={ url }>{ text }</Link>
                            </li>
                        );
                    }) }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar