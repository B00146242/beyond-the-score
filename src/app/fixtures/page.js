"use client";

import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";

const NavItem = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(2),
  color: "grey",
  backgroundColor: "white",
  cursor: "pointer",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  fontSize: "18px",
  fontWeight: "bold",
  borderRadius: "8px",
}));

export default function FixturesPage() {
  const [apiData, setApiData] = useState(null);

  fetch("https://free-api-live-football-data.p.rapidapi.com/football-get-matches-by-date?date=20241107", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "free-api-live-football-data.p.rapidapi.com",
      "x-rapidapi-key": "7090656eebmshf4bf40aab7699dfp185787jsn8cf3b72c856f"
    }
  })
  .then((res) => res.json())
  .then((data) => {
    setApiData(data)
  })

  
  const fixtures = [
    { team1: "Chelsea", team2: "Manchester City" },
    { team1: "Liverpool", team2: "Arsenal" },
    { team1: "Tottenham", team2: "Manchester United" },
    { team1: "Leicester City", team2: "Everton" },
    { team1: "Brighton", team2: "West Ham" },
    { team1: "Newcastle", team2: "Aston Villa" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={2} justifyContent="center" style={{ marginBottom: "20px" }}>
        <Grid item xs={2}>
          <NavItem>Home</NavItem>
        </Grid>
        <Grid item xs={2}>
          <NavItem>About</NavItem>
        </Grid>
        <Grid item xs={2}>
          <NavItem>Lineup</NavItem>
        </Grid>
        <Grid item xs={2}>
          <NavItem>Teams</NavItem>
        </Grid>
        <Grid item xs={2}>
          <NavItem>Contact</NavItem>
        </Grid>
      </Grid>

      <Typography variant="h4" gutterBottom style={{ textAlign: "center", marginBottom: "20px", fontSize: "32px" }}>
        Fixtures
      </Typography>

      <Grid container direction="column" spacing={3} justifyContent="center">
        {JSON.stringify(apiData)}

        
      </Grid>
    </div>
  );
}
