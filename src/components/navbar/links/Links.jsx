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


    // temporary
    const session = true
    const isAdmin = true


     



//4831
    return (
        <div className={styles.links}> 
            {links.map((link) => (
                <NavLink key={link.path} item={link} />
            ))}{
                session ? (
                    <>
                    {
                       isAdmin && (
                      <NavLink item={{title: "Admin", path: "/admin"}} />
                       ) 
                    }
                    <button>Logout</button>
                    </>
                ) : (
                    <NavLink item={{title: "Login", path: "/login"}} />                    
                )
            }            
        </div>
    )

}

export default Links;