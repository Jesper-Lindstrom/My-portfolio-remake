import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button, Typography } from "@mui/material";
export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",

        background: "#458989",
        width: "100%",
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
              background: "black",
              width: "3rem",
              height: "3rem",
              color: "white",
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
        <Button
          variant="contained"
          sx={{
            background: "#53AFCC",
            fontSize: "20px",
            // borderRadius: "100%",
            width: "2.5rem",
            height: "2.5rem",
          }}
        >
          CV
        </Button>
      </Box>
    </Box>
  );
}
