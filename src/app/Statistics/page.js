"use client";

import React, { useState, useEffect } from "react";
import { Grid, Typography, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";

const StatCard = styled(Card)({
  marginBottom: "10px",
  padding: "10px",
  backgroundColor: "#f5f5f5",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
});

export default function Statistics() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("/api/teamStats")
      .then((res) => res.json())
      .then((data) => {
        console.log("MongoDB Response:", data);
        setStats(data);
      })
      .catch((err) => console.error("Fetch Error:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Player Shot Statistics
      </Typography>

        <Grid container direction="column" spacing={3} justifyContent="center">
        {stats ? ( 
            stats.map((stats) =>
            <div style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
            <Typography> Total Shots: {stats.totalShots} </Typography>
            <Typography> Shots On Target: {stats.shotsOnTarget} </Typography>	
            <Typography> Shots Off Target: {stats.shotsOffTarget} </Typography>
            <Typography> Blocked Shots: {stats.blockedShots}</Typography>
            <Typography	> Shots Inside Box: {stats.shotsFromInsideTheBox}</Typography>
            <Typography> Shots Outside Box: {stats.shotsFromOutsideTheBox}</Typography>
            </div>
        )) : (
            <Typography>No statistics available</Typography>
        )}
        </Grid>

    </div>
  );
}
