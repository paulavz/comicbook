import API from "./Config";
const TOKEN = process.env.REACT_APP_TOKEN;

export const getIssues = async (page = 1, limit = 24) => {
  const nroPage = (page - 1) * 24;
  try {
    //   let res = await API.get(`${URLAPI}comic?limit=${limit}&offset=${nroPage}`);
    let res = await API.get(
      `https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/issues/?api_key=${TOKEN}&format=json&limit=${limit}&offset=${nroPage}`
    );
    const result = res.data.results.map((d) => ({
      urlImage: d.image.original_url,
      date: d.date_added,
      name: d.volume.name,
      numberIssues: d.issue_number,
      id: d.id,
      api_detail_url: d.api_detail_url,
    }));
    return result;
  } catch (error) {
    return error.response;
  }
};
