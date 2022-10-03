import { useContext } from "react";
import {
  BtnMyLocation,
  MapView,
  ReactLogo,
  SearchBar,
  ToastResult,
} from "../components";
import { MapContext } from "../context";

export const HomeScreen = () => {
  const { kilometers } = useContext(MapContext);
  return (
    <div>
      <MapView />
      <BtnMyLocation />
      <ReactLogo />
      <SearchBar />
      {kilometers !== 0 && <ToastResult />}
    </div>
  );
};
