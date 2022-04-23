import { MdOutlineApps } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import "./index.css";
import { useAppDispatch, useAppSelector } from "../../Redux/Hooks";
import { toggleGridState } from "../../Redux/Actions/ToggleActions";
import React from "react";
import { TiArrowBack, TiStarFullOutline, TiStarOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { isFavorite } from "../../Helpers/isFavorite";
import { toggleFavorite } from "../../Redux/Actions/FavoriteActions";

interface Props {
  title: string;
  showMenu: boolean;
}

const Menu: React.FC<Props> = ({ title, showMenu }) => {
  const isGrid = useAppSelector((state) => state.view.isGrid);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const favoritesList = useAppSelector((state) => state.favorite.favorites);
  const { id } = useAppSelector((state) => state.comic.comic);

  const handleClick = (index: number) => {
    dispatch(toggleFavorite(index));
  };

  return (
    <div className="menu">
      <div className="menu-container">
        <div className="menu-subtitle">
          {!showMenu && (
            <>
              <TiArrowBack
                onClick={() => navigate(-1)}
                size={30}
                className="menu-icon-back"
              />
              <span onClick={() => handleClick(id)}>
                {isFavorite(favoritesList, id) ? (
                  <TiStarFullOutline
                    className="comic-list-icon"
                    color={"yellow"}
                    size={30}
                  />
                ) : (
                  <TiStarOutline
                    className="comic-list-icon"
                    color={"yellow"}
                    size={30}
                  />
                )}
              </span>
            </>
          )}
          <span className="menu-subtitle-text">{title}</span>
        </div>
        {showMenu && (
          <div className="menu-icons">
            <div
              onClick={() => dispatch(toggleGridState(false))}
              className="menu-icons-container"
            >
              <GiHamburgerMenu
                size={34}
                color={isGrid ? "black" : "#00c496"}
                className="menu-icons-item menu-icons-item-list"
              />
              <span
                style={{ color: isGrid ? "black" : "#00c496" }}
                className="menu-icons-text"
              >
                List
              </span>
            </div>
            <div
              onClick={() => dispatch(toggleGridState(true))}
              className="Menu__Icons__Container"
            >
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
        )}
      </div>
      <div className="menu-border">
        <div className="menu-border-item"></div>
      </div>
    </div>
  );
};

export default Menu;
