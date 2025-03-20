"use client";

import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import { Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";

const NavItem = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(2),
  color: "grey",
  backgroundColor: "white",
  cursor: "pointer",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  fontSize: "14px", 
  fontWeight: "bold",
  borderRadius: "8px",
}));

const chartStats = [
  { key: "goals.for.total.total", label: "Goals For", color: "#3498db" },
  { key: "goals.against.total.total", label: "Goals Against", color: "#e74c3c" },
  { key: "clean_sheet.total", label: "Clean Sheets", color: "#2ecc71" },
  { key: "assists.total", label: "Assists", color: "#9b59b6" },
  { key: "penalty.scored.total", label: "Penalties Scored", color: "#f1c40f" },
  { key: "wins.total", label: "Wins", color: "#1abc9c" },
];

export default function Statistics() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/stats")
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
        setLoading(false);
      });
  }, []);

  const drawChart = (statKey, label, color, containerId) => {
    if (!stats) return;

    const width = 200;
    const height = width;
    const innerRadius = 40; 
    const outerRadius = Math.min(width, height) / 2.5; 

    const data = stats.map((item) => ({
      state: item.team_statistics.team.name,
      population: statKey.split(".").reduce((acc, part) => acc?.[part], item.team_statistics) || 0,
    }));

    const svg = d3
      .select(`#${containerId}`)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-width / 2, -height / 2, width, height])
      .attr("style", "width: 100%; height: auto; font: 5px sans-serif;"); 

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.state))
      .range([0, 2 * Math.PI])
      .align(0);

    const y = d3
      .scaleRadial()
      .domain([0, d3.max(data, (d) => d.population)])
      .range([innerRadius, outerRadius]);

    const arc = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius((d) => y(d.population))
      .startAngle((d) => x(d.state))
      .endAngle((d) => x(d.state) + x.bandwidth())
      .padAngle(0.01)
      .padRadius(innerRadius);

    svg
      .append("g")
      .selectAll("path")
      .data(data)
      .join("path")
      .attr("fill", color)
      .attr("d", arc)
      .append("title")
      .text((d) => `${d.state}: ${d.population}`);

    svg
      .append("g")
      .selectAll("text")
      .data(data)
      .join("text")
      .attr("text-anchor", "middle")
      .attr("transform", (d) => `
        rotate(${((x(d.state) + x.bandwidth() / 2) * 180) / Math.PI - 90})
        translate(${innerRadius - 10},0)
      `)
      .text((d) => `${d.state}: ${d.population}`);

    svg
      .append("text")
      .attr("x", 0)
      .attr("y", outerRadius + 20)
      .attr("text-anchor", "middle")
      .text(label);
  };

  useEffect(() => {
    if (!loading && stats) {
      chartStats.forEach((stat, index) => {
        drawChart(stat.key, stat.label, stat.color, `chart-${index}`);
      });
    }
  }, [stats]);

  return (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={2} justifyContent="center" style={{ marginBottom: "20px" }}>
        {chartStats.map((_, index) => (
          <Grid item xs={4} key={index} id={`chart-${index}`}></Grid>
        ))}
      </Grid>
      {loading && (
        <Typography variant="h6" style={{ textAlign: "center" }}>
          Loading...
        </Typography>
      )}
    </div>
  );
}
