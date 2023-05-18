import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function AboutProjects() {
  return (
    <Box
      sx={{
        border: "5px solid #e37222",
        outline: "2px solid black",
        borderRadius: "10px",
        background: "#07889B",
        margin: "3rem 0.5rem 0rem 0.5rem",
        padding: "1rem",
        width: {
          xs: 300, // theme.breakpoints.up('xs')
          sm: 400, // theme.breakpoints.up('sm')
          md: 400, // theme.breakpoints.up('md')
          lg: 400, // theme.breakpoints.up('lg')
          xl: 500, // theme.breakpoints.up('xl')
        },
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

      <Box sx={{ textAlign: "center", padding: "1.5rem" }}>
        <Link
          style={{
            color: "white",
            textAlign: "center",
            textDecoration: "none",
            fontSize: "25px",
          }}
          to="/projects"
        >
          Take me to Projects
        </Link>
      </Box>
    </Box>
  );
}
// font-family: 'Fira Sans', sans-serif;
// font-family: 'Montserrat', sans-serif;
