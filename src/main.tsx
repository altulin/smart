import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.js";
import { Provider } from "react-redux";
import store from "./app/store/index.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);