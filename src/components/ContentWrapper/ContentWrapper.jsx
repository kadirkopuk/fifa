import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { Box, Container, Stack } from "@mui/material";

function ContentWrapper() {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Stack direction="row" flex={1}>
        <Sidebar />
        <Box
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Outlet />
        </Box>
      </Stack>
    </Stack>
  );
}

export default ContentWrapper;
