import { Pagination, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Leagues() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://futdb.app/api/leagues?page=${page}`, {
        headers: {
          accept: "application/json",
          "X-AUTH-TOKEN": "b1953e62-28f9-4a27-ab13-0a87648c3b32",
        },
      })
      .then((res) => {
        console.log(res.data);
        setPageLimit(res.data.pagination.pageTotal);
        setList(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  return (
    <Stack
      sx={{
        flex: 1,
        p: 2,
      }}
    >
      <Stack
        sx={{
          minHeight: "420px",
        }}
      >
        {loading && <div>Loading...</div>}
        {list.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              navigate(`/leagues/${item.id}`);
            }}
          >
            {item.name}
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
          onChange={(e, value) => setPage(value)}
        />
      </Stack>
    </Stack>
  );
}

export default Leagues;
