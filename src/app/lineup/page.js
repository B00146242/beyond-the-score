"use client";

import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Link from "next/link";

const PlayerItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  backgroundColor: "white",
  color: "grey",
  margin: theme.spacing(1),
}));

const FormationContainer = styled(Grid)(({ theme }) => ({
  height: "80vh",
  border: "2px solid lightgray",
  borderRadius: theme.spacing(1),
  position: "relative",
  backgroundColor: "#f7f7f7",
}));

const NavItem = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2),
  color: "white",
  backgroundColor: "grey",
  cursor: "pointer",
}));

export default function LineupPage() {
 const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch("https://free-api-live-football-data.p.rapidapi.com/football-get-hometeam-lineup?eventid=4621624", {
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

  const lineup = {
    goalkeeper: ["Sanchez"],
    defenders: ["Chilwell", "Disasi", "tosin", "Cucu"],
    midfielders: ["lavia", "caicedo", "enzo"],
    forwards: ["Palmer", "jackson", "neto"],
  };

  const opposition = {
    goalkeeper: ["ederson"],
    defenders: ["walker", "dias", "stones", "ake"],
    midfielders: ["kovacic", "rodri", "de bryune"],
    forwards: ["doku", "haaland", "grealish"],
  };

  return (
    <div>
      <Grid container spacing={2} justifyContent="center" style={{ marginBottom: '20px' }}>
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

      <Typography variant="h4" align="center" gutterBottom>
        Football Formation: 4-3-3
      </Typography>

      <Grid container spacing={3} justifyContent="space-between">
        <Grid item xs={5}>
          <Typography variant="h5" align="center" gutterBottom>
            Chelsea
          </Typography>
          <FormationContainer container justifyContent="center" alignItems="center">
            <Grid item xs={12} container justifyContent="center">
              <PlayerItem>
                <Typography>{lineup.goalkeeper[0]}</Typography>
              </PlayerItem>
            </Grid>

            <Grid item xs={12} container justifyContent="space-between" style={{ marginTop: '40px' }}>
              {lineup.defenders.map((player, index) => (
                <Grid item xs={2} key={`defender-${index}`}>
                  <PlayerItem>
                    <Typography>{player}</Typography>
                  </PlayerItem>
                </Grid>
              ))}
            </Grid>

            <Grid item xs={12} container justifyContent="space-around" style={{ marginTop: '60px' }}>
              {lineup.midfielders.map((player, index) => (
                <Grid item xs={3} key={`midfielder-${index}`}>
                  <PlayerItem>
                    <Typography>{player}</Typography>
                  </PlayerItem>
                </Grid>
              ))}
            </Grid>

            <Grid item xs={12} container justifyContent="space-around" style={{ marginTop: '80px' }}>
              {lineup.forwards.map((player, index) => (
                <Grid item xs={3} key={`forward-${index}`}>
                  <PlayerItem>
                    <Typography>{player}</Typography>
                  </PlayerItem>
                </Grid>
              ))}
            </Grid>
          </FormationContainer>
        </Grid>

        <Grid item xs={5}>
          <Typography variant="h5" align="center" gutterBottom>
            Man City
          </Typography>
          <FormationContainer container justifyContent="center" alignItems="center">
            <Grid item xs={12} container justifyContent="center">
              <PlayerItem>
                <Typography>{opposition.goalkeeper[0]}</Typography>
              </PlayerItem>
            </Grid>

            <Grid item xs={12} container justifyContent="space-between" style={{ marginTop: '40px' }}>
              {opposition.defenders.map((player, index) => (
                <Grid item xs={2} key={`defender-${index}`}>
                  <PlayerItem>
                    <Typography>{player}</Typography>
                  </PlayerItem>
                </Grid>
              ))}
            </Grid>

            <Grid item xs={12} container justifyContent="space-around" style={{ marginTop: '60px' }}>
              {opposition.midfielders.map((player, index) => (
                <Grid item xs={3} key={`midfielder-${index}`}>
                  <PlayerItem>
                    <Typography>{player}</Typography>
                  </PlayerItem>
                </Grid>
              ))}
            </Grid>

            <Grid item xs={12} container justifyContent="space-around" style={{ marginTop: '80px' }}>
              {opposition.forwards.map((player, index) => (
                <Grid item xs={3} key={`forward-${index}`}>
                  <PlayerItem>
                    <Typography>{player}</Typography>
                  </PlayerItem>
                </Grid>
              ))}
            </Grid>
          </FormationContainer>
        </Grid>
      </Grid>
       <Grid container direction="column" spacing={3} justifyContent="center">
              <pre>{JSON.stringify(apiData, null, 2)}</pre>
            </Grid>
    </div>
  );
}
