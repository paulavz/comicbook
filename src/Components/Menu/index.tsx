import { MdOutlineApps } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import "./index.css";
import { useAppDispatch, useAppSelector } from "../../Redux/Hooks";
import { toggleGridState } from "../../Redux/Actions/ToggleActions";

const Menu = () => {
  const isGrid = useAppSelector((state) => state.view.isGrid);
  const dispatch = useAppDispatch();

  return (
    <div className="menu">
      <div className="menu-container">
        <div className="menu-subtitle">
          <span className="menu-subtitle-text">Latest Issues</span>
        </div>
        <div className="menu-icons">
          <div
            onClick={() => dispatch(toggleGridState(false))}
            className="menu-icons-container"
          >
            <GiHamburgerMenu
              size={34}
              color={isGrid ? "black" : "#00c496" }
              className="menu-icons-item menu-icons-item-list"
            />
            <span
              style={{ color: isGrid ? "black" : "#00c496" }}
              className="menu-icons-text"
            >
              List
            </span>
          </div>
          <div onClick={() => dispatch(toggleGridState(true))} className="Menu__Icons__Container">
            <MdOutlineApps
              color={isGrid ? "#00c496" : "black"}
              size={35}
              className="menu-icons-item menu-icons-item-grid"
            />
            <span
              style={{ color: isGrid ? "#00c496" : "black" }}
              className="menu-icons-text menu-icons-text-grid"
            >
              Grid
            </span>
          </div>
        </div>
      </div>
      <div className="menu-border">
        <div className="menu-border-item"></div>
      </div>
    </div>
  );
};

export default Menu;
