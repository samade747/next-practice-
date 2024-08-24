import Image from "next/image";
import styles from "./about.module.css"


const Aboutpage = () => {
    return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2>About Agency</h2>
        <h1 className="">we create digital ideas thath are bigger, bolder, braver and better</h1>          
      <p>
        we create digital ideas thath are bigger, bolder, braver and better
        belive in our clients. we create digital ideas thath are bigger, bolder, braver and better
      </p>

      <div className={styles.boxes}>
        <div className={styles.box}>
          <h1>10 k+</h1>
          <p>year of experience</p>        
        </div>  


        <div className={styles.box}>
          <h1>10 k+</h1>
          <p>year of experience</p>        
        </div>  


        <div className={styles.box}>
          <h1>10 k+</h1>
          <p>year of experience</p>        
        </div>  

      </div>  



    </div> 

    <div className={styles.imgContainer}>
      <Image
        src="/about.png"
        alt="about Image"
        fill
        className={styles.img}
      />
    </div>

  </div>
      )
  };
  
  export default Aboutpage;