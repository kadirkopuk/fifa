import { Box, Typography } from "@mui/material";
import React from "react";

function List() {
  return (
    <Box
      sx={{
        flex: 1,
        p: 2,
      }}
    >
      <Typography variant="myVariant">Cards will be here</Typography>
    </Box>
  );
}

export default List;
