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
  const [processedData, setProcessedData] = useState([]);

  useEffect(() => {
    fetch("https://free-api-live-football-data.p.rapidapi.com/football-get-matches-by-date?date=20241107", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "free-api-live-football-data.p.rapidapi.com",
        "x-rapidapi-key": "7090656eebmshf4bf40aab7699dfp185787jsn8cf3b72c856f",
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data);

        if (data.response && Array.isArray(data.response.matches) && data.response.matches.length > 0) {
          const extractedData = data.response.matches.map((match) => ({
            matchId: match.id || "N/A",
            homeTeam: match.home?.name || "Unknown",
            awayTeam: match.away?.name || "Unknown",
            homeScore: match.home?.score ?? "N/A",
            awayScore: match.away?.score ?? "N/A",
            status: match.status?.long || "Unknown",
            dateTime: match.time || "Unknown",
          }));
          setProcessedData(extractedData);
        } else {
          console.warn("No matches found in the response");
          setProcessedData([]);
        }
      })
      .catch((err) => {
        console.error("API Fetch Error:", err);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={2} justifyContent="center" style={{ marginBottom: "20px" }}>
        <Grid item xs={2}><Link href="/results" passHref><NavItem>results</NavItem></Link></Grid>
        <Grid item xs={2}><Link href="/manager" passHref><NavItem>manager</NavItem></Link></Grid>
        <Grid item xs={2}><Link href="/lineup" passHref><NavItem>Lineup</NavItem></Link></Grid>
        <Grid item xs={2}><Link href="/standing" passHref><NavItem>standing</NavItem></Link></Grid>
        <Grid item xs={2}><Link href="/players" passHref><NavItem>Players</NavItem></Link></Grid>
      </Grid>

      <Typography variant="h4" gutterBottom style={{ textAlign: "center", marginBottom: "20px", fontSize: "32px" }}>
        Fixtures
      </Typography>

      <Grid container direction="column" spacing={3} justifyContent="center">
        {processedData.length > 0 ? (
          processedData.map((match) => (
            <div key={match.matchId} style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
              <Typography variant="h6">{match.homeTeam} vs {match.awayTeam}</Typography>
              <Typography>Score: {match.homeScore} - {match.awayScore}</Typography>
              <Typography>Status: {match.status}</Typography>
              <Typography>Date & Time: {match.dateTime}</Typography>
            </div>
          ))
        ) : (
          <Typography>No matches available</Typography>
        )}
      </Grid>
    </div>
  );
}
