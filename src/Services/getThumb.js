import API from "./Config";
const URLAPI = process.env.REACT_APP_ENDPOINT_API

export const getThumb = async (cod,category) => {
  try {
    let res = await API.get(`${URLAPI}comic/thumb?cod=${cod}&category=${category}`);
    const object = res.data.results;
    const result = {
        urlImage:object.image.icon_url
    }
    return result;
  } catch (error) {    
    return error.response;
  }
};
