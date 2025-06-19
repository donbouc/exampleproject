import React from 'react';
import { Box, Toolbar, Container } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>      <Header />
      {/* Toolbar pushes content below fixed app bar */}
      <Toolbar />
      {/* Extra spacer between header and content */}
      <Box sx={{ height: '24px' }} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          overflow: 'auto',
          paddingBottom: '100px', // Increased padding for footer
          paddingTop: 4, // Padding for content areas
        }}
      >
        <Container maxWidth="lg">{children}</Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
