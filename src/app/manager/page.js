"use client";

import React from "react";
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

const ManagerImage = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(2),
  backgroundColor: "white",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
}));

const Formation = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(2),
  backgroundColor: "white",
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
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: "#3498db",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontSize: "12px",
});

const ManagerPage = () => {
  const manager = {
    name: "Pep Guardiola",
    club: "Manchester City",
    image: "https://via.placeholder.com/150", // Example image URL
    formation: "4-3-3",
    playstyle: "Counter Attacking",
    history: `Pep Guardiola is a Spanish professional football manager and former player, regarded as one of the greatest managers in football history. He is known for his innovative and possession-based style of play. Guardiola's managerial career started at Barcelona, where he won numerous domestic and international titles, including the UEFA Champions League.`,
    leaguePosition: "1st in Premier League",
    accomplishments: `Guardiola has won 3 Premier League titles with Manchester City, 2 Champions League titles with Barcelona, and numerous other domestic and international trophies throughout his career.`,
  };

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
        Manager Profile
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <ManagerImage>
            <img
              src={manager.image}
              alt={manager.name}
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
            <Typography variant="h6" style={{ marginTop: "10px" }}>
              {manager.name}
            </Typography>
            <Typography variant="body1">{manager.club}</Typography>
          </ManagerImage>
        </Grid>

        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Formation>
                <Typography variant="body1">{manager.formation}</Typography>
                <FormationDiagram>
                  {/* 4-3-3 Formation Diagram with 11 players */}
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
              </Formation>
            </Grid>
            <Grid item xs={6}>
              <Formation>
                <Typography variant="body1">Favorite Playstyle: {manager.playstyle}</Typography>
              </Formation>
            </Grid>

            <Grid item xs={12}>
              <Paper
                style={{
                  padding: "20px",
                  backgroundColor: "white",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  History
                </Typography>
                <Typography variant="body1" style={{ marginBottom: "20px" }}>
                  {manager.history}
                </Typography>

                <Typography variant="h6" gutterBottom>
                  Current League Position
                </Typography>
                <Typography variant="body1" style={{ marginBottom: "20px" }}>
                  {manager.leaguePosition}
                </Typography>

                <Typography variant="h6" gutterBottom>
                  Accomplishments
                </Typography>
                <Typography variant="body1">{manager.accomplishments}</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ManagerPage;
