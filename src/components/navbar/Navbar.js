import logo from '../../resources/pitch_logo.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './navbar.css';
import { logOut } from '../../helpers/firebase';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <div className="links">
                <nav>
                    <Link to="/">מגרשים</Link>
                    <Link to="/add_field">הוספת מגרש</Link>
                    <Link to="/" onClick={logOut} >התנתק</Link>

                </nav>
            </div>
            <Link to="/">
                <img src={logo} alt="logo of company" className="pitch-logo" />
            </Link>
        </nav>
    );
}
 
export default Navbar;