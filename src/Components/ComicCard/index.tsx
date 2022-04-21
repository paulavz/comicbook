import "./index.css";
import { TiStarOutline, TiStarFullOutline } from "react-icons/ti";

const ComicCard = (props: any) => {
  const favorite = false;
  return (
    <div className="Comic__Card">
      <img
        src={props.comic.urlImage}
        className="img-fluid Comic__Card__Image"
        alt="FJKDJDe"
      />

      {favorite ? (
        <div className="Comic__Card__Favorite">
          <TiStarFullOutline color={"yellow"} size={30} />
        </div>
      ) : (
        <div className="Comic__Card__Favorite">
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
