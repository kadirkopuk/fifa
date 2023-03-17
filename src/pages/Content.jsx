import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Stack, Typography } from "@mui/material";

function Content({ name }) {
  const { id } = useParams();
  const objectName = name.slice(0, -1);

  // bi tane useeffect yazacagiz id degistiginde ,
  // use effect tetiklenicek ona gore lig resmi ve lig ismi gosterilecek
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [imageUrl, setImageUrl] = useState();

  //change color is the rating
  function getColorFromRating(rating) {
    if (rating >= 85) {
      return "green";
    } else if (rating >= 75) {
      return "yellow";
    } else if (rating >= 65) {
      return "grey";
    } else {
      return "red";
    }
  }
  const rating = data?.[objectName]?.rating;
  const color = getColorFromRating(rating);

  /////////////////////////////////////////////

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://futdb.app/api/${name}/${id}`, {
        headers: {
          accept: "application/json",
          "X-AUTH-TOKEN": "b1953e62-28f9-4a27-ab13-0a87648c3b32",
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
    fetch(`https://futdb.app/api/${name}/${id}/image`, {
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
  }, [id]);

  console.log(data);

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
      <Stack
        sx={{
          width: "35%",
        }}
      >
        {loading && "Loading..."}

        <Typography
          variant="h4"
          sx={{
            backgroundColor: "primary.light",
            borderRadius: "10px",
            fontWeight: "bold",
            mt: 2,
            textAlign: "center",
          }}
        >
          {data?.[objectName]?.name}
        </Typography>
      </Stack>
      <img width={"250px"} src={imageUrl} alt="image" />
      {name === "players" && (
        <Stack
          sx={{
            fontSize: "1.5rem",
            mt: 2,
            p: 2,
            fontStyle: "bold italic",
          }}
        >
          <p>Age: {data?.[objectName]?.age}</p>
          <p>Height: {data?.[objectName]?.height}</p>
          <p>Weight: {data?.[objectName]?.weight}</p>
          <p>Position: {data?.[objectName]?.position}</p>
          <p>Foot: {data?.[objectName]?.foot}</p>
          <Box
            sx={{
              backgroundColor: color,
              borderRadius: "10px",
              fontWeight: "bold",
              mt: 2,
              textAlign: "center",
            }}
          >
            <p>Rating: {data?.[objectName]?.rating}</p>
          </Box>
        </Stack>
      )}
    </Stack>
  );
}

export default Content;
