import React from "react";
import styles from "./home.module.css";
import Image from 'next/image';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quibusdam nesciunt nam porro accusantium, repellendus in ea deserunt, non soluta unde beatae illo? Iure magnam autem quae delectus architecto dolorum? Id molestias placeat voluptas dolores, reprehenderit ipsam delectus error nulla consequatur, sint modi culpa quibusdam ipsum accusamus beatae iusto est, animi libero. Aspernatur debitis eos ipsa odit suscipit at molestiae.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>

        <div className={styles.brands}>
          <Image src="/mern.png" alt="Snow Capped Mountain" fill className={styles.brands}   />          
       </div>



      </div>




      <div className={styles.imgContainer}>
        <Image src="/a.png" width={200} height={200} alt="Snow Capped Mountain" className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;



