import React from 'react';
import { Typography, Paper, Box, TextField, Button, Grid as MuiGrid } from '@mui/material';

// Fix for MUI v5 Grid component
const Grid = MuiGrid as React.ComponentType<any>;

const Contact: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real app, you'd handle the form submission here
    alert('Form submitted!');
  };
  return (
    <Box sx={{ py: 3, mt: 2 }}>
      <Paper 
        elevation={4} 
        sx={{ 
          p: 4, 
          mb: 5,
          borderLeft: '4px solid #1976d2',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '70%',
            height: '10px',
            background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.05))'
          }
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          Have questions or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="given-name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="message"
                label="Message"
                id="message"
                multiline
                rows={4}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Send Message
          </Button>
        </Box>
      </Paper>

      <Paper 
        elevation={3} 
        sx={{ 
          p: 3,
          border: '1px solid rgba(0, 0, 0, 0.12)',
          borderTop: '3px solid #4caf50', // Green accent
          position: 'relative',
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)'
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '50%',
            height: '8px',
            background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.05))'
          }
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Our Location
        </Typography>
        <Typography variant="body2">
          123 React Avenue<br />
          Material UI City, TS 12345<br />
          United States
        </Typography>
        <Typography variant="h6" component="h2" sx={{ mt: 2 }} gutterBottom>
          Contact Information
        </Typography>
        <Typography variant="body2">
          Email: info@reactspa.example<br />
          Phone: (123) 456-7890<br />
        </Typography>
      </Paper>
    </Box>
  );
};

export default Contact;
