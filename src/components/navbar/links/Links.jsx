"use client"

import link from "next/link"
import styles from "../links/links.module.css"
import NavLink from "../navLink/navLink"
import { useState } from "react"

const Links = () => {

    const [open, setOpen] = useState(false)

    // temporary
    const session = true
    const isAdmin = true



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


    


     



//4831
    return (
    <div className={styles.container}> 





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
                    <button className={styles.Logout}>Logout</button>
                    </>
                ) : (
                    <NavLink item={{title: "Login", path: "/login"}} />                    
                )
                //5348

            }            
        </div>
        <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
        {
            open && <div className={styles.mobileLinks}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title}/>
                ))}

            </div>
        }
        </div>
    )

}

export default Links;