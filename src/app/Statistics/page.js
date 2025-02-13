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
    fetch("https://footapi7.p.rapidapi.com/api/player/3041/statistics/season", {
      method: "GET",
      headers: {
        'x-rapidapi-key': '65a84db33cmshf211b6817ea17d8p191775jsn3b3820a40528',
        'x-rapidapi-host': 'footapi7.p.rapidapi.com'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data);
        setApiData(data); // Store API data in state
      })
      .catch((error) => console.error("Error fetching data:", error));
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

      <div style={{ whiteSpace: "pre-wrap", wordWrap: "break-word", backgroundColor: "#f4f4f4", padding: "10px", borderRadius: "5px" }}>
        {apiData ? JSON.stringify(apiData, null, 2) : "Loading..."}
      </div>
    </div>
  );
}
