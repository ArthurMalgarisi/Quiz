import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
         <div className="header">
            <Link to="/" className="title">
                Educação financeira
            </Link>
            <p className="title">Quiz</p>
            <hr className="divider"/>
        </div>
    );   
}

export default Header
