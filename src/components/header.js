import {
  Header,
  Center,
  Flex,
  Spacer,
  useColorModeValue,
  Text,
  Heading,
  Box,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../utilties/ColorModeSwitcher';

const LightsHeader = () => {
  const color = useColorModeValue('gray.400', 'gray.700');

  return (
    <>
      <Box backgroundColor={color} height="80px" p={3}>
        <Center>
          <Heading>LIGHTS OUT</Heading>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Center>
      </Box>
    </>
  );
};

export default LightsHeader;
