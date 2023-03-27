import { Box } from "@mui/material";
import "./App.css";
import Header from "./Header";

export default function App() {
  return (
    <Box
      className="App"
      sx={{ background: "black", boxSizing: "border-box", height: "100vh", padding: "2rem" }}
    >
      <Header />
      <h1>Hello CV</h1>
    </Box>
  );
}
