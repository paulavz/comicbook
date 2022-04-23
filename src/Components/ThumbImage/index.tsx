import { useEffect, useState } from "react";
import { getThumb } from "../../Services/getThumb";
import Spinner from "../Spinner";
import './index.css';

const ThumbImage = (props: any) => {
  const [urlThumb, setUrlThumb] = useState<any>();
  const [loadThumb,setLoadThumb] = useState<boolean>(false);
  useEffect(() => {
    const callDetails = async () => {
      setLoadThumb(false);
      const cod = props.url.split('/').at(-2);
      const category = props.url.split('/').at(-3);
      try {
        const res = await getThumb(`http://localhost:4000/api/comic/thumb?cod=${cod}&category=${category}`)
        if (res) {
          setUrlThumb(res);
          setLoadThumb(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    callDetails();
  }, [props.url]);
  return (
    <div>
      {loadThumb ? <img className="thumbimage-image" src={urlThumb?.urlImage} alt="FJKDJDe" /> : <div className="thumbimage-spinner"><Spinner /></div>}
    </div>
  );
};

export default ThumbImage;
