import { useContext } from "react";
import { DriverContext } from "./config";

export const useDriver = () => {
  return useContext(DriverContext);
};
