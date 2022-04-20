import { Link } from 'react-router-dom'
import logo from './resources/pitch_logo.png'

const Navbar = () => {
    return (  
        <nav className="navbar">
            <div className="links">
                <h2>מגרשים</h2>
                <h2>הוספת מגרש</h2>
            </div>
            <img src={logo} alt="logo of company" className="pitch-logo"/>
        </nav>
    );
}
 
export default Navbar;