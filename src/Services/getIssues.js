import API from "./Config";

export const getIssues = async (page = 1, limit = 24) => {
  const nroPage = (page - 1)*24;
  try {
    let res = await API.get(`http://localhost:4000/api/comic?limit=${limit}&offset=${nroPage}`);
    console.log(res.data);
    const result = res.data.results.map((d) => ({
      urlImage: d.image.original_url,
      date: d.date_added,
      name: d.volume.name,
      numberIssues: d.issue_number,
      id:d.id
    }));
    return result;
  } catch (error) {
    return error.response;
  }
};
