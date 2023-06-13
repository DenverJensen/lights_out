import { Button, Center, Heading, Text } from '@chakra-ui/react';
import { Puzzles5 } from '../../utilties/5Puzzles';

const LevelSelect = ({ level, setLevel, reset }) => {
    const levelLength = Puzzles5.length

  return (
    <Heading size="md">
      <Center>Current Level: {level}</Center>
      <Text>
        <Button
          colorScheme="blue"
          m={1}
          onClick={() => {
            setLevel(level - 1);
          }}
          isDisabled={level===1}
        >
          -
        </Button>
        <Button
          m={1}
          onClick={() => {
            reset(level);
          }}
        >
          Reset
        </Button>
        <Button
          colorScheme="blue"
          m={1}
          onClick={() => {
            setLevel(level + 1);
          }}
          isDisabled={level === levelLength}
        >
          +
        </Button>
      </Text>
    </Heading>
  );
};

export default LevelSelect;
