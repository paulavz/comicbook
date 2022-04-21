import "./index.css";
import { TiStarOutline, TiStarFullOutline } from "react-icons/ti";
import { useAppDispatch } from "../../Redux/Hooks";
import { toggleFavorite } from "../../Redux/Actions/FavoriteActions";

const ComicCard = (props: any) => {
  const favorite = false;
  const dispatch = useAppDispatch();
  const handleClick = (index: number) => {
    dispatch(toggleFavorite(index));
  };

  return (
    <div className="Comic__Card">
      <img
        src={props.comic.urlImage}
        className="img-fluid Comic__Card__Image"
        alt="FJKDJDe"
      />
      {favorite ? (
        <div
          onClick={() => handleClick(props.comic.id)}
          className="Comic__Card__Favorite"
        >
          <TiStarFullOutline color={"yellow"} size={30} />
        </div>
      ) : (
        <div
          onClick={() => handleClick(props.comic.id)}
          id={props.comic.id}
          className="Comic__Card__Favorite"
        >
          <TiStarOutline color={"yellow"} size={30} />
        </div>
      )}
      <div className="Comic__Card__Info">
        <div className="Comic__Card__Info__Icons">
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
