import { useUser } from "../lib/hooks";
import { useRouter } from "next/router";
import { Container, Center } from "@chakra-ui/core";

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
            <p>Currently logged in as:</p>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </Container>
        </Center>
      )}

      <style jsx>{`
        li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </>
  );
};

export default Home;
