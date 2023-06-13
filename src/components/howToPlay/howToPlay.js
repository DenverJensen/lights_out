import { Heading } from '@chakra-ui/react';

const HowToPlay = () => {
  return (
    <>
      {' '}
      <Heading size="sm" mt={8}>
        Object: <br />
        To turn all the lights out on the keypad, but each time you press a lit
        or unlit button, it not only changes that button, but also the adjacent
        buttons! You must try to turn the lights out in the minimum number of
        moves! <br />
        <br />
        Game: Lights Out contains three different game play modes, but for
        purposes of the Quick Start play, we will begin with Mode 1, Puzzle 1!
        Your game contains an On/Off button, a Start button, a Sound Button, a
        Help Button and a Select Button. <br />
        <br /> How To Play: Press the “On” Button - This will turn your game on.
        You will see a “show of lights” chase around the board, ending in a
        cross pattern. <br />
        <br />
        Press the “Start” Button - The first button in the top row (row 1) will
        flash and then you will see three buttons in the middle row (row 3)
        light up and stay lit. This is Mode 1, Puzzle 1. Now you must try to
        turn these lights out!
      </Heading>
    </>
  );
};

export default HowToPlay;
