import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Profile from './components/Profile';
import {
  GetObjectCommand,
  ListObjectsV2Command,
  PutObjectCommand,
  S3Client,
  DeleteObjectCommand
} from "@aws-sdk/client-s3";
//import theme from './config/theme';

function App() {
  return (
    <ChakraProvider >
      <Box textAlign="center" fontSize="2xl" m="3rem auto" p={5} maxW={700}>
        
      </Box>
    </ChakraProvider>
  );
}

export default App;
