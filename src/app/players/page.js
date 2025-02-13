"use client";

import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const NavItem = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(2),
  color: "grey",
  backgroundColor: "white",
}));

export default function PlayerComparison() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch("https://free-api-live-football-data.p.rapidapi.com/football-get-list-player?teamid=8650", {
      method: "GET",
      headers: {
      'x-rapidapi-key': '7090656eebmshf4bf40aab7699dfp185787jsn8cf3b72c856f',
		  'x-rapidapi-host': 'free-api-live-football-data.p.rapidapi.com'
      },
    })
    .then((res) => res.json())
    .then((data) => setApiData(data))
    .catch((err) => console.error(err));
}, []);

  const player1 = {
    name: "Palmer",
    club: "Chelsea",
    image: "https://images.app.goo.gl/9kYH2n2QUr74qwKd6",
  };

  const player2 = {
    name: "Jackson",
    club: "Clesea",
    image: "https://images.app.goo.gl/yQKxU77zVsrUiYyr9",
  };

  const pieData = {
    labels: ["Stat A", "Stat B", "Stat C", "Stat D"],
    datasets: [
      {
        label: "Player Stats",
        data: [25, 25, 25, 25],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: { display: false },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ padding: "20px" }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{ marginBottom: "20px" }}
      >
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

      <Grid container spacing={4} justifyContent="space-between">
        <Grid item xs={5}>
          <Paper style={{ padding: "20px", textAlign: "center" }}>
            <img
              src={player1.image}
              alt={player1.name}
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
            <Typography variant="h6" style={{ marginTop: "10px" }}>
              {player1.name}
            </Typography>
            <Typography variant="body1">{player1.club}</Typography>

            <Grid container spacing={1} style={{ marginTop: "20px" }}>
              {[...Array(4)].map((_, index) => (
                <Grid item xs={6} key={`player1-pie-${index}`}>
                  <div style={{ width: "140px", height: "140px" }}>
                    <Pie data={pieData} options={pieOptions} />
                  </div>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={5}>
          <Paper style={{ padding: "20px", textAlign: "center" }}>
            <img
              src={player2.image}
              alt={player2.name}
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
            <Typography variant="h6" style={{ marginTop: "10px" }}>
              {player2.name}
            </Typography>
            <Typography variant="body1">{player2.club}</Typography>

            <Grid container spacing={1} style={{ marginTop: "20px" }}>
              {[...Array(4)].map((_, index) => (
                <Grid item xs={6} key={`player2-pie-${index}`}>
                  <div style={{ width: "140px", height: "140px" }}>
                    <Pie data={pieData} options={pieOptions} />
                  </div>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid container direction="column" spacing={3} justifyContent="center">
        <pre>{JSON.stringify(apiData, null, 2)}</pre>
      </Grid>
    </div>
  );
}
