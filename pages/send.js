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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
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
import Loader from "react-loader-spinner";
import useSWR, { mutate } from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const Home = () => {
  const user = useUser();
  const router = useRouter();

  const { data, error } = useSWR("/api/send", fetcher);
  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <div style={{ height: "100vh", width: "100vw" }}>
        <Center paddingTop="100px">
          <Loader
            type="Circles"
            color="#EDF2F7"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </Center>
      </div>
    );
  // render data
  return (
    <>
      <Head>
        <title>Asclepius Dashboard</title>
      </Head>
      {user && (
        <Container maxW="xl" pt={100}>
          <Heading pb={6}>📦 Ship packages</Heading>
          <Text pb={9}>
            Use this page to go through the shipment procedure.
          </Text>
          <hr style={{ paddingBottom: "10px", paddingTop: "10px", paddingBottom: "10px" }} />
          <Accordion allowMultiple>
            <AccordionItem borderTopWidth="0px">
              <AccordionButton paddingLeft={0} pt={3} pb={3}>
                <Box flex="1" textAlign="left">
                  1. Review Information
                </Box>
              </AccordionButton>
              <AccordionPanel pb={4} pl={0} pt={0}>
                <hr style={{ paddingBottom: "10px", paddingTop: "10px" }} />
                <div>
                  <strong>Name: </strong>{data.name}!
                  
                </div>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem isDisabled={true}>
              <AccordionButton paddingLeft={0} pt={3} pb={3}>
                <Box flex="1" textAlign="left">
                  Section 1 title
                </Box>
              </AccordionButton>
              <AccordionPanel pb={4} pl={0} pt={0}>
                <hr style={{ paddingBottom: "10px", paddingTop: "10px" }} />
                <div>
                  hello {data.name}!{" "}
                  <Button
                    onClick={() => {
                      mutate("/api/send");
                    }}
                  >
                    Revalidate
                  </Button>
                </div>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
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
