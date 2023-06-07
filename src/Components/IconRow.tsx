import { Box } from "@mui/material";

export function IconRow() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", margin: "1rem" }}>
      <Box sx={{ width: "2rem", height: "2rem", padding: "0 0.4rem" }}>
        <a href="https://www.linkedin.com/in/jesperlindstrom33/">
          <img
            src="https://github.com/Jesper-Lindstrom/portfolio/blob/master/public/images/linkedin-logo.png?raw=true"
            alt="linked in link"
            style={{ width: "100%", height: "100%" }}
          />
        </a>
      </Box>
      <Box sx={{ width: "2rem", height: "2rem", padding: "0 0.4rem" }}>
        <a href="mailto:jesperlindstrom10@gmail.com">
          <img
            src="https://github.com/Jesper-Lindstrom/portfolio/blob/master/public/images/mail-logo.png?raw=true"
            alt="mail me link"
            style={{ width: "100%", height: "100%" }}
          />
        </a>
      </Box>
      <Box sx={{ width: "2rem", height: "2rem", padding: "0 0.4rem" }}>
        <a href="https://github.com/Jesper-Lindstrom">
          <img
            src="https://github.com/Jesper-Lindstrom/portfolio/blob/master/public/images/github-logo.png?raw=true"
            alt="github link"
            style={{ width: "100%", height: "100%" }}
          />
        </a>
      </Box>
    </Box>
  );
}
