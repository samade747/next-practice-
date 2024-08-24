import Link from "next/link";
import Links from "./links/Links";
import styles from "../navbar/navbar.module.css"
import Image from "next/image";

const Navbar = () => {

    return (
        <div className={styles.container}>
        
            <Link href="/" className={styles.logo}>
            <Image src="/logo1.png" alt="logo" width={80} height={80}  className={styles.brands}   />          
            </Link>
            <div>
                <Links />
            </div>
        </div> 
    )
}

export default Navbar;