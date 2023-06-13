import { Heading } from '@chakra-ui/react';

const HowToPlay = () => {
  return (
    <>
      <Heading size="sm" mt={8}>
        Object: <br />
        To turn all the lights out on the keypad, but each time you press a lit
        or unlit button, it not only changes that button, but also the adjacent
        buttons! You must try to turn the lights out in the minimum number of
        moves! <br />
        <br />
        Your game contains +/- buttons to switch the current level and a reset button.<br />
        <br/>
        You will start on Puzzle 1. Now you must try to
        turn these lights out!
      </Heading>
    </>
  );
};

export default HowToPlay;
