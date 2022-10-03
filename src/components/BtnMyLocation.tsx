import { useContext } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MapContext, PlacesContext } from "../context";

export const BtnMyLocation = () => {
  const { map, isMapReady } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);

  const onClick = () => {
    if (!isMapReady) throw new Error("Mapa no está listo");
    if (!userLocation) throw new Error("No hay ubicación de usuario");

    map?.flyTo({
      zoom: 14,
      center: userLocation,
    });
  };

  return (
    <button className="btn btn-primary btn-location" onClick={onClick}>
      <FaMapMarkerAlt />
    </button>
  );
};
