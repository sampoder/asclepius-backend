import { useUser } from "../lib/hooks";
import { useRouter } from "next/router";
import { Container, Center, Heading, Text } from "@chakra-ui/core";

const Home = () => {
  const user = useUser();
  const router = useRouter();
  if (!user && process.browser) {
    router.push("/login");
  }
  return (
    <>
      {user && (
        <Center h="100vh">
          <Container maxW="xl">
            <Heading pb={6}>👋 Welcome Nodemaster</Heading>
            <Text pb={9}>Currently logged in as:</Text>
            <Text pt={9}><pre>{JSON.stringify(user, null, 2)}</pre></Text>
          </Container>
        </Center>
      )}

      <style jsx>{`
        li {
          margin-bottom: 0.5rem;
        }
        pre {
          background: #EDF2F7;
          padding: 15px;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};

export default Home;
