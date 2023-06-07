import { Box } from "@mui/material";

export function IconRow() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", margin: "1rem" }}>
      <Box sx={{ width: "2rem", height: "2rem", padding: "0 0.4rem" }}>
        <a href="https://www.linkedin.com/in/jesperlindstrom33/">
          <img
            src="src/images/linkedin-logo.png"
            alt="linked in link"
            style={{ width: "100%", height: "100%" }}
          />
        </a>
      </Box>
      <Box sx={{ width: "2rem", height: "2rem", padding: "0 0.4rem" }}>
        <a href="mailto:jesperlindstrom10@gmail.com">
          <img
            src="src/images/mail-logo.png"
            alt="mail me link"
            style={{ width: "100%", height: "100%" }}
          />
        </a>
      </Box>
      <Box sx={{ width: "2rem", height: "2rem", padding: "0 0.4rem" }}>
        <a href="https://github.com/Jesper-Lindstrom">
          <img
            src="src/images/github-logo.png"
            alt="github link"
            style={{ width: "100%", height: "100%" }}
          />
        </a>
      </Box>
    </Box>
  );
}
