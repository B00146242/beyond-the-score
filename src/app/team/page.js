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
  cursor: "pointer",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  fontSize: "18px",
  fontWeight: "bold",
  borderRadius: "8px",
}));

const FormationDiagram = styled("div")({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridTemplateRows: "repeat(3, 1fr)",
  gridGap: "10px",
  marginTop: "20px",
});

const FormationPlayer = styled("div")({
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  backgroundColor: "#3498db",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontSize: "14px",
});

const PieChartContainer = styled(Paper)({
  padding: "20px",
  textAlign: "center",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  margin: "10px",
  borderRadius: "8px",
});

const PlayerImageContainer = styled("div")({
  textAlign: "center",
  marginTop: "10px",
});

const PlayerImage = styled("img")({
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  marginBottom: "10px",
});

export default function ManagerPage() {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://free-api-live-football-data.p.rapidapi.com/football-get-match-all-stats?eventid=4621624",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": "7090656eebmshf4bf40aab7699dfp185787jsn8cf3b72c856f",
          "x-rapidapi-host": "free-api-live-football-data.p.rapidapi.com",
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

  const manager = {
    name: "Pep Guardiola",
    club: "Manchester City",
    formation: "4-3-3",
    playstyle: "Counter Attacking",
    leaguePosition: "1st in Premier League",
    accomplishments: `Guardiola has won multiple Premier League titles with Manchester City, as well as two Champions League titles with Barcelona.`,
  };

  const pieData1 = {
    labels: ["Possession", "Shots", "Passes", "Tackles"],
    datasets: [
      {
        data: [40, 25, 20, 15],
        backgroundColor: ["#3498db", "#e74c3c", "#f39c12", "#2ecc71"],
      },
    ],
  };

  const pieData2 = {
    labels: ["Goals", "Assists", "Clean Sheets", "Yellow Cards"],
    datasets: [
      {
        data: [50, 25, 10, 15],
        backgroundColor: ["#e74c3c", "#3498db", "#2ecc71", "#f39c12"],
      },
    ],
  };

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
        Manager Profile
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Formation Diagram: {manager.formation}
          </Typography>
          <FormationDiagram>
            <FormationPlayer style={{ gridColumn: "3 / 4", gridRow: "1 / 2" }}>GK</FormationPlayer>
            <FormationPlayer style={{ gridColumn: "2 / 3", gridRow: "2 / 3" }}>LB</FormationPlayer>
            <FormationPlayer style={{ gridColumn: "3 / 4", gridRow: "2 / 3" }}>CB</FormationPlayer>
            <FormationPlayer style={{ gridColumn: "4 / 5", gridRow: "2 / 3" }}>CB</FormationPlayer>
            <FormationPlayer style={{ gridColumn: "5 / 6", gridRow: "2 / 3" }}>RB</FormationPlayer>
            <FormationPlayer style={{ gridColumn: "2 / 3", gridRow: "3 / 4" }}>CM</FormationPlayer>
            <FormationPlayer style={{ gridColumn: "3 / 4", gridRow: "3 / 4" }}>CM</FormationPlayer>
            <FormationPlayer style={{ gridColumn: "4 / 5", gridRow: "3 / 4" }}>CM</FormationPlayer>
            <FormationPlayer style={{ gridColumn: "2 / 3", gridRow: "4 / 5" }}>RW</FormationPlayer>
            <FormationPlayer style={{ gridColumn: "3 / 4", gridRow: "4 / 5" }}>CF</FormationPlayer>
            <FormationPlayer style={{ gridColumn: "4 / 5", gridRow: "4 / 5" }}>LW</FormationPlayer>
          </FormationDiagram>
        </Grid>

        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <PieChartContainer>
                <Pie data={pieData1} options={{ responsive: true, plugins: { legend: { display: false } } }} />
                <Typography variant="body1" style={{ marginTop: "10px" }}>Player Stats</Typography>
              </PieChartContainer>
            </Grid>
            <Grid item xs={6}>
              <PieChartContainer>
                <Pie data={pieData2} options={{ responsive: true, plugins: { legend: { display: false } } }} />
                <Typography variant="body1" style={{ marginTop: "10px" }}>Performance Stats</Typography>
              </PieChartContainer>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {loading ? <Typography>Loading API data...</Typography> : <pre>{JSON.stringify(apiData, null, 2)}</pre>}
    </div>
  );
}
