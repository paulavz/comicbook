import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
import { isFavorite } from "../../Helpers/isFavorite";
import { IComicIssues } from "../../Models/Comics";
import { addUrlComic } from "../../Redux/Actions/ComicAction";
import { toggleFavorite } from "../../Redux/Actions/FavoriteActions";
import { useAppDispatch, useAppSelector } from "../../Redux/Hooks";
import "./index.css";

interface Props {
  comics: IComicIssues[];
}

const ComicList: React.FC<Props> = ({ comics }) => {
  const favoritesList = useAppSelector((state) => state.favorite.favorites);
  const dispatch = useAppDispatch();

  const handleClick = (index: number) => {
    dispatch(toggleFavorite(index));
  };

  const handleSelect = (
    url: string,
    id: number,
    title: string,
  ) => {
    dispatch(addUrlComic({ url, id, title }));
  };

  return (
    <div className="container" style={{ marginTop: -20, marginBottom: 20 }}>
      {comics.map((comic) => (
        <div>
          <div className="row pb-4 pt-4 d-flex justify-content-center ">
            <div
              onClick={() =>
                handleSelect(
                  comic.api_detail_url,
                  comic.id,
                  comic.name,
                )
              }
              className="col-lg-3 col-sm-4 col-12 d-flex justify-content-center"
            >
              <img
                src={comic.urlImage}
                className="comic-list-image"
                alt="FJKDJDe"
              />
            </div>
            <div className="col-lg-5 col-md-6 col-sm-8 col-12">
              <div className="mt-4 card-body d-flex flex-column">
                <h5 className="card-title text-center fw-bold comic-list-title">
                  {comic.name}
                  {isFavorite(favoritesList, comic.id) ? (
                    <TiStarFullOutline
                      onClick={() => handleClick(comic.id)}
                      className="comic-list-icon"
                      color={"yellow"}
                      size={30}
                    />
                  ) : (
                    <TiStarOutline
                      onClick={() => handleClick(comic.id)}
                      className="comic-list-icon"
                      color={"yellow"}
                      size={30}
                    />
                  )}
                </h5>
                <p className="card-text text-center">
                  <small className="text-muted">{comic.date}</small>
                </p>
              </div>
            </div>
          </div>
          <div className="menu-border">
            <div className="menu-border-item"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComicList;
