import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper, Grid, Box } from '@mui/material';
import {navigate, useNavigate} from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = () => {
          if(username === "drivex@gmail.com" && password === "Drive@123"){
                navigate("/home")
          }
          else {
            setError(true);
          }
  };

  return (
    <Container component="main" maxWidth="xs" style={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
      <Paper elevation={3} style={{ padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5">Login</Typography>
        <form style={{ width: '100%', marginTop: 16 }}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
          <Box mt={2}>
            <Typography color="error">Incorrect username or password</Typography>
          </Box>
        )}
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
            style={{ marginTop: 16 }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
