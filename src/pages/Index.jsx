import { Container, Text, VStack, Image, Heading } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="xl" mb={4}>
          Tiny but Mighty AGI System
        </Heading>
        <Image src="https://images.unsplash.com/photo-1620429948700-24e48a41d5aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0aW55JTIwcm9ib3R8ZW58MHx8fHwxNzE0ODU0NDcyfDA&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" borderRadius="full" alt="Tiny Robot" />
        <Text fontSize="xl" textAlign="center">
          Discover the power of advanced AGI in a compact and efficient form. Our system is designed to revolutionize the way you interact with technology.
        </Text>
        <IconButton aria-label="Launch" icon={<FaRocket />} size="lg" colorScheme="purple" />
      </VStack>
    </Container>
  );
};

export default Index;
