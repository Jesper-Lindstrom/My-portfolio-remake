import { Box } from "@mui/material";
import "./App.css";
import About from "./Components/About";
import AboutProjects from "./Components/AboutProjects";
import Header from "./Components/Header";
import Projects from "./Pages/Projects";

export default function App() {
  return (
    <Box className="App" sx={{ background: "#E5E5E5", boxSizing: "border-box", height: "100%" }}>
      <Header />
      <About />
      <AboutProjects />
      <Projects />
    </Box>
  );
}

// font-family: 'Fira Sans', sans-serif;
// font-family: 'Montserrat', sans-serif;
