"use client"


import Image from "next/image";
import styles from "about.module.css"


const Aboutpage = () => {
    return <div>
      <div className={styles.container}>
      <Image src="/a.png" width={500} height={500} alt="" fill/>
      </div>
      
      </div>;
  };
  
  export default Aboutpage;