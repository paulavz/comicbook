import { useEffect, useState } from "react";
import { getThumb } from "../../Services/getThumb";
import { AiFillFileUnknown } from "react-icons/ai";
import Spinner from "../Spinner";
import "./index.css";

const ThumbImage = (props: any) => {
  const [urlThumb, setUrlThumb] = useState<any>();
  const [loadThumb, setLoadThumb] = useState<boolean>(false);
  useEffect(() => {
    const callDetails = async () => {
      setLoadThumb(false);
      const cod = props.url.split("/").at(-2);
      const category = props.url.split("/").at(-3);
      try {
        const res = await getThumb(cod,category);
        if (res) {
          setUrlThumb(res);
          setLoadThumb(true);
        }
      } catch (error) {
        console.log(error);
        setLoadThumb(true);
      }
      setLoadThumb(true);
    };
    callDetails();
  }, [props.url]);
  return (
    <div>
      {loadThumb ? (
        urlThumb?.urlImage === undefined ? (
          <div className="thumbimage-image">
            <AiFillFileUnknown size={40} />
          </div>
        ) : (
          <img
            className="thumbimage-image"
            src={urlThumb?.urlImage}
            alt="FJKDJDe"
          />
        )
      ) : (
        <div className="thumbimage-spinner">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default ThumbImage;
