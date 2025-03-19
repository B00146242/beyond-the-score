"use client";

import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import { Grid, Typography, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import * as d3 from "d3";

const StatCard = styled(Card)({
  marginBottom: "10px",
  padding: "10px",
  backgroundColor: "#f5f5f5",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
});

export default function Statistics() {
  const [teamStats, setTeamStats] = useState(null);
  const [goalData, setGoalData] = useState(null);

  useEffect(() => {
    fetch("/api/teamStats")
      .then((res) => res.json())
      .then((data) => {
        console.log("MongoDB Team Response:", data);
        setTeamStats(data);
      })
      .catch((err) => console.error("Team Fetch Error:", err));
    fetch("/api/goals")
      .then((res) => res.json())
      .then((data) => {
        const manUnitedData = data.find(
          (team) => team.team === "Manchester United"
        );
        console.log("Manchester United Goal Data:", manUnitedData);
        setGoalData(manUnitedData);
      })
      .catch((err) => console.error("Goal Fetch Error:", err));
  }, []);

  const chartData = teamStats
    ? [
        {
          type: "scatterpolar",
          r: [
            teamStats[0]?.totalShots || 0,
            teamStats[0]?.shotsOnTarget || 0,
            teamStats[0]?.shotsOffTarget || 0,
            teamStats[0]?.blockedShots || 0,
            teamStats[0]?.shotsFromInsideTheBox || 0,
            teamStats[0]?.totalShots || 0,
          ],
          theta: [
            "Total Shots",
            "Shots On Target",
            "Shots Off Target",
            "Blocked Shots",
            "Shots Inside Box",
            "Total Shots",
          ],
          fill: "toself",
          name: "Team A",
        },
      ]
    : [];

  const layout = {
    title: "Shot Statistics Radar Chart",
    polar: {
      radialaxis: {
        visible: true,
        range: [0, 4],
      },
    },
  };

  const renderGoalChart = () => {
    if (!goalData || !goalData.seasons) return null;

    const width = 928;
    const height = 500;
    const marginTop = 20;
    const marginRight = 0;
    const marginBottom = 30;
    const marginLeft = 40;

    const x = d3
      .scaleBand()
      .domain(goalData.seasons.map((d) => d.season))
      .range([marginLeft, width - marginRight])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(goalData.seasons, (d) => d.goals_scored)])
      .nice()
      .range([height - marginBottom, marginTop]);

    return (
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width={width}
        height={height}
        style={{ maxWidth: "100%", height: "auto" }}
      >
        <g className="bars" fill="steelblue">
          {goalData.seasons.map((d) => (
            <rect
              key={d.season}
              x={x(d.season)}
              y={y(d.goals_scored)}
              height={y(0) - y(d.goals_scored)}
              width={x.bandwidth()}
            />
          ))}
        </g>
        <g
          className="x-axis"
          transform={`translate(0,${height - marginBottom})`}
          ref={(node) => d3.select(node).call(d3.axisBottom(x).tickSizeOuter(0))}
        />
        <g
          className="y-axis"
          transform={`translate(${marginLeft},0)`}
          ref={(node) => d3.select(node).call(d3.axisLeft(y))}
        />
      </svg>
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Player and Team Shot Statistics
      </Typography>

      <Grid container direction="column" spacing={3} justifyContent="center">
        {teamStats ? (
          teamStats.map((stat, index) => (
            <StatCard key={index}>
              <CardContent>
                <Typography> Total Shots: {stat.totalShots} </Typography>
                <Typography> Shots On Target: {stat.shotsOnTarget} </Typography>
                <Typography> Shots Off Target: {stat.shotsOffTarget} </Typography>
                <Typography> Blocked Shots: {stat.blockedShots}</Typography>
                <Typography> Shots Inside Box: {stat.shotsFromInsideTheBox}</Typography>
                <Typography> Shots Outside Box: {stat.shotsFromOutsideTheBox}</Typography>
              </CardContent>
            </StatCard>
          ))
        ) : (
          <Typography>No team statistics available</Typography>
        )}
      </Grid>

      {teamStats && (
        <Plot data={chartData} layout={layout} style={{ width: "100%", height: "400px" }} />
      )}

      <Typography variant="h4" gutterBottom>
        Manchester United Goals Over the Last 10 Seasons
      </Typography>

      {goalData ? <div>{renderGoalChart()}</div> : <Typography>No goal data available</Typography>}
    </div>
  );
}