import React from "react";
import ReactDOM from "react-dom/client";
import { JokesProvider } from "./contexts/JokesContext";
import "index.css";
import AppLoader from "./components/App/AppLoader.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <JokesProvider>
    <AppLoader />
  </JokesProvider>
);
