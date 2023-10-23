import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import { ScrollAnimation } from "./gsap/ScrollAnimation.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ScrollAnimation>
      <App />
    </ScrollAnimation>
  </React.StrictMode>,
);
