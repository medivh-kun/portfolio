import React from "react"
import "../styles/global.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { Link } from "gatsby"

export default function Footer(){
    return(
        <div class="bg-black h-20vh w-full px-4 text-white items-center grid justify-items-center">
            <div class="w-1/4 grid grid-cols-3 justify-items-center items-center gap-4">
                <Link to="/404"><FontAwesomeIcon icon={faTwitter} size="2x"/></Link>
                <Link to="https://www.linkedin.com/in/shawnang23"><FontAwesomeIcon icon={faLinkedin} size="2x"/></Link>
                <Link to="https://www.github.com/shawnawannabe"><FontAwesomeIcon icon={faGithub} size="2x"/></Link>
            </div>
        

        </div>
    )
}