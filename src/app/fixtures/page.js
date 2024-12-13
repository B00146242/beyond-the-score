"use client";

import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";

const NavItem = styled("div")(({ theme }) => ({
  textAlign: "center",
  padding: "10px",
  color: "grey",
  backgroundColor: "white",
  cursor: "pointer",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  fontSize: "18px",
  fontWeight: "bold",
  borderRadius: "8px",
  textDecoration: "none", 
}));

export default function Fixtures() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch(
      "https://free-api-live-football-data.p.rapidapi.com/football-get-matches-by-date?date=20241107",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "free-api-live-football-data.p.rapidapi.com",
          "x-rapidapi-key": "7090656eebmshf4bf40aab7699dfp185787jsn8cf3b72c856f",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setApiData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={2} justifyContent="center" style={{ marginBottom: "20px" }}>
        <Grid item xs={2}>
          <Link href="/results" passHref>
            <NavItem>results</NavItem>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link href="/manager" passHref>
            <NavItem>manager</NavItem>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link href="/lineup" passHref>
            <NavItem>Lineup</NavItem>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link href="/standing" passHref>
            <NavItem>standing</NavItem>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link href="/players" passHref>
            <NavItem>Players</NavItem>
          </Link>
        </Grid>
      </Grid>

      <Typography
        variant="h4"
        gutterBottom
        style={{ textAlign: "center", marginBottom: "20px", fontSize: "32px" }}
      >
        Fixtures
      </Typography>

      <Grid container direction="column" spacing={3} justifyContent="center">
        <pre>{JSON.stringify(apiData, null, 2)}</pre>
      </Grid>
    </div>
  );
}
