import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Tile from '../components/tile';

const GameBoard = () => {
  const [tileMap, setTileMap] = useState([]);
  const [currentLevel, setCurrentLevel] = useState(1);

  useEffect(() => {
    let newMap = [];

    //set new 5 by 5 grid
    let counter = 0;
    for (let i = 1; i < 6; i++) {
      for (let j = 1; j < 6; j++) {
        counter++;
        newMap.push({ y: i, x: j, index: counter, isLit: false });
      }
    }
    setTileMap(newMap);
  }, []);

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
  };

  return (
    <Grid templateColumns="repeat(9,1fr)" flex={"0 1 auto"} float={"inherit"}>
      <GridItem  colSpan={{ base: 9, md: 3 }} p={10}>
        <Center>level select</Center>
      </GridItem>
      <GridItem colSpan={{ base: 9, md: 3 }}>
        <Box p={10}  w="100%">
          <SimpleGrid columns={5} rows={5} gap={1} minH="300px">
            {tileMap?.map(tile => (
              <Tile
                isLit={tile.isLit}
                key={tile.index}
                x={tile.x}
                y={tile.y}
                onClick={onTileClick}
              />
            ))}
          </SimpleGrid>
        </Box>
      </GridItem>
      <GridItem colSpan={{ base: 9, md: 3 }} p={10}>
        <Center>Settings</Center>
      </GridItem>
    </Grid>
  );
};

export default GameBoard;
