import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import Projects from "./Pages/Projects";
import Startpage from "./Pages/Startpage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Startpage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<Startpage />} />
    </Route>
  )
);
// ändra till react themeprovider(import)
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
