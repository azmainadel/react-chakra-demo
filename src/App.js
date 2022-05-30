import React from 'react';
import { ChakraProvider, Box, VStack, Grid, theme } from '@chakra-ui/react';
import { CallToActionWithAnnotation } from './component/hero/CallToActionWithAnnotation';
import { WithSpeechBubbles } from './component/testimonial/WithSpeechBubbles';
import { Footer } from './component/footer/Footer';
import { ColorModeSwitcher } from './utility/ColorModeSwitcher';
import { Story } from './component/story/Story';
import WithSubnavigation from './component/navbar/WithSubnavigation';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <WithSubnavigation/>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <CallToActionWithAnnotation />
          </VStack>
        </Grid>
        <WithSpeechBubbles />
        {/* <Story /> */}
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
