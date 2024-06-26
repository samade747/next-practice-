import styles from "./contact.module.css"
import Image from "next/image";

const contactpage = () => {
    return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.jpg" fill className={styles.contactImg} />

      </div>
        <div className={styles.formContainer}>
        <form action=""  className={styles.form}>
          <input type="text" placeholder="Name and surename" />
          <input type="text" placeholder="email address" />
          <input type="text" placeholder="phone number (optional)" />
          <textarea placeholder="Message" cols="30" rows="10" id='' type="text">
            </textarea>
        </form>
        <button>Send</button>
        
      </div>
    </div>
    )
  };
  
  export default contactpage;