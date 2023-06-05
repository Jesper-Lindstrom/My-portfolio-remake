import { Box } from "@mui/material";
import About from "../Components/About";
import AboutProjects from "../Components/AboutProjects";
import SkillStack from "../Components/SkillStack";

export default function Startpage() {
  return (
    <Box
      sx={{
        background: "#66b9bf",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
      }}
    >
      <About />
      <AboutProjects />
      <SkillStack />
    </Box>
  );
}
