import { Flex, Box, Heading, Link, Text, Button } from '@chakra-ui/core';

export default function Home() {
  return (
    <Flex direction="column" align="center" justify="center" h="screen" py={8}>
      <Heading fontWeight="semibold">
        Welcome to <Link href="https://nextjs.org">Next Chakra Starter</Link>
      </Heading>

      <Text fontSize="2xl" mt={3}>
        Get started by editing{' '}
        <Box as="code" bg="indigo.300" borderRadius="md" fontSize="md" p={2}>
          pages/index.js
        </Box>
      </Text>
    </Flex>
  );
}
