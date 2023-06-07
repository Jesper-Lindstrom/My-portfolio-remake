import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        background: "black",
        justifyContent: "center",
        alignItems: "center",

        width: "100%",
        minHeight: "10rem", // Adjust the value based on your header height
      }}
    >
      <Box
        sx={{
          width: {
            xs: 300, // theme.breakpoints.up('xs')
            sm: 400, // theme.breakpoints.up('sm')
            md: 400, // theme.breakpoints.up('md')
            lg: 400, // theme.breakpoints.up('lg')
            xl: 500, // theme.breakpoints.up('xl')
          },
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
        }}
      >
        <Typography sx={{ color: "white", marginBottom: "1rem" }}>073-74 80 903</Typography>
        <Typography sx={{ color: "white", marginBottom: "1rem" }}>
          jesperlindstrom10@gmail.com
        </Typography>
        <Typography sx={{ color: "white" }}>Available in Göteborg, Borås, Kungsbacka</Typography>
      </Box>
    </Box>
  );
}
