import React from 'react';
import { Typography, Paper, Box, Grid as MuiGrid, Button } from '@mui/material';

// Fix for MUI v5 Grid component
const Grid = MuiGrid as React.ComponentType<any>;

const Home: React.FC = () => {
  return (
    <Box sx={{ py: 3, mt: 2 }}>      <Paper 
        elevation={4} 
        sx={{ 
          p: 4, 
          mb: 5, 
          borderLeft: '4px solid #1976d2',  // Left border accent with primary color
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
          Welcome to React SPA
        </Typography>
        <Typography variant="body1" paragraph>
          This is a single page application built with React and Material UI.
          It features a fixed header and footer with a scrollable main content area.
        </Typography>
        <Button variant="contained" color="primary">
          Learn More
        </Button>
      </Paper>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 3, 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              border: '1px solid rgba(0, 0, 0, 0.12)',
              borderTop: '3px solid #3f51b5',  // Different color accent for feature cards
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)'
              }
            }}
          >
            <Typography variant="h6" component="h2" gutterBottom>
              Feature One
            </Typography>
            <Typography variant="body2" sx={{ flexGrow: 1 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Button size="small" color="primary">
                Read more
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 3, 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              border: '1px solid rgba(0, 0, 0, 0.12)',
              borderTop: '3px solid #ff9800',  // Orange accent for second card
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)'
              }
            }}
          >
            <Typography variant="h6" component="h2" gutterBottom>
              Feature Two
            </Typography>
            <Typography variant="body2" sx={{ flexGrow: 1 }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Button size="small" color="primary">
                Read more
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper 
            elevation={3} 
            sx={{ 
              p: 3, 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              border: '1px solid rgba(0, 0, 0, 0.12)',
              borderTop: '3px solid #4caf50',  // Green accent for third card
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2)'
              }
            }}
          >
            <Typography variant="h6" component="h2" gutterBottom>
              Feature Three
            </Typography>
            <Typography variant="body2" sx={{ flexGrow: 1 }}>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
              nisi ut aliquid ex ea commodi consequatur.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Button size="small" color="primary">
                Read more
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
