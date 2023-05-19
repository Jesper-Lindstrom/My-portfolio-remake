import { Box, Typography } from "@mui/material";

export default function SkillStack() {
  return (
    <Box
      sx={{
        border: "5px solid #e37222",
        outline: "2px solid black",
        borderRadius: "10px",
        background: "#07889B",
        margin: "3rem 0.5rem 3rem 0.5rem",
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
        STACK/SKILLS
      </Typography>
      <Typography sx={{ color: "white", fontFamily: "Fira-sans, sans-serif" }}>
        <ul style={{ listStyle: "none" }}>
          <li>HTML & CSS </li>
          <li>Javascript & Typescript</li>
          <li>React</li>
          <li>MUI</li>
          <li>Node.js & Express</li>
          <li>Socket IO</li>
        </ul>
      </Typography>
    </Box>
  );
}
