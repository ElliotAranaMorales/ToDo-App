import MainMenu from '../MainMenu/MainMenu';
import './Header.scss';
import { FaTasks } from 'react-icons/fa';

function Header() {
  return (
    <>
      <header>
        <div className='title'><FaTasks /> Todo App</div>
        <div className='author'>by Elliot Arana</div>
      </header>
      <MainMenu />
    </>
  );
}

export default Header;
