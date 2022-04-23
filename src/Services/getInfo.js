import API from "./Config";

export const getIssues = async (url) => {
  try {
    let res = await API.get(url);
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
