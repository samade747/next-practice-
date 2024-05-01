import Link from "next/link"

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
        <div> 
            {links.map((link) => (
                <Link key={link.path} href={link.path}>{link.title}</Link>
            ))}


            
        </div>
    )

}

export default Links;