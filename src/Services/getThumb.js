import API from "./Config";

export const getThumb = async (url) => {
  try {
    let res = await API.get(`https://cors-anywhere.herokuapp.com/${url}?api_key=5a6f9e2c8be618cd1007b31fc422403b8c02a7bd&format=json`);
    const object = res.data.results;
    const result = {
        urlImage:object.image.thumb_url
    }
    return result;
  } catch (error) {
    return error.response;
  }
};
