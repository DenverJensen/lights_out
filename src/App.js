import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
  Spacer,
  useColorModeValue,
  Center,
  SimpleGrid,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './utilties/ColorModeSwitcher';
import { Logo } from './utilties/Logo';
import Header from './components/header';
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
