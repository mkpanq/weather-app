import { WeatherData } from "./types";

export interface ISearchBar {
  setCurrentCity: (city: string) => void;
}

export interface ILastSearch {
  cacheData: WeatherData[];
}

export interface IHeader extends ISearchBar, ILastSearch {}
