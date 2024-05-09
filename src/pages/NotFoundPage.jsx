import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div className="text-center flex flex-col justify-center items-center h-96" >
            <h1 className="text-xl mb-5">404 Not Found</h1>
            <p className="text-6xl font-bold mb-4">This page does not exist </p>
            <Link to="/" class="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4">Go Back</Link>
        </div>
    )
}
export default NotFoundPage