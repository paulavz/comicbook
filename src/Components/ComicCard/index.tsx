import "./index.css";
import { TiStarOutline, TiStarFullOutline } from "react-icons/ti";
import { useAppDispatch, useAppSelector } from "../../Redux/Hooks";
import { toggleFavorite } from "../../Redux/Actions/FavoriteActions";
import { isFavorite } from "../../Helpers/isFavorite";

const ComicCard = (props: any) => {
  const favoritesList = useAppSelector((state) => state.favorite.favorites);
  const dispatch = useAppDispatch();

  const handleClick = (index: number) => {
    dispatch(toggleFavorite(index));
  };

  return (
    <div className="comic-card">
      <img
        src={props.comic.urlImage}
        className="img-fluid comic-card-image"
        alt="FJKDJDe"
      />
      {isFavorite(favoritesList, props.comic.id) ? (
        <div
          onClick={() => handleClick(props.comic.id)}
          className="comic-card-favorite"
        >
          <TiStarFullOutline color={"yellow"} size={30} />
        </div>
      ) : (
        <div
          onClick={() => handleClick(props.comic.id)}
          className="comic-card-favorite"
        >
          <TiStarOutline color={"yellow"} size={30} />
        </div>
      )}
      <div className="comic-card-info">
        <div className="comic-card-info-icons">
          <h3>{props.comic.name}</h3>
        </div>
        <div>
          <p>{props.comic.date}</p>
        </div>
      </div>
    </div>
  );
};

export default ComicCard;
