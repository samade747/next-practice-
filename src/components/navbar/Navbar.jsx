import Link from "next/link";
import Links from "./links/Links";
import styles from "../navbar/navbar.module.css"

const Navbar = () => {

    return (
        <div className={styles.container}>
            <div>Logo</div>
            <div>
                <Links />
            </div>
        </div>
    )
}

export default Navbar;