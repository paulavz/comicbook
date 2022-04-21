import { useEffect, useState } from "react";
import { getIssues } from "../../Services/getIssues";
import Spinkit from "../Spinkit";
import { BiCaretRight, BiCaretLeft } from "react-icons/bi";
import "./index.css";
import ComicGrid from "../ComicGrid";
import { IComicIssues } from "../../Models/Comics";

const Comic = () => {
  const [page, setPage] = useState<number>(1);
  const [comicIssues, setComicIssues] = useState<IComicIssues[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsLoaded(false);
    const callIssues = async () => {
      try {
        const res = await getIssues(page, 24);
        if (res) {
          setComicIssues(res);
          setIsLoaded(true);
        }
      } catch (error) {
        setIsLoaded(true);
        console.log(error);
      }
    };
    callIssues();
  }, [page]);

  return (
    <div className="mb-4 mt-4">
      {isLoaded ? (
        <>
          <ComicGrid comics={comicIssues} />
          <div className="d-flex Comic__Pagination justify-content-end">
            {page === 1 ? null : (
              <button
                onClick={() => setPage(page - 1)}
                className="Comic__Pagination__Button Comic__Pagination__Button__Active"
              >
                <BiCaretLeft color={"white"} size={30} />
              </button>
            )}
            <button
              className="Comic__Pagination__Button"
              style={{ backgroundColor: "#038d6d" }}
            >
              {page}
            </button>
            <button
              onClick={() => setPage(page + 1)}
              className="Comic__Pagination__Button"
            >
              {page + 1}
            </button>
            <button
              onClick={() => setPage(page + 2)}
              className="Comic__Pagination__Button"
            >
              {page + 2}
            </button>
            <button
              onClick={() => setPage(page + 1)}
              className="Comic__Pagination__Button Comic__Pagination__Button__Active"
            >
              <BiCaretRight color={"white"} size={30} />
            </button>
          </div>
        </>
      ) : (
        <Spinkit />
      )}
    </div>
  );
};

export default Comic;
