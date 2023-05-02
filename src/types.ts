export interface Show {
  id: number;
  name: string;
  vote_average: number;
  overview: string;
  first_air_date: string;
  poster_path: string;
}

export type Shows = Show[];

export interface ApiResponse {
  page: number;
  results: Shows;
}
