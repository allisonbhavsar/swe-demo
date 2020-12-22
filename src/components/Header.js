import { Link } from 'react-router-dom';

const Header = ({title, subtitle}) => {
    return (
        <div>
            <div id="header">
                <img id="home-img" alt="cover" src="https://swe.ucsd.edu/wp-content/uploads/2020/11/cropped-DSC_0148.jpg" />
                <div id="home-title" class="centered">
                    <h1>{title}</h1>
                    <h3>{subtitle}</h3>
                </div>
            </div>
            <div id="navbar">
                <ul id="nav-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/calendar">Calendar</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;