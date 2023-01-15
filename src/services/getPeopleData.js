import { SWAPI__PEOPLE, SWAPI__ROOT } from "../constants/api";
import { HTTPS } from "../constants/api";
import { IMG__EXTENSION} from "../constants/api";
import { URL__IMG } from "../constants/api";

const getId = (url, category) => {
  const id = url.replace(HTTPS + SWAPI__ROOT + category, "").replace(/\//g, "");
  return id;
};

export const getPeopleId = url => getId(url, SWAPI__PEOPLE);

export const getPeopleImage = id => `${URL__IMG}/${id+IMG__EXTENSION}`;
