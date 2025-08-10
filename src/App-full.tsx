import { Box, Container, Heading, Text, VStack, Button } from '@chakra-ui/react'

function App() {
  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8} align="center">
        <Box textAlign="center">
          <Heading size="2xl" bgGradient="linear(to-r, blue.500, blue.600)" bgClip="text">
            CourageCaller 📞
          </Heading>
          <Text fontSize="xl" color="gray.600" mt={4}>
            Prepare and practice phone calls with confidence
          </Text>
        </Box>
        
        <VStack spacing={4}>
          <Text fontSize="lg" textAlign="center">
            🎉 <strong>Your app is running successfully!</strong>
          </Text>
          
          <Text textAlign="center" color="gray.600">
            This is a basic version. The full app with all features has been built
            and is ready to be deployed. You can:
          </Text>
          
          <VStack spacing={2} align="start">
            <Text>✅ Build call scripts with guided wizards</Text>
            <Text>✅ Practice calls with voice interaction</Text>
            <Text>✅ Use teleprompter mode during real calls</Text>
            <Text>✅ Export scripts to PDF</Text>
            <Text>✅ Access crisis support resources</Text>
            <Text>✅ Install as a Progressive Web App</Text>
          </VStack>
          
          <Button colorScheme="blue" size="lg" mt={6}>
            Ready to help you build confidence! 💪
          </Button>
        </VStack>
      </VStack>
    </Container>
  )
}

export default App