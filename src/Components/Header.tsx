import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  ClickAwayListener,
  MenuItem,
  MenuList,
  Paper,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: any) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setIsOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        background: "#e37222",
        width: "100%",
        height: "6rem",
        borderBottom: "2px solid black",
        position: "relative",
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
        <Button ref={anchorRef} onClick={handleToggle}>
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
        {isOpen && (
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              top: "100%",
              left: 0,
              zIndex: 1,
            }}
          >
            <ClickAwayListener onClickAway={handleClose}>
              <Paper
                sx={{
                  width: "100%",
                  background: "black",
                }}
              >
                <MenuList autoFocusItem={isOpen} id="menu-list-grow">
                  <MenuItem onClick={handleClose}>
                    <Link
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        color: "white",
                        textDecoration: "none",
                      }}
                      to="/"
                    >
                      Home
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                        color: "white",
                        textDecoration: "none",
                      }}
                      to="/projects"
                    >
                      Projects
                    </Link>
                  </MenuItem>
                </MenuList>
              </Paper>
            </ClickAwayListener>
          </Box>
        )}
      </Box>
    </Box>
  );
}
