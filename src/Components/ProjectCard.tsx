import { Box, Typography } from "@mui/material";
import { Project } from "../../data";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Box
      sx={{
        background: "#458989",
        color: "white",
        border: "5px solid #e37222",
        outline: "2px solid black",
        borderRadius: "10px",
        padding: "0.4rem",
        height: "25rem",
        margin: " 3rem 1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: {
          xs: 300, // theme.breakpoints.up('xs')
          sm: 400, // theme.breakpoints.up('sm')
          md: 500, // theme.breakpoints.up('md')
          lg: 500, // theme.breakpoints.up('lg')
          xl: 500, // theme.breakpoints.up('xl')
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",

          alignItems: "center",
        }}
      >
        <Typography
          sx={{ fontFamily: "Montserrat, sans-serif", fontSize: "25px", padding: "0.2rem" }}
        >
          {project.title}
        </Typography>
        <Typography sx={{}}>{project.type}</Typography>
      </Box>
      <Box sx={{ height: "10rem", width: "15rem", margin: "1.5rem" }}>
        <a href={project.link}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </a>
      </Box>
      <Typography sx={{ padding: "0.2rem", fontFamily: "Montserrat, sans-serif" }}>
        {project.description}
      </Typography>
    </Box>
  );
}

// font-family: 'Fira Sans', sans-serif
