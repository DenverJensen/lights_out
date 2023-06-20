import { Button } from '@chakra-ui/react';
//import './tile.scss'

const Tile = ({ isLit, x, y, onClick, isWon }) => {
  const getColor = () => {
    if (isWon) {
      if (isLit) {
        return 'green';
      }
      return 'gray';
    } else if (isLit) {
      return 'blue';
    }
    return 'gray';
  };

  console.log(isWon);
  return (
    <Button
      className="tile"
      colorScheme={getColor()}
      size={'md'}
      //   w="100%"
      //minH="60px"
      h="5vw"
      minH={'100%'}
      border="1px outset gray"
      onClick={() => {
        onClick(x, y);
      }}
    />
  );
};

export default Tile;
<Button size={'md'}></Button>;
