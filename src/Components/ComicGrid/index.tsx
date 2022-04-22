import React from "react";
import { IComicIssues } from "../../Models/Comics";
import ComicCard from "../ComicCard";

interface Props {
  comics: IComicIssues[];
}

const ComicGrid: React.FC<Props> = ({ comics }) => {
  return (
    <div className="container-md">
      <div className="row row-cols-12 m-2">
        {comics.map((comic) => (
          <div
            key={comic.id}
            className="p-2 col-md-4 col-sm-4 col-lg-3 col-6 col-xl-2"
          >
            <ComicCard comic={comic} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComicGrid;
