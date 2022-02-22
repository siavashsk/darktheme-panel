import React from "react";
import ReactDOM from "react-dom";

import DefaultLayout from "./layouts/Default";
import { ThemeProvider } from "./contexts/theme";

import "./assets/scss/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.rtl.min.css";

ReactDOM.render(
    <ThemeProvider>
        <DefaultLayout />
    </ThemeProvider>,
    document.getElementById("root")
);
