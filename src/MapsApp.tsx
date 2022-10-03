import { MapProvider, PlacesProvider } from "./context";
import { HomeScreen } from "./screens";
import "./styles.css";
import "./variables-sass.scss";

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomeScreen />
      </MapProvider>
    </PlacesProvider>
  );
};
