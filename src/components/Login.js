import React, { useState } from "react";
import { Container, TextField, Button, Typography, Paper } from "@mui/material";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [onSignUpPage, setOnSignUpPage] = useState(false);
  const signIn = useSignIn();
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleChangePageState = () => {
    setOnSignUpPage(!onSignUpPage);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signIn({ email, password });
      console.log("Sign in response:", response);
      // Redirect to Dashboard after successful sign-in
      navigate("/dashboard");
    } catch (error) {
      console.error("Sign in error:", error);
      // Handle sign-in error
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }
    // Handle signup logic here
    console.log("Sign up with:", email, password);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={3}
        style={{ padding: "20px", maxWidth: "400px", margin: "20px auto" }}
      >
        <Typography component="h1" variant="h5">
          {onSignUpPage ? "Sign Up" : "Sign In"}
        </Typography>
        <form onSubmit={onSignUpPage ? handleSignUp : handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={password}
            onChange={handlePasswordChange}
          />
          {onSignUpPage && (
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ margin: "20px 0" }}
          >
            {onSignUpPage ? "Sign Up" : "Sign In"}
          </Button>
          <Button
            onClick={handleChangePageState}
            fullWidth
            variant="contained"
            color="primary"
            style={{ margin: "20px 0" }}
          >
            {onSignUpPage ? "Sign In" : "Sign Up"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;

