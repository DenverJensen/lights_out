import {
  Box,
  Center,
  Grid,
  GridItem,
  SimpleGrid,
  //   useToast,
} from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';
import Tile from '../components/tile/tile';
import { Puzzles5 } from '../utilties/5Puzzles';
// import { getRandomInt } from './../utilties/functions';
import HowToPlay from '../components/howToPlay/howToPlay';
import LevelSelect from './../components/levelSelect/levelSelect';
const GameBoard = () => {
  const [tileMap, setTileMap] = useState([]);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [isWon, setIsWon] = useState(false);

  useEffect(() => {
    setBoard(currentLevel);
  }, [currentLevel, setCurrentLevel]);

  const setBoard = level => {
    let newMap = [];

    let currentPuzzle = Puzzles5[level - 1];

    //set new 5 by 5 grid
    //set counter for tile index
    let counter = 0;
    // outside loop for x coord
    for (let i = 1; i < 6; i++) {
      //inside loop for y coord
      for (let j = 1; j < 6; j++) {
        counter++;
        newMap.push({ y: i, x: j, index: counter, isLit: false });
      }
      setIsWon(false);
    }

    //flip tiles for current selected level
    for (const tile in newMap) {
      for (const p in currentPuzzle) {
        if (currentPuzzle[p] === newMap[tile].index) {
          newMap[tile].isLit = true;
        }
      }
    }
    setTileMap(newMap);
  };

  const onTileClick = (x, y) => {
    let newMap = [...tileMap];
    for (const t in newMap) {
      const element = newMap[t];
      //flip clicked tile and adjacent tiles
      //flip clicked tile
      if (element.x === x && element.y === y) {
        element.isLit = !element.isLit;
      }
      //flip tile to right
      if (element.x === x + 1 && element.y === y) {
        element.isLit = !element.isLit;
      }
      //flip tile below
      if (element.x === x && element.y === y + 1) {
        element.isLit = !element.isLit;
      }
      //flip tile to left
      if (element.x === x - 1 && element.y === y) {
        element.isLit = !element.isLit;
      }
      //flip tile above
      if (element.x === x && element.y === y - 1) {
        element.isLit = !element.isLit;
      }
    }
    setTileMap(newMap);

    let winnerCheck;
    if (tileMap.length > 1) {
      winnerCheck = true;
    } else {
      winnerCheck = false;
    }
    for (const t in tileMap) {
      if (tileMap[t].isLit && tileMap.length > 5) {
        winnerCheck = false;
      }
    }
    if (winnerCheck) {
      Celebrate();
    }
    setIsWon(winnerCheck);
  };

  
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const Celebrate = async () => {
    const winSquares = [
      1, 2, 3, 4, 5, 10, 9, 8, 7, 6, 11, 12, 13, 14, 15, 20, 19, 18, 17, 16, 21,
      22, 23, 24, 25,
    ];
    for (const t in winSquares) {
      let newMap = [...tileMap];
      const element = newMap[winSquares[t] - 1];

      if (winSquares.includes(element.index)) {
        element.isLit = true;
        setTileMap(prevMap => newMap, [tileMap]);
        await sleep(150);
      }
    }
  };

  return (
    <Grid templateColumns="repeat(9,1fr)" flex={'0 1 auto'} float={'inherit'}>
      {/* dynamic colSpans for mobile friendly viewing */}
      <GridItem colSpan={{ base: 9, lg: 3 }} p={10}>
        <Center mt={8}>
          <LevelSelect
            level={currentLevel}
            setLevel={setCurrentLevel}
            reset={setBoard}
          />
        </Center>
      </GridItem>
      <GridItem colSpan={{ base: 9, lg: 3 }}>
        <Box p={10} w="100%">
          <SimpleGrid columns={5} rows={5} gap={1} minH="300px">
            {tileMap?.map(tile => (
              <Tile
                isLit={tile.isLit}
                key={tile.index}
                x={tile.x}
                y={tile.y}
                onClick={onTileClick}
                isWon={isWon}
              />
            ))}
          </SimpleGrid>
        </Box>
      </GridItem>
      <GridItem colSpan={{ base: 9, lg: 3 }} p={10}>
        <Center>
          {/* todo: settings pannel slider */}
          <HowToPlay />
        </Center>
      </GridItem>
    </Grid>
  );
};

export default GameBoard;
