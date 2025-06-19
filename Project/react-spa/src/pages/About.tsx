import React from 'react';
import { Typography, Paper, Box, Grid as MuiGrid } from '@mui/material';

// Fix for MUI v5 Grid component
const Grid = MuiGrid as React.ComponentType<any>;

const About: React.FC = () => {
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
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          This is a demonstration of a React Single Page Application (SPA) using Material UI components.
          The application features a fixed header and footer with a scrollable main content area.
        </Typography>
        <Typography variant="body1" paragraph>
          The project demonstrates best practices for React development including:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">Component-based architecture</Typography>
          </li>
          <li>
            <Typography variant="body1">Material UI integration</Typography>
          </li>
          <li>
            <Typography variant="body1">React Router for navigation</Typography>
          </li>
          <li>
            <Typography variant="body1">TypeScript for type safety</Typography>
          </li>
          <li>
            <Typography variant="body1">Responsive design principles</Typography>
          </li>
        </ul>
      </Paper>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 3,
              border: '1px solid rgba(0, 0, 0, 0.12)',
              borderTop: '3px solid #3f51b5',
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)'
              }
            }}
          >
            <Typography variant="h6" component="h2" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body2">
              Our mission is to demonstrate how to build modern web applications using React and Material UI.
              We strive to showcase best practices and provide a template that can be used as a starting point
              for real-world applications.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 3,
              border: '1px solid rgba(0, 0, 0, 0.12)',
              borderTop: '3px solid #ff9800', // Orange accent
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)'
              }
            }}
          >
            <Typography variant="h6" component="h2" gutterBottom>
              Our Vision
            </Typography>
            <Typography variant="body2">
              We envision a world where web applications are not only functional but also beautiful and intuitive.
              By leveraging the power of React and Material UI, we aim to make the web a better place one application at a time.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
