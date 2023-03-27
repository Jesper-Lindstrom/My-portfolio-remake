import { Box } from "@mui/material";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        height: "5rem",
        background: "#252525cc",
        color: "white",
        margin: "0 3rem",
        borderRadius: "50px",
        opacity: "0.9",
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "2rem" }}
      >
        <p>Jesper Lindström</p>
      </Box>
      <Box
        sx={{
          // background: "red",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minWidth: "20rem",
          marginLeft: "auto",
          padding: "0 2rem",
          textTransform: "capitalize",
          fontFamily: "rockwell",
          fontSize: "20px",
        }}
      >
        <p>Home</p>
        <p>Projects</p>
        <p>Contact</p>
        <Box sx={{ color: "red" }}>CV</Box>
      </Box>
    </Box>
  );
}
