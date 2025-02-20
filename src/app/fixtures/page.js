"use client";

import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";

const NavItem = styled("div")({
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
});

export default function Fixtures() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch("/api/fixture") 
      .then((res) => res.json())
      .then((data) => {
        console.log("MongoDB Response:", data);
        setMatches(data);
      })
      .catch((err) => console.error("Fetch Error:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      {/* Navigation */}
      <Grid container spacing={2} justifyContent="center" style={{ marginBottom: "20px" }}>
        <Grid item xs={2}><Link href="/results" passHref><NavItem>Results</NavItem></Link></Grid>
        <Grid item xs={2}><Link href="/manager" passHref><NavItem>Manager</NavItem></Link></Grid>
        <Grid item xs={2}><Link href="/lineup" passHref><NavItem>Lineup</NavItem></Link></Grid>
        <Grid item xs={2}><Link href="/standing" passHref><NavItem>Standing</NavItem></Link></Grid>
        <Grid item xs={2}><Link href="/players" passHref><NavItem>Players</NavItem></Link></Grid>
      </Grid>

      <Typography variant="h4" gutterBottom style={{ textAlign: "center", marginBottom: "20px", fontSize: "32px" }}>
        Fixtures
      </Typography>

      {/* Match Data Display */}
      <Grid container direction="column" spacing={3} justifyContent="center">
        {matches.length > 0 ? (
          matches.map((match, index) => (
            <div key={index} style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
              <Typography variant="h6">{match.hometeam} vs {match.awayteam}</Typography>
              <Typography>Score: {match.homescore} - {match.awayscore}</Typography>
            </div>
          ))
        ) : (
          <Typography>No matches available</Typography>
        )}
      </Grid>
    </div>
  );
}
