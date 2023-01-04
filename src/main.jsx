import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "@material-ui/styles"

import Themes from "./themes"
import App from "./App"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={Themes.default}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
