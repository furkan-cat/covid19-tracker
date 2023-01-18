import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import countryReducer from "./slices/index";

const saga = createSagaMiddleware();
export default configureStore({
  reducer: { country: countryReducer },
  middleware: [saga],
});
saga.run(rootSaga);
