const baseAPI = "https://swapi.dev/api/";

export const getPeople = async () => {
  const res = await fetch(`${baseAPI}people`);
  return await res.json();
};

export const searchPeople = async (people) => {
  const res = await fetch(`${baseAPI}people/?search=${people}`);
  return await res.json();
};
