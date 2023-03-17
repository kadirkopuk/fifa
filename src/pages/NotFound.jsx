import { Stack, Typography } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import React from "react";

function NotFound() {
  return (
    <Stack
      sx={{
        alignItems: "center",
        opacity: 0.7,
        pt: 6,
        backgroundColor: "#f8f8f8",
        height: "100vh",
      }}
    >
      <Typography>
        <SentimentVeryDissatisfiedIcon
          sx={{
            fontSize: 300,
          }}
        />
      </Typography>
      <Typography variant="h1">404</Typography>
      <Typography variant="h2">Page Not Found</Typography>
      <Typography variant="p1">
        The Page you are looking for doesn't exist or an other error occurred.
      </Typography>
    </Stack>
  );
}

export default NotFound;
