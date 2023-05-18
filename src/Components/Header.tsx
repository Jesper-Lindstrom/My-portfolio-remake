import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, Typography } from "@mui/material";
export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        background: "#e37222",
        width: "100%",
        height: "6rem",
        borderBottom: "2px solid black",
      }}
    >
      <Box
        sx={{
          width: "100%",
          padding: "0.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button>
          <MenuIcon
            sx={{
              background: "#66b9bf",
              width: "2.5rem",
              height: "2.5rem",
              color: "black",
              borderRadius: "50%",
            }}
          />
        </Button>
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            alignItems: "center",
            fontFamily: "Montserrat, sans-serif",
            color: "white",
            textAlign: "center",
          }}
        >
          JESPER LINDSTRÖM
        </Typography>
        <a href="https://drive.google.com/file/d/11AiU1luxY2cal4qBJ_5dHtc-RkC0C7uh/view?usp=share_link">
          <Button
            variant="contained"
            sx={{
              background: "#66b9bf",
              fontSize: "20px",
              color: "black",
              width: "2rem",
              height: "2rem",
            }}
          >
            CV
          </Button>
        </a>
      </Box>
    </Box>
  );
}
