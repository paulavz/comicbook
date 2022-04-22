import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../Redux/Hooks";
import { getIssues } from "../../Services/getInfo";
import Header from "../Header";
import Menu from "../Menu";
import Spinkit from "../Spinkit";
import ThumbImage from "../ThumbImage";
import "./index.css";

const ComicDetails = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { url, title } = useAppSelector((state) => state.comic.comic);
  const [error, setError] = useState<boolean>(false);
  const [comicInfo, setComicInfo] = useState<any>();
  useEffect(() => {
    setIsLoaded(false);
    const callDetails = async () => {
      try {
        const res = await getIssues(url);
        if (res) {
          setIsLoaded(true);
          console.log(res);
          setComicInfo(res);
        }
      } catch (error) {
        setError(true);
        setIsLoaded(true);
        console.log(error);
      }
    };
    callDetails();
  }, [url]);
  return (
    <div>
      <Header />
      <Menu title={title} showMenu={false} />
      <div>
        {isLoaded ? (
          error ? (
            <p>An error has occurred</p>
          ) : (
            <div className="container">
              <div className="row">
                <div className="col-7">
                  <span className="menu-subtitle-text comic-details-text">
                    Character
                  </span>
                  <div className="menu-border">
                    <div className="menu-border-item"></div>
                  </div>
                  {comicInfo?.character_credits?.length > 0 ? (
                    comicInfo.character_credits.map((car: any) => (
                      <div>
                        <span>{car.name}</span>
                        <ThumbImage url={car.api_detail_url} />
                      </div>
                    ))
                  ) : (
                    <p>Not available</p>
                  )}
                  <span className="menu-subtitle-text comic-details-text">
                    Teams
                  </span>
                  <div className="menu-border">
                    <div className="menu-border-item"></div>
                  </div>

                  {comicInfo?.team_credits?.length > 0 ? (
                    comicInfo.team_credits.map((team: any) => (
                      <div key={team.name}>
                        <span>{team.name}</span>
                        <ThumbImage url={team.api_detail_url} />
                      </div>
                    ))
                  ) : (
                    <p>Not available</p>
                  )}
                  <span className="menu-subtitle-text comic-details-text">
                    Locations
                  </span>
                  <div className="menu-border">
                    <div className="menu-border-item"></div>
                  </div>
                  {comicInfo?.location_credits?.length > 0 ? (
                    comicInfo.location_credits.map((location: any) => (
                      <div key={location.name}>
                        <span>{location.name}</span>
                        <ThumbImage url={location.api_detail_url} />
                      </div>
                    ))
                  ) : (
                    <p>Not available</p>
                  )}
                  <span className="menu-subtitle-text comic-details-text">
                    Concepts
                  </span>
                  <div className="menu-border">
                    <div className="menu-border-item"></div>
                  </div>
                  {comicInfo?.concept_credits?.length > 0 ? (
                    comicInfo.concept_credits.map((concept: any) => (
                      <div key={concept.name}><span>{concept.name}</span><ThumbImage url={concept.api_detail_url} /></div>
                    ))
                  ) : (
                    <p>Not available</p>
                  )}
                </div>
                <div className="col-5 d-flex justify-content-end">
                  <div className="comic-details-container-image">
                    <img
                      className="comic-details-image"
                      src={comicInfo.urlImage}
                      alt="FJKDJDe"
                    />
                  </div>
                </div>
              </div>
            </div>
          )
        ) : (
          <Spinkit />
        )}
      </div>
    </div>
  );
};

export default ComicDetails;
