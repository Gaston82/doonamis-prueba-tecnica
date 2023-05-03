export interface ShowStructure {
  id: number;
  name: string;
  vote_average: number;
  overview: string;
  first_air_date: string;
  poster_path: string;
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
