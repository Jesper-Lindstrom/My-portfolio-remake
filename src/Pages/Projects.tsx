import { Box } from "@mui/material";
import { Project, projects } from "../../data/projects";
import ProjectCard from "../Components/ProjectCard";

export default function Projects() {
  const projectCards = projects.map((project: Project) => (
    <ProjectCard key={project.id} project={project} />
  ));

  return (
    <Box>
      <h1>Projects</h1>
      {projectCards}
    </Box>
  );
}
