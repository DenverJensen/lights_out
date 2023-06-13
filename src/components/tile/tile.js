import { Button } from '@chakra-ui/react';
//import './tile.scss'

const Tile = ({ isLit, x, y, onClick }) => {
  return (
    <Button
      className="tile"
      colorScheme={isLit ? 'blue' : 'gray'}
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
