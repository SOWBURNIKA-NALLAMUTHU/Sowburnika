import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Paper,
  Typography,
  Grid,
} from "@mui/material";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    // Add your sign-up logic here
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundImage:
      "url('https://e1.pxfuel.com/desktop-wallpaper/931/255/desktop-wallpaper-pulsar-220-login-page.jpg')", // Replace with your image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const paperStyle = {
    padding: 20,
    marginTop: 50,
  };

  return (
    <Container component="main" maxWidth="100%" style={containerStyle}>
      <Paper elevation={3} style={paperStyle}>
        <Typography variant="h5" align="center">
          SIGN UP
        </Typography>
        <br />
        <form>
          <Grid container spacing={3}>
            <Grid item xs={14}>
              <TextField
                fullWidth
                label="Email Address"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Confirm Password"
                type="password"
                variant="outlined"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="success"
            onClick={handleSignUp}
            style={{ marginTop: 20 }}
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUpPage;
