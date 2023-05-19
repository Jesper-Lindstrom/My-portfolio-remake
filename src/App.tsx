import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";

export default function App() {
  return (
    <Box className="App" sx={{ boxSizing: "border-box", height: "100%" }}>
      <Header />
      <Outlet />
    </Box>
  );
}

// font-family: 'Fira Sans', sans-serif;
// font-family: 'Montserrat', sans-serif;
