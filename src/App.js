import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

import Header from './components/header/header';
import GameBoard from './pages/gameBoard';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <GameBoard />
    </ChakraProvider>
  );
}

export default App;
