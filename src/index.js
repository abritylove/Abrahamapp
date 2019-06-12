import React from "react";
import react from "react-dom";
import{Provider} from "react-redux";
import{createStore, applymiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
const store createStore(reducers,applyMiddleware(thunk))
ReactDOM.render(
<Provider store={store}>
<App />
</provider>,
document.querySelector("#root")
