import { configureStore } from "@reduxjs/toolkit";
import { formReducer, changeCost, changeName } from "./slices/fromSlice";
import {
  carsReducer,
  addCar,
  removeCar,
  changeSearchTerm,
} from "./slices/carsSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { changeCost, changeName, changeSearchTerm, removeCar, addCar, store };
