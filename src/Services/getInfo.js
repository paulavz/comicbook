import API from "./Config";

export const getIssues = async (url) => {
  try {
    let res = await API.get(`https://cors-anywhere.herokuapp.com/${url}?api_key=5a6f9e2c8be618cd1007b31fc422403b8c02a7bd&format=json`);
    const object = res.data.results;
    console.log(object)
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
