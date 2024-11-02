import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Form from "./components/Forms/Form";
import "./index.css";
import ExpenseCalculator from "./MiniProject/ExpenseCalculator";
import App from "./MiniProject/App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Form /> */}
    {/* <ExpenseCalculator /> */}
    <App />
  </React.StrictMode>
);
