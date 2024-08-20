import { CachedWeatherData } from "./types";

export interface ISearchBar {
  setCurrentCity: (city: string) => void;
}

export interface ILastSearch {
  cacheData: CachedWeatherData[];
}

export interface IHeader extends ISearchBar, ILastSearch {}
