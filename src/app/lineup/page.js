"use client";

import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';

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
  const lineup = {
    goalkeeper: ["Player 1"],
    defenders: ["Player 2", "Player 3", "Player 4", "Player 5"],
    midfielders: ["Player 6", "Player 7", "Player 8"],
    forwards: ["Player 9", "Player 10", "Player 11"],
  };

  const opposition = {
    goalkeeper: ["Opponent 1"],
    defenders: ["Opponent 2", "Opponent 3", "Opponent 4", "Opponent 5"],
    midfielders: ["Opponent 6", "Opponent 7", "Opponent 8"],
    forwards: ["Opponent 9", "Opponent 10", "Opponent 11"],
  };

  return (
    <div>
      <Grid container spacing={2} justifyContent="center" style={{ marginBottom: '20px' }}>
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

      <Typography variant="h4" align="center" gutterBottom>
        Soccer Formation: 4-3-3
      </Typography>

      <Grid container spacing={3} justifyContent="space-between">
        <Grid item xs={5}>
          <Typography variant="h5" align="center" gutterBottom>
            Your Team
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
            Opposition Team
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
    </div>
  );
}
