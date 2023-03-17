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
        px: 2,
      }}
    >
      <Typography>
        <SentimentVeryDissatisfiedIcon
          sx={{
            fontSize: 300,
          }}
        />
      </Typography>
      <Typography variant="h2">404</Typography>
      <Typography variant="h2">Page Not Found</Typography>
      <Typography variant="h6" fontWeight="bold" mt={6}>
        The Page you are looking for doesn't exist or an other error occurred.
      </Typography>
    </Stack>
  );
}

export default NotFound;
