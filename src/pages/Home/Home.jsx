import React from "react";
import { useNavigate } from "react-router-dom";
import navs from "../../data/navs.json";
import { Button, colors, Container, Grid } from "@mui/material";
function Home() {
  const navigate = useNavigate();

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={2}>
        {navs.map((nav) => (
          <Grid key={nav.id} xs={6} sm={4} md={3} lg={2} item>
            <Button
              variant="contained"
              sx={{
                bgcolor: "primary.main",
                borderRadius: "5px",
                boxShadow: 1,
                width: "100%",
                aspectRatio: "1/1",
                "&:hover": {
                  color: "black",
                  bgcolor: "primary.sage",
                },
              }}
              onClick={() => navigate(`/${nav.name}`)}
            >
              {nav.name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
