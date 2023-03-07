import { Button } from '@chakra-ui/react';

const Tile = ({ isLit, x, y, onClick }) => {
  return (
    <Button
      colorScheme={isLit ? 'blue' : 'gray'}
      size={'md'}
      w="100px"
      h="100px"
	  onClick={()=>{onClick(x,y)}}
    />
  );
};

export default Tile;
<Button size={'md'}></Button>;
