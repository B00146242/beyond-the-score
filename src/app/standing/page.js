"use client";

import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";

const NavItem = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(1),
  color: "grey",
  backgroundColor: "white",
  cursor: "pointer",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  fontSize: "16px",
  fontWeight: "bold",
  borderRadius: "8px",
}));

const TableItem = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(1),
  backgroundColor: "white",
  fontSize: "16px",
  color: "grey",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  marginBottom: "10px",
  borderRadius: "8px",
}));

export default function PremierLeagueStandings() {
 const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api-football-v1.p.rapidapi.com/v3/teams/statistics?league=39&season=2024&team=33",
      {
        method: "GET",
        headers: {
          'x-rapidapi-key': '65a84db33cmshf211b6817ea17d8p191775jsn3b3820a40528',
		'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data);
        setApiData(data);
      })
      .catch((err) => console.error("API Fetch Error:", err))
      .finally(() => setLoading(false));
  }, []);


  const standings = [
    { position: 1, team: "Manchester City", pd: 38, gd: 73, pts: 89, w: 28, d: 5, l: 5 },
    { position: 2, team: "Arsenal", pd: 38, gd: 43, pts: 84, w: 26, d: 6, l: 6 },
    { position: 3, team: "Manchester United", pd: 38, gd: 10, pts: 75, w: 23, d: 6, l: 9 },
    { position: 4, team: "Newcastle United", pd: 38, gd: 34, pts: 71, w: 22, d: 5, l: 11 },
    { position: 5, team: "Liverpool", pd: 38, gd: 28, pts: 69, w: 21, d: 6, l: 11 },
    { position: 6, team: "Chelsea", pd: 38, gd: 5, pts: 62, w: 18, d: 8, l: 12 },
    { position: 7, team: "Tottenham Hotspur", pd: 38, gd: 19, pts: 60, w: 17, d: 9, l: 12 },
    { position: 8, team: "Aston Villa", pd: 38, gd: 14, pts: 59, w: 17, d: 8, l: 13 },
    { position: 9, team: "Brentford", pd: 38, gd: 4, pts: 59, w: 15, d: 14, l: 9 },
    { position: 10, team: "Brighton & Hove Albion", pd: 38, gd: 10, pts: 58, w: 16, d: 10, l: 12 },
    { position: 11, team: "Crystal Palace", pd: 38, gd: -10, pts: 48, w: 12, d: 12, l: 14 },
    { position: 12, team: "Wolves", pd: 38, gd: -7, pts: 46, w: 11, d: 13, l: 14 },
    { position: 13, team: "Nottingham Forest", pd: 38, gd: -6, pts: 45, w: 11, d: 12, l: 15 },
    { position: 14, team: "West Ham United", pd: 38, gd: -4, pts: 40, w: 10, d: 10, l: 18 },
    { position: 15, team: "Leicester City", pd: 38, gd: -10, pts: 38, w: 9, d: 11, l: 18 },
    { position: 16, team: "Everton", pd: 38, gd: -16, pts: 36, w: 9, d: 9, l: 20 },
    { position: 17, team: "Bournemouth", pd: 38, gd: -18, pts: 34, w: 8, d: 10, l: 20 },
    { position: 18, team: "Leeds United", pd: 38, gd: -23, pts: 31, w: 7, d: 10, l: 21 },
    { position: 19, team: "Southampton", pd: 38, gd: -25, pts: 28, w: 6, d: 10, l: 22 },
    { position: 20, team: "Burnley", pd: 38, gd: -30, pts: 24, w: 5, d: 9, l: 24 },
  ];

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

      <Typography variant="h4" gutterBottom style={{ textAlign: "center", marginBottom: "20px", fontSize: "32px" }}>
        Premier League Standings
      </Typography>

      <Grid container direction="column" spacing={1} justifyContent="center">
        <Grid item xs={12}>
          <TableItem style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", textAlign: "center" }}>
            <Typography variant="body1" style={{ flex: 0.5 }}>Position</Typography>
            <Typography variant="body1" style={{ flex: 1.5 }}>Team</Typography>
            <Typography variant="body1" style={{ flex: 1 }}>PD</Typography>
            <Typography variant="body1" style={{ flex: 1 }}>GD</Typography>
            <Typography variant="body1" style={{ flex: 1 }}>PTS</Typography>
            <Typography variant="body1" style={{ flex: 1 }}>W</Typography>
            <Typography variant="body1" style={{ flex: 1 }}>D</Typography>
            <Typography variant="body1" style={{ flex: 1 }}>L</Typography>
          </TableItem>
        </Grid>

        {standings.map((team, index) => (
          <Grid item xs={12} key={index}>
            <TableItem style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Typography variant="body1" style={{ flex: 0.5 }}>{team.position}</Typography>
              <Typography variant="body1" style={{ flex: 1.5 }}>{team.team}</Typography>
              <Typography variant="body1" style={{ flex: 1 }}>{team.pd}</Typography>
              <Typography variant="body1" style={{ flex: 1 }}>{team.gd}</Typography>
              <Typography variant="body1" style={{ flex: 1 }}>{team.pts}</Typography>
              <Typography variant="body1" style={{ flex: 1 }}>{team.w}</Typography>
              <Typography variant="body1" style={{ flex: 1 }}>{team.d}</Typography>
              <Typography variant="body1" style={{ flex: 1 }}>{team.l}</Typography>
            </TableItem>
          </Grid>
        ))}
      </Grid>
       {loading ? <Typography>Loading API data...</Typography> : <pre>{JSON.stringify(apiData, null, 2)}</pre>}
    </div>
  );
}
