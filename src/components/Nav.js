import React from "react"
import {Link} from "react-router-dom"

export const Nav = (props) => {
    return <nav>
        <Link to = "/past">
            <div>
                Past Events
            </div>
        </Link>

        <Link to = "/bio">
            <div>
                Bio Nav
            </div>
        </Link>

        <Link to = "/watch">
            <div>
                How To Watch
            </div>
        </Link>

    </nav>
}