import styles from "./contact.module.css";
import Image from "next/image";

const ContactPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/contact.jpg" alt="Contact Image" fill className={styles.contactImg} />
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <input type="text" placeholder="Name and Surname" />
                    <input type="text" placeholder="Email Address" />
                    <input type="text" placeholder="Phone Number (optional)" />
                    <textarea placeholder="Message" cols="30" rows="10"></textarea>
                    <button>Send</button>
                </form>               
            </div>
        </div>
    );
};

export default ContactPage;
