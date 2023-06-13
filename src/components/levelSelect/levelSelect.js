import { Button, Center, Heading, Text } from '@chakra-ui/react';

const LevelSelect = ({ level, setLevel, reset }) => {
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
        >
          +
        </Button>
      </Text>
    </Heading>
  );
};

export default LevelSelect;
