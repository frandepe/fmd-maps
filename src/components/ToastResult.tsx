import { useContext } from "react";
import { MapContext } from "../context";
import { AiFillCar } from "react-icons/ai";

export const ToastResult = () => {
  const { kilometers, minutes } = useContext(MapContext);
  return (
    <div className="toast-container">
      <h6>
        <AiFillCar /> Distancia de recorrido {kilometers}kms - {minutes} min de
        demora
      </h6>
    </div>
  );
};
