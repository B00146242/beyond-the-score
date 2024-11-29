'use client';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function Home() {
    const handleSubmit = (event) => {
        console.log("handling submit");
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let email = data.get('email')
        let email2 = data.get('email')
        let pass = data.get('pass')
        let pass2 = data.get('pass')
        let tel= data.get('tel')
        console.log("Sent email:" + email)
        console.log("Sent email:" + email2)
        console.log("Sent pass:" + pass)
        console.log("Sent pass:" + pass2)
        console.log("Sent tel:" + tel)
        runDBCallAsync(`http://localhost:3000/api/register?tel=${tel}&email=${email}
        &pass=${pass}`)
       }; // end handle submit
       
  async function runDBCallAsync(url) {
    const res = await fetch(url);
    const data = await res.json();
    if (data.data == "valid") {
      console.log("login is valid!");
    } else {
      console.log("not valid");
    }
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ height: '100vh' }}>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email2"
            label="Email Address"
            name="email2"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="pass"
            label="Password"
            type="password"
            id="pass"
            autoComplete="current-password"
          />
           <TextField
            margin="normal"
            required
            fullWidth
            name="pass2"
            label="Password"
            type="password"
            id="pass2"
            autoComplete="current-password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="tel"
            label="telephone"
            type="telephone"
            id="tel"
            autoComplete="current-telephone"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  ); // end return
}
