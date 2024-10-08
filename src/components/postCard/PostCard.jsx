import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'

const PostCard = () => {
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <div  className={styles.imgContainer}>
                    <Image src="/a.png" width={450} height={500} alt="" />
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores expedita r</p>
            <Link href={"/"} className={styles.link} >READ MORE</Link>
        </div>
        </div>
    )
}

export default PostCard
