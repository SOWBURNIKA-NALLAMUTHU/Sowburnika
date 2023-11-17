import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
const LoginPageTwo = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(`Logging in with email: ${email} and password: ${password}`);
  };

  return (
    <Box width="100%" height="100vh" display="flex">
      <Box width="70%">
        <img
          src="https://img.freepik.com/free-photo/set-christmas-presents-with-golden-ribbon-globes_23-2148343314.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699574400&semt=ais"
          alt="Your Image Alt Text"
        />
      </Box>
      <Box
        width="40%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      ></Box>
    </Box>
  );
  return (
    <Box>
      <form>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          variant="contained"
          color="success"
          fullWidth
          style={{ marginTop: "25px" }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </form>
      ;
    </Box>
  );
};

export default LoginPageTwo;
