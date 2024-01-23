import './Error404.css'
import {FaTimes} from "react-icons/fa";
import {Link} from "react-router-dom";

function Error404() {
    return (
        <div className="error404Dimension">
            <h1>Oops! Page Not Found <span className="timesColor align-bottom"><FaTimes/></span></h1>
            <h3 className="mt-2">Click the button below to return to the home page</h3>

            <Link to="/" className="backLink mt-4">Return</Link>
        </div>
    );
}

export default Error404;
