


import Image from "next/image";
import styles from "./about.module.css"


const Aboutpage = () => {
    return <div>
      <div className={styles.Container}>
      <Image 
      
      src="https://media.licdn.com/dms/image/D4D35AQFsUIczF4QArg/profile-framedphoto-shrink_200_200/0/1710429134380?e=1715443200&v=beta&t=0I9n3WLwkiY03PtEe4bWvrYHjnzDAp7tYAJGSE2BrcI" // Local image path relative to the 'public' directory
                alt="Snow Capped Mountain" 
                width={600} // Provide the width property
                height={400} // Provide the height property
                 />
      </div>
       
      </div>;
  };
  
  export default Aboutpage;