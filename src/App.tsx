import React from 'react';
import { CssBaseline, AppBar, Toolbar, Typography, Container } from '@mui/material';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            My React App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="body1" gutterBottom>
          Welcome to the React App with MUI and TypeScript.
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default App;
