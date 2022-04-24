import API from "./Config";
const URLAPI = process.env.REACT_APP_ENDPOINT_API

export const getIssues = async (cod) => {
  try {
    let res = await API.get(`${URLAPI}comic/detail?cod=${cod}`);
    const object = res.data.results;
    const result = {
      urlImage: object.image.original_url,
      character_credits:object.character_credits,
      team_credits:object.team_credits,
      location_credits:object.location_credits,
      concept_credits:object.concept_credits,
      name:object.volume.name
    };
    return result;
  } catch (error) {
    return error.response;
  }
};
