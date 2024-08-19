import { QueryKey } from "@tanstack/react-query";
import { WeatherData } from "./types";

export interface ISearchBar {
  setCurrentCity: (city: string) => void;
}

export interface IHeader extends ISearchBar {
  cacheData: [QueryKey, WeatherData | undefined][];
}
