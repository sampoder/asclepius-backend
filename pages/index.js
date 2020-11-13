import { useUser } from "../lib/hooks";
import { useRouter } from "next/router";
import Head from "next/head";
import {
  Container,
  Center,
  Code,
  Heading,
  Text,
  Box,
  Button,
  Image,
  Link,
  Badge,
  Stat,
  ButtonGroup,
  Flex,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Grid,
  GridItem,
} from "@chakra-ui/core";

const Home = () => {
  const user = useUser();
  const router = useRouter();
  if (!user && process.browser) {
    router.push("/login");
  }
  return (
    <>
      <Head>
        <title>Asclepius Dashboard</title>
      </Head>
      {user && (
        <Container maxW="xl" pt={100}>
          <Heading pb={6}>👋 Welcome Nodemaster</Heading>
          <Text pb={9}>
            You are currently logged in as:{" "}
            <Code style={{ wordWrap: "break-word" }} p={1} borderRadius={8}>
              {user.email}
            </Code>
          </Text>
          <hr style={{ paddingBottom: "10px", paddingTop: "10px" }} />
          <Flex>
            <Box
              maxW="sm"
              borderWidth="1px"
              rounded="lg"
              overflow="hidden"
              mr={10}
              as="a"
              href="/send"
              transition="all .2s ease-in-out"
              _hover={{ transform: "scale(1.02)" }}
            >
              <Image
                objectFit="cover"
                w="100%"
                src={
                  "https://images.unsplash.com/photo-1582389881120-ea93ec8c1d10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                }
                alt={"Postal Box"}
              />
              <Box p="6">
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h3"
                  fontSize={20}
                  lineHeight="tight"
                  isTruncated
                >
                  Send Packages →
                </Box>
              </Box>
            </Box>
            <Box
              maxW="sm"
              borderWidth="1px"
              rounded="lg"
              overflow="hidden"
              transition="all .2s ease-in-out"
              _hover={{ transform: "scale(1.02)" }}
            >
              <Image
                objectFit="cover"
                w="100%"
                src={
                  "https://images.unsplash.com/photo-1556011308-d6aedab5ed8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                }
                alt={"DHL Truck"}
              />
              <Box p="6">
                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h3"
                  fontSize={20}
                  lineHeight="tight"
                  isTruncated
                >
                  Track Packages →
                </Box>
              </Box>
            </Box>
          </Flex>
          <hr style={{ marginBottom: "10px", marginTop: "20px" }} />
          <Text>
            © Asclepius 2020{"⠀"}|{"⠀"}
            <Link
              href="https://github.com/sampoder/asclepius-backend"
              color="blue.500"
            >
              Source
            </Link>
            {"⠀"}|{"⠀"}Images from{" "}
            <Link href="https://unsplash.com" color="blue.500">
              Unsplash
            </Link>
          </Text>
        </Container>
      )}

      <style jsx>{`
        li {
          margin-bottom: 0.5rem;
        }
        pre {
          background: #edf2f7;
          padding: 15px;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};

export default Home;
