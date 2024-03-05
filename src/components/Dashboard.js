import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const Dashboard = () => {
  return (
    <Container component="main" maxWidth="md" style={{ marginTop: '64px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body1">
          Welcome to your dashboard! This is where you can display your
          application's main content and features.
        </Typography>
        {/* Add your dashboard content here */}
      </Paper>
    </Container>
  );
};

export default Dashboard;