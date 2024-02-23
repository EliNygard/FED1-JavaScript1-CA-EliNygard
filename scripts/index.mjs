import { allFilms } from "./fetchData.mjs";
import { displayFilms } from "./display-films.mjs";
import { filterFunctions } from "./filter-by-genre.mjs";


displayFilms(allFilms);
filterFunctions();