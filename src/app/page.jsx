import React from "react";
import styles from "./home.module.css";


const Home = () => {

  return (
  <div className={styles.conatiner}>    
    <div className={styles.textConatiner}>
        <h1> Creatve Thoughts Agency</h1>
    

        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quibusdam nesciunt nam porro accusantium, repellendus in ea deserunt, non soluta unde beatae illo? Iure magnam autem quae delectus architecto dolorum?
         Id molestias placeat voluptas dolores, reprehenderit ipsam delectus error nulla consequatur, sint modi culpa quibusdam ipsum accusamus beatae iusto est, animi libero. Aspernatur debitis eos ipsa odit suscipit at molestiae.</p>

       <div className={styles.buttons}>
          <button className={styles.button} >Learn More</button>
          <button className={styles.button}>Contact</button>
      </div>

      <div className={styles.brands}>
          <Image src="/brands.png" alt="Snow Capped Mountain" fill className={styles.branding}   />          
      </div>

    </div>




    <div className={styles.imageConatiner}>
        <Image src="hero.png" alt="Snow Capped Mountain" fill className={styles.heroImg}   />
    </div>
    
    
    </div>
    // 11010
  )
};

export default Home;