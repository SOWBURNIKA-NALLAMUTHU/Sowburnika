import React from "react";
import { Button, Container, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Front = () => {
  const handleLogin = () => {
    console.log();
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://image.slidesdocs.com/responsive-images/background/3d-rendered-image-of-smartphone-screen-showing-online-shopping-portal-with-elegant-red-and-white-gift-box-wrapped-in-golden-ribbon-powerpoint-background_ccc4e43ed8__960_540.jpg')", // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden", // Ensure the background covers the entire viewport
      }}
    >
      <Container
        maxWidth="xs"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative", // Ensure other components are positioned relative to this container
          zIndex: 1, // Ensure this container stays above the background image
          color: "white", // Set text color to white or another suitable color for better visibility
        }}
      >
        <Paper
          elevation={10}
          component="div"
          style={{ padding: "30px", width: "100%" }}
        >
          <Typography component="h1" variant="h4" align="center">
            WELCOME
          </Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
            style={{ marginTop: "16px" }}
          >
            Login
          </Button>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
            style={{ marginTop: "8px" }}
          >
            Sign Up
          </Button>
        </Paper>
      </Container>
    </div>
  );
};

export default Front;
