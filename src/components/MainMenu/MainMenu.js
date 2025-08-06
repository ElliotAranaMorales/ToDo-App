import { Link } from "react-router-dom";
import "./MainMenu.scss";

function MainMenu() {
return (
    <nav className='main'>
        <Link to="/">Tasks</Link>
        <Link to="/add">Add</Link>
        <Link to="/help">Help</Link>
    </nav>
)};

export default MainMenu;