"use client";

import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
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
  const player1 = {
    name: "Player 1",
    club: "Club A",
    image: "https://via.placeholder.com/150",
  };

  const player2 = {
    name: "Player 2",
    club: "Club B",
    image: "https://via.placeholder.com/150",
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
    </div>
  );
}
