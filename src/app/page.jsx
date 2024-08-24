import React from "react";
import styles from "./home.module.css";
import Image from 'next/image';
import PurpleShine from "../components/purpleshine/PurpleShine";


const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.subtitle}>I'm Samad</h1>

        <div className="absolute -bottom-[50%] left-[36%] z-10">
          <span className="opacity-40">
            <PurpleShine />
          </span>
          <PurpleShine />
        </div>
        

        <p className={styles.title}>
        A Dynamic Mern Stack Developer
        </p>
        <p className={styles.title2}>
        a passionate Full Stack Developer transforming ideas into immersive web experiences. With 0.6+ years of experience, I blend functionality with a touch of brilliance.
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
        <Image src="/a.png" width={450} height={500} alt="Snow Capped Mountain" className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;



