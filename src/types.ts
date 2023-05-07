export interface ShowStructure {
  id: number;
  name: string;
  vote_average: number;
  overview: string;
  first_air_date: string;
  poster_path: string;
  backdrop_path: string;
  credits: Credits;
  genres: Genre[];
}

export interface Genre {
  id: number;
  name: string;
}

export type Shows = ShowStructure[];

export interface ApiResponse {
  page: number;
  results: Shows;
}

export interface ShowState {
  currentShow: ShowStructure;
  shows: Shows;
}

export interface Cast {
  id: number;
  name: string;
  character?: string;
}

export interface Credits {
  cast: Cast[];
  crew: Cast[];
}
