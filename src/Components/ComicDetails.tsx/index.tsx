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
        const cod = url.split("/").at(-2);
        const res = await getIssues(cod);
        if (res) {
          setIsLoaded(true);
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
            <div className="container-md">
              <div className="row">
                <div className="col-12 col-sm-7 order-2 order-sm-1 mb-4">
                  <span className="fs-5 mt-2 menu-subtitle-text comic-details-text">
                    Character
                  </span>
                  <div className="menu-border">
                    <div className="menu-border-item"></div>
                  </div>
                  <div className="row ms-4">
                    {comicInfo?.character_credits?.length > 0 ? (
                      comicInfo.character_credits.map((car: any) => (
                        <div
                          key={car.name}
                          className="col-6 d-flex align-items-center mt-2 mb-2"
                        >
                          <ThumbImage url={car.api_detail_url} />
                          <span className="ms-3 comic-details-text-thumb">{car.name}</span>
                        </div>
                      ))
                    ) : (
                      <p>Not available</p>
                    )}
                  </div>
                  <span className="fs-5 mt-2 menu-subtitle-text comic-details-text">
                    Teams
                  </span>
                  <div className="menu-border">
                    <div className="menu-border-item"></div>
                  </div>
                  <div className="row ms-4">
                    {comicInfo?.team_credits?.length > 0 ? (
                      comicInfo.team_credits.map((team: any) => (
                        <div
                          className="col-6 d-flex align-items-center mt-2 mb-2"
                          key={team.name}
                        >
                          <ThumbImage url={team.api_detail_url} />
                          <span className="ms-3 comic-details-text-thumb">{team.name}</span>
                        </div>
                      ))
                    ) : (
                      <p>Not available</p>
                    )}
                  </div>
                  <span className="fs-5 mt-2 menu-subtitle-text comic-details-text">
                    Locations
                  </span>
                  <div className="menu-border">
                    <div className="menu-border-item"></div>
                  </div>
                  <div className="row ms-4">
                    {comicInfo?.location_credits?.length > 0 ? (
                      comicInfo.location_credits.map((location: any) => (
                        <div
                          className="col-6 d-flex align-items-center mt-2 mb-2"
                          key={location.name}
                        >
                          <ThumbImage url={location.api_detail_url} />
                          <span className="ms-3 comic-details-text-thumb">{location.name}</span>
                        </div>
                      ))
                    ) : (
                      <p>Not available</p>
                    )}
                  </div>
                  <span className="fs-5 mt-2 menu-subtitle-text comic-details-text">
                    Concepts
                  </span>
                  <div className="menu-border">
                    <div className="menu-border-item"></div>
                  </div>
                  <div className="row ms-4">
                    {comicInfo?.concept_credits?.length > 0 ? (
                      comicInfo.concept_credits.map((concept: any) => (
                        <div
                          className="col-6 d-flex align-items-center mt-2 mb-2"
                          key={concept.name}
                        >
                          <ThumbImage url={concept.api_detail_url} />
                          <span className="ms-3 comic-details-text-thumb">{concept.name}</span>
                        </div>
                      ))
                    ) : (
                      <p>Not available</p>
                    )}
                  </div>
                </div>
                <div className="col-12 col-sm-5 order-1 order-sm-1">
                  <div className="comic-details-container-image">
                    <img
                      className="comic-details-image img-fluid"
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
