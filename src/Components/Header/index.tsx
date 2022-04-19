import './index.css'
import TitleDesktopImage from '../../Images/TitleDesktop.png';
import HeaderBackgroundImage from '../../Images/HeaderBackground.png';

const Header = () => {
  return (
    <header className="Header" style={{backgroundImage: `url(${HeaderBackgroundImage})`}}>
      <img className="Header__Logo" alt="Header" src={TitleDesktopImage}></img>
    </header>
  )
}

export default Header