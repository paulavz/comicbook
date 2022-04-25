import "./index.css";
import { TiStarOutline, TiStarFullOutline } from "react-icons/ti";
import { useAppDispatch, useAppSelector } from "../../Redux/Hooks";
import { toggleFavorite } from "../../Redux/Actions/FavoriteActions";
import { isFavorite } from "../../Helpers/isFavorite";
import { addUrlComic } from "../../Redux/Actions/ComicAction";
import { useNavigate } from "react-router-dom";

const ComicCard = (props: any) => {
  const favoritesList = useAppSelector((state) => state.favorite.favorites);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = (index: number) => {
    dispatch(toggleFavorite(index));
  };

  const handleSelect = (
    url: string,
    id: number,
    title: string,
  ) => {
    dispatch(
      addUrlComic({
        url,
        id,
        title,
      })
    );
    navigate("/details");
  };

  return (
    <div className="comic-card">
      <img
        src={props.comic.urlImage}
        onClick={() =>
          handleSelect(
            props.comic.api_detail_url,
            props.comic.id,
            props.comic.name,
          )
        }
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
          <h3
            onClick={() =>
              handleSelect(
                props.comic.api_detail_url,
                props.comic.id,
                props.comic.name,
              )
            }
          >
            {props.comic.name}
          </h3>
        </div>
        <div>
          <p>{props.comic.date}</p>
        </div>
      </div>
    </div>
  );
};

export default ComicCard;
