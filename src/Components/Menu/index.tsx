import { MdOutlineApps } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import "./index.css";

const Menu = () => {
    return (
        <div className="Menu">
            <div className="Menu__Container">
                <div className="Menu__Subtitle">
                    <span className="Menu__Subtitle__Text">Latest Issues</span>
                </div>
                <div className="Menu__Icons">
                    <div className="Menu__Icons__Container">
                        <GiHamburgerMenu size={34} color={"black"} className="Menu__Icons__Item Menu__Icons__Item__List"/>
                        <span className="Menu__Icons__Text">List</span>
                    </div>
                    <div className="Menu__Icons__Container">
                        <MdOutlineApps color={"black"} size={35} className="Menu__Icons__Item Menu__Icons__Item__Grid"/>
                        <span className="Menu__Icons__Text Menu__Icons__Text__Grid">Grid</span>
                    </div>
                </div>
            </div>
            <div className="Menu__Border">
                <div className="Menu__Border__Item"></div>
            </div>
        </div>
    );
};

export default Menu;
