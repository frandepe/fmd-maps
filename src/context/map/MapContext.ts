//@ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import { Map } from "!mapbox-gl";
import { createContext } from "react";

interface MapContextProps {
  isMapReady: boolean;
  map?: Map;
  kilometers?: number;
  minutes?: number;

  // Methods
  setMap: (map: Map) => void;
  getRouteBetweenPoints: (
    start: [number, number],
    end: [number, number]
  ) => Promise<void>;
}

export const MapContext = createContext({} as MapContextProps);
