import annualCO2 from "../json/annualCo2.json";
import { fetchGeoJSON, getJSON } from "./helper";
import { GEOJSON_URL } from "./config";
import code_to_name from "../json/code_to_name.json";

export const state = {
  geojson: {},
  annualCO2: {},
  year: "2021",
  code_to_name: {},
  currCountry: {},
};

export const loadData = async function () {
  try {
    state.annualCO2 = annualCO2;
    state.code_to_name = code_to_name;
    state.geojson = await fetchGeoJSON(GEOJSON_URL);
  } catch (error) {
    throw error;
  }
};

export const getCountry = async function (lat, lng) {
  try {
    const res = await getJSON(`${API_GEOCODE}?q=${lat}%2C${lng}&key=${API_KEY}`);
    const data = {
      code: res.results[0].components["ISO_3166-1_alpha-3"],
      name: res.results[0].components.country,
    };
    state.currCountry = data;
  } catch (error) {
      throw error;
  }
};
