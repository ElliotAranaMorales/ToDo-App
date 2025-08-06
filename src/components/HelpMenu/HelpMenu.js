import { Link } from "react-router-dom";

function HelpMenu() {
return (
    <nav className='main'>
        <Link to="add">Adding Tasks</Link>
        <Link to="remove">Removing Tasks</Link>
        <Link to="change">Changing Status</Link>
    </nav>
)};

export default HelpMenu;