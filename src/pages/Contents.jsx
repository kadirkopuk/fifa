import { CircularProgress, Pagination, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Contents({ name }) {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://futdb.app/api/${name}?page=${page}`, {
        headers: {
          accept: "application/json",
          "X-AUTH-TOKEN": "b1953e62-28f9-4a27-ab13-0a87648c3b32",
        },
      })
      .then((res) => {
        setPageLimit(res.data.pagination.pageTotal);
        setList(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page, name]);

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
        {list.map((item) => (
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
          mt: 2,
        }}
      >
        <Pagination
          count={pageLimit}
          page={page}
          onChange={(e, value) => {
            setPage(value);
            setList([]);
          }}
        />
      </Stack>
    </Stack>
  );
}

export default Contents;
