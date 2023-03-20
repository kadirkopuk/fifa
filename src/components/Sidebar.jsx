import * as React from "react";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import PeopleIcon from "@mui/icons-material/People";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const list = [
    {
      id: 1,
      name: "Home",
      path: "/",
      icon: <HomeIcon fontSize="large" />,
    },
    {
      id: 2,
      name: "Teams",
      path: "/clubs",
      icon: <SportsSoccerIcon fontSize="large" />,
    },
    {
      id: 3,
      name: "Leagues",
      path: "/nations",
      icon: <FlagCircleIcon fontSize="large" />,
    },
    {
      id: 4,
      name: "Players",
      path: "/players",
      icon: <PeopleIcon fontSize="large" />,
    },
    {
      id: 5,
      name: "Leagues",
      path: "/leagues",
      icon: <ViewCarouselIcon fontSize="large" />,
    },
  ];
  return (
    <Stack
      sx={{
        left: 0,
        backgroundColor: "primary.main",
        borderRight: "1px solid #fff",
      }}
    >
      {list.map((item) => (
        <Box
          onClick={() => navigate(item.path)}
          key={item.id}
          sx={{
            p: 1.5,
            color: "#fff",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "#F2F2F2",
              color: "primary.main",
            },
          }}
        >
          {item.icon}
        </Box>
      ))}
    </Stack>
  );
}

export default Sidebar;
