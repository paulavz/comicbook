import './index.css'
import TitleDesktopImage from '../../Images/TitleDesktop.png';
import HeaderBackgroundImage from '../../Images/HeaderBackground.png';

const Header = () => {
  return (
    <header className="header" style={{backgroundImage: `url(${HeaderBackgroundImage})`}}>
      <img className="header-logo" alt="Header" src={TitleDesktopImage}></img>
    </header>
  )
}

export default Header