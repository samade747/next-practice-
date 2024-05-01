import Link from "next/link"
import styles from "../links/links.module.css"
import NavLink from "../navLink/navLink"

const Links = () => {

    const links = [
    {
        title: "Homepage",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Blog",
        path: "/blog",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    
    ]

    return (
        <div className={styles.links}> 
            {links.map((link) => (
                <NavLink key={link.path} item={link} />
            ))}


            
        </div>
    )

}

export default Links;