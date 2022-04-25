import { useEffect, useState } from "react";
import { getIssues } from "../../Services/getIssues";
import Spinkit from "../Spinkit";
import { BiCaretRight, BiCaretLeft } from "react-icons/bi";
import ComicGrid from "../ComicGrid";
import { IComicIssues } from "../../Models/Comics";
import ComicList from "../ComicList";
import { useAppSelector } from "../../Redux/Hooks";
import "./index.css";

const Comic = () => {
  const [page, setPage] = useState<number>(1);
  const [comicIssues, setComicIssues] = useState<IComicIssues[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const isGrid = useAppSelector((state) => state.view.isGrid);

  useEffect(() => {
    setIsLoaded(false);
    const callIssues = async () => {
      try {
        const res = await getIssues(page, 24);
        if (res) {
          setComicIssues(res);
          setIsLoaded(true);
        } else {
          setError(true);
          setIsLoaded(true);
        }
      } catch (error) {
        setError(true);
        setIsLoaded(true);
      }
    };
    callIssues();
  }, [page]);

  return (
    <div className="mb-4 mt-4">
      {!error ? isLoaded ? (
        <>
          {isGrid ? (
            <ComicGrid comics={comicIssues} />
          ) : (
            <ComicList comics={comicIssues} />
          )}
          <div className="d-flex comic-pagination justify-content-end">
            {page === 1 ? null : (
              <button
                onClick={() => setPage(page - 1)}
                className="comic-pagination-button comic-pagination-button-active"
              >
                <BiCaretLeft color={"white"} size={30} />
              </button>
            )}
            <button
              className="comic-pagination-button"
              style={{ backgroundColor: "#038d6d" }}
            >
              {page}
            </button>
            <button
              onClick={() => setPage(page + 1)}
              className="comic-pagination-button"
            >
              {page + 1}
            </button>
            <button
              onClick={() => setPage(page + 2)}
              className="comic-pagination-button"
            >
              {page + 2}
            </button>
            <button
              onClick={() => setPage(page + 1)}
              className="comic-pagination-button comic-pagination-button-active"
            >
              <BiCaretRight color={"white"} size={30} />
            </button>
          </div>
        </>
      ) : (
        <Spinkit />
      ):<div className="comic-error-container d-flex justify-content-center align-items-center">An error has occurred</div>}
    </div>
  );
};

export default Comic;
