import { Box, Typography } from "@mui/material";
import { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Box
      sx={{
        background: "#458989",
        color: "white",
        maxWidth: "40rem",
        padding: "0.4rem",
        height: "15rem",
        margin: " 3rem 1rem",
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ fontFamily: "Montserrat, sans-serif" }}>{project.title}</Typography>
        <Typography sx={{}}>{project.type}</Typography>
      </Box>
      <Box sx={{ height: "10rem", width: "15rem", margin: "0.5rem" }}>
        <img
          src={project.image}
          alt={project.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      <Typography sx={{ padding: "0.2rem", fontFamily: "Montserrat, sans-serif" }}>
        {project.description}
      </Typography>
    </Box>
  );
}

// font-family: 'Fira Sans', sans-serif
