import Image from 'next/image'

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
            <p className={styles.desc}>Desc</p>
            <Link href="/blog/post" >READ MORE</Link>
        </div>
        </div>
    )
}

export default PostCard
