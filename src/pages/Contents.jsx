import { CircularProgress, Pagination, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetContentsQuery } from "../features/contents/contentsApiSlice";

function Contents({ name }) {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const { data: list, isLoading: loading } = useGetContentsQuery({
    name,
    page,
  });

  return (
    <Stack
      sx={{
        flex: 1,
        p: 2,
      }}
    >
      <Stack
        sx={{
          minHeight: "1380px",
        }}
      >
        {loading && <CircularProgress sx={{ mx: "auto", mt: 5 }} />}
        {list?.items?.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              navigate(`/${name}/${item.id}`);
            }}
          >
            <Typography
              variant="h6"
              bgcolor="#9DC08B"
              sx={{
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                border: "1px solid black",
                borderRadius: "5px",
                p: 1,
                mt: 1,
                "&:hover": { backgroundColor: "primary.main", color: "#fff" },
              }}
            >
              {item.name}
            </Typography>
          </div>
        ))}
      </Stack>
      <Stack
        alignItems="center"
        sx={{
          mt: 3,
        }}
      >
        <Pagination
          count={list?.pagination?.pageTotal}
          page={page}
          onChange={(e, value) => {
            setPage(value);
          }}
        />
      </Stack>
    </Stack>
  );
}

export default Contents;
