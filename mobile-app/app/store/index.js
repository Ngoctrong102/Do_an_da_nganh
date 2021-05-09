import { createStore } from "redux";
import reducer from "./reducers";

var store = createStore(reducer);

export default store;