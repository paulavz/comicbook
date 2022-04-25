import API from "./Config";
const URLAPI = process.env.REACT_APP_ENDPOINT_API
const TOKEN = process.env.REACT_APP_TOKEN;

export const getThumb = async (cod,category) => {
  try {
    let res = await API.get(`${URLAPI}comic/thumb?cod=${cod}&category=${category}&token=${TOKEN}`);
    const object = res.data.results;
    const result = {
        urlImage:object.image.icon_url
    }
    return result;
  } catch (error) {    
    return error.response;
  }
};
