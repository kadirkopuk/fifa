import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Stack } from "@mui/material";

function League() {
  const { leagueId } = useParams();

  // bi tane useeffect yazacagiz id degistiginde ,
  // use effect tetiklenicek ona gore lig resmi ve lig ismi gosterilecek
  const [loading, setLoading] = useState(true);
  const [league, setLeague] = useState([]);
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://futdb.app/api/leagues/${leagueId}`, {
        headers: {
          accept: "application/json",
          "X-AUTH-TOKEN": "b1953e62-28f9-4a27-ab13-0a87648c3b32",
        },
      })
      .then((res) => {
        setLeague(res.data.league);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
    fetch(`https://futdb.app/api/leagues/${leagueId}/image`, {
      headers: {
        accept: "image/png",
        "X-AUTH-TOKEN": "b1953e62-28f9-4a27-ab13-0a87648c3b32",
      },
    })
      .then((res) => res.blob())
      .then((blob) => {
        setImageUrl(URL.createObjectURL(blob));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [leagueId]);

  return (
    <Stack
      alignItems={"center"}
      sx={{
        pt: 2,
        img: {
          mt: 3,
        },
      }}
    >
      {loading && "Loading..."}
      {league.name}
      <img src={imageUrl} alt={league.name} />
    </Stack>
  );
}

export default League;
