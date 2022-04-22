import { useEffect, useState } from "react";
import { getThumb } from "../../Services/getThumb";

const ThumbImage = (props: any) => {
  const [urlThumb, setUrlThumb] = useState<any>();
  useEffect(() => {
    const callDetails = async () => {
      try {
        const res = await getThumb(props.url);
        if (res) {
          setUrlThumb(res);
        }
      } catch (error) {
        console.log(error);
      }
    };
    callDetails();
  }, [props.url]);
  console.log(props);
  return (
    <div>
      <img src={urlThumb?.urlImage} alt="FJKDJDe" />
    </div>
  );
};

export default ThumbImage;
