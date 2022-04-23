import API from "./Config";

export const getThumb = async (url) => {
  try {
    let res = await API.get(url);
    const object = res.data.results;
    const result = {
        urlImage:object.image.icon_url
    }
    return result;
  } catch (error) {
    return error.response;
  }
};
