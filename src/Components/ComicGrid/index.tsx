import React from "react";
import { IComicIssues } from "../../Models/Comics";
import ComicCard from "../ComicCard";

interface Props {
    comics: IComicIssues[]
}

const ComicGrid: React.FC<Props> = ({ comics }) => {
    console.log(comics)
    const test = [12,12,1,21,21,2,1,2,1,21,2,2,2,2,2,2,2,2,2,2]
    return (
        <div className="container">
            <div className="row row-cols-12 m-2">
                {comics.map((comic) => (<div className="p-2 col-md-3 col-sm-4 col-6 col-xl-2">
                    <ComicCard comic={comic}/>
                </div>))}
            </div>
        </div>

    )
}

export default ComicGrid