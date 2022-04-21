import { MdOutlineApps } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import "./index.css";
import { useAppDispatch, useAppSelector } from "../../Redux/Hooks";
import { toggleGridState } from "../../Redux/Actions/ToggleActions";

const Menu = () => {
  const isGrid = useAppSelector((state) => state.view.isGrid);
  const dispatch = useAppDispatch();

  return (
    <div className="Menu">
      <div className="Menu__Container">
        <div className="Menu__Subtitle">
          <span className="Menu__Subtitle__Text">Latest Issues</span>
        </div>
        <div className="Menu__Icons">
          <div
            onClick={() => dispatch(toggleGridState(false))}
            className="Menu__Icons__Container"
          >
            <GiHamburgerMenu
              size={34}
              color={isGrid ? "black" : "#00c496" }
              className="Menu__Icons__Item Menu__Icons__Item__List"
            />
            <span
              style={{ color: isGrid ? "black" : "#00c496" }}
              className="Menu__Icons__Text"
            >
              List
            </span>
          </div>
          <div onClick={() => dispatch(toggleGridState(true))} className="Menu__Icons__Container">
            <MdOutlineApps
              color={isGrid ? "#00c496" : "black"}
              size={35}
              className="Menu__Icons__Item Menu__Icons__Item__Grid"
            />
            <span
              style={{ color: isGrid ? "#00c496" : "black" }}
              className="Menu__Icons__Text Menu__Icons__Text__Grid"
            >
              Grid
            </span>
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
