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
        backgroundColor: "#40513B",
        borderRight: "1px solid #fff",
      }}
    >
      <Stack
        sx={{
          p: 1,
          spacing: 2,
          direction: "column",
          justifyContent: "space-between",
          color: "#fff",
        }}
      >
        <HomeIcon />
        <SportsSoccerIcon />
        <FlagCircleIcon />
        <PeopleIcon />
        <ViewCarouselIcon />
      </Stack>
    </Box>
  );
}

export default Sidebar;
