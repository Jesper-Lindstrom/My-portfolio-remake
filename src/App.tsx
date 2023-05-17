import { Box } from "@mui/material";
import "./App.css";
import About from "./Components/About";
import Header from "./Components/Header";

export default function App() {
  return (
    <Box className="App" sx={{ background: "teal ", boxSizing: "border-box", height: "100vh" }}>
      <Header />
      <h1>Hello CV</h1>
      <About />
    </Box>
  );
}

// font-family: 'Fira Sans', sans-serif;
// font-family: 'Montserrat', sans-serif;
