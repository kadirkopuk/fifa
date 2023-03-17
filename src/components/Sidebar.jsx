import * as React from "react";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import PeopleIcon from "@mui/icons-material/People";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import { Stack } from "@mui/material";

function Sidebar() {
  return (
    <Box
      sx={{
        p: 2,
        left: 0,
        backgroundColor: "#8bbe0b",
        borderRight: "1px solid #fff",
      }}
    >
      <Stack
        sx={{
          p: 1,
        }}
      >
        <HomeIcon sx={{ color: "white" }} />
        <SportsSoccerIcon sx={{ color: "white" }} />
        <FlagCircleIcon sx={{ color: "white" }} />
        <PeopleIcon sx={{ color: "white" }} />
        <ViewCarouselIcon sx={{ color: "white" }} />
      </Stack>
    </Box>
  );
}

export default Sidebar;
