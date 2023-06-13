import {
  Center,
  useColorModeValue,
  Heading,
  Box,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../utilties/ColorModeSwitcher';

const LightsHeader = () => {
  const color = useColorModeValue('gray.400', 'gray.700');
  const highLight = useColorModeValue('#3f48cc', "#90cdf4" )

  return (
    <>
      <Box backgroundColor={color} height="80px" p={3}>
        <Grid templateColumns="repeat(6, 1fr)" gap={4}>
          {/* <GridItem colStart={{base:2, xl:6}} colEnd={{base:10, xl:8}}> */}
          <GridItem colStart={3} colEnd={5}>
   
       
          <Center>
            <Heading letterSpacing={"5px"} color={highLight}> LIGHTS OUT</Heading>
          {/* <Logo/> */}
            </Center>
          </GridItem>
          <ColorModeSwitcher w="100px" />
        </Grid>
      </Box>
    </>
  );
};

export default LightsHeader;
