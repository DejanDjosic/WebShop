import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./components/Store/ContextProvider";
import  {AuthContextProvider} from './components/Store/LoginContext';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
        <AuthContextProvider>

    <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ContextProvider>
    </AuthContextProvider>

  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
