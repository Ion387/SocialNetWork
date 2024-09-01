import React from "react"
import store from "./0Redux/0redux-store";

const StoreContext = React.createContext (store);

export default StoreContext;