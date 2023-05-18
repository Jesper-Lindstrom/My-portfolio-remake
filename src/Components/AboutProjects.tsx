import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function AboutProjects() {
  return (
    <Box
      sx={{
        border: "2px solid black",
        background: "#458989",
        margin: "3rem 0.5rem",
        padding: "1rem",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "white",
          textAlign: "center",
          padding: "1rem",
          fontFamily: "inconsolata, sans-serif",
        }}
      >
        PROJECTS
      </Typography>
      <Typography sx={{ color: "white", fontFamily: "Fira-sans, sans-serif" }}>
        During my time studying I am doing both solo and group projects which I will publish here.
        You can also check out my github.
      </Typography>
      <Typography sx={{ textAlign: "center", padding: "1rem", textDecoration: "none" }}>
        <Link to="/projects">Take me to Projects</Link>
      </Typography>
    </Box>
  );
}
// font-family: 'Fira Sans', sans-serif;
// font-family: 'Montserrat', sans-serif;
