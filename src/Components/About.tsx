import { Box, Typography } from "@mui/material";
import { IconRow } from "./IconRow";

export default function About() {
  return (
    <Box
      sx={{
        border: "2px solid black",
        background: "#458989",
        margin: "3rem 0.5rem",
        padding: "1rem",
      }}
    >
      <Typography sx={{ color: "white", fontFamily: "Fira-sans, sans-serif" }}>
        Hi! I'm Jesper and I am studying to become a front end developer at Medieinstitutet in
        Gothenburg. This is where I will show my progression through these two years where I strive
        to become better at web development.
      </Typography>
      <IconRow />
    </Box>
  );
}
