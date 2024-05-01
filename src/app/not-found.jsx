import Link from "next/link"

const NotFound = () => {

    return (
        <div>

            <h1>Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link href="/">Back to Home</Link>

        </div>


    )
}


export default NotFound