import {
  Input,
  Flex,
  Button,
  Stack,
  Heading,
  Text,
  Box,
} from '@chakra-ui/react';

type FeatureProps = {
  title: string;
  desc: string;
};
function Feature({ title, desc }: FeatureProps) {
  return (
    <Box p={5} shadow='md' borderWidth='1px' width='500px'>
      <Heading fontSize='xl'>{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
}

function StackEx() {
  return (
    <Stack spacing={8} direction='row' justifyContent='center'>
      <Feature
        title='Plan Money'
        desc='The future can be even brighter but a goal without a plan is just a wish'
      />
      <Feature
        title='Save Money'
        desc='You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process'
      />
    </Stack>
  );
}

function App() {
  return (
    <>
      <StackEx />
      <Flex
        bg='teal'
        direction='column'
        alignItems='center'
        justifyContent='center'
        maxW='50vw'
        m='auto'
        h='100vh'
      >
        <Flex bg='white' minW='400px' p='40px' direction='column'>
          <Input
            type='text'
            variant='outline'
            border='2px solid teal'
            placeholder='Email Address'
            mb={3}
          />
          <Input
            type='password'
            variant='outline'
            borderColor='teal'
            placeholder='Password'
            border='2px solid teal'
            mb={3}
          />
          <Button
            variant='link'
            color='teal'
            marginLeft='auto'
            marginTop={3}
            marginBottom={6}
          >
            Forgot Password?
          </Button>
          <Button bg='teal' color='white'>
            Sign In
          </Button>
        </Flex>
      </Flex>

      <Stack direction={['column', 'row']} spacing='24px'>
        <Box w='400px' h='400px' bg='yellow.200'>
          1
        </Box>
        <Box w='400px' h='400px' bg='tomato'>
          2
        </Box>
        <Box w='400px' h='400px' bg='pink.100'>
          3
        </Box>
      </Stack>
    </>
  );
}

export default App;
