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
  SimpleGrid,
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
import { useState } from "react";
import Loader from "react-loader-spinner";
import useSWR, { mutate } from "swr";
import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

class ComponentToPrint extends React.PureComponent {
  render() {
    return( <SimpleGrid columns={2} spacing={10}>
      <img src="https://easypost-files.s3-us-west-2.amazonaws.com/files/postage_label/20201119/69c72a2cae304c97afc10279b31cb279.png" />
      <Box>
        <h1 style={{ fontWeight: '800', fontSize: '40px'}}>SCAN THIS QR CODE TO SUBMIT DATA.</h1>
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" />
      </Box>
    </SimpleGrid>)
  }
}

const Home = () => {
  const componentRef = useRef();
  const user = useUser();
  const router = useRouter();
  let [submitted, setSubmitted] = useState(false);
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
  return (
    <>
      <Head>
        <title>Asclepius Dashboard</title>
      </Head>
      {user && (
        <Container maxW="xl" pt={100}>
          <Heading pb={6}>📦 Ship packages</Heading>
          <Text pb={17}>
            Use this page to go through the shipment procedure.
          </Text>
          <SimpleGrid columns={2} spacing={10}>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              padding={submitted ? 5 : 5}
            >
              <Heading as="h3" size="md" pb={4}>
                Pack the package
              </Heading>
              {data.package.items.map((item) => (
                <Text>
                  {item.quantity} x {item.item}
                </Text>
              ))}
            </Box>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              padding={submitted ? 5 : 5}
            >
              <Heading as="h3" size="md" pb={2}>
                Ship the package
              </Heading>
              <ol style={{ paddingLeft: "25px", paddingTop: "5px" }}>
                <li style={{ paddingBottom: "5px" }}>
                  Begin by printing the shipping label.
                </li>
                <li style={{ paddingBottom: "5px" }}>
                  Stick the shipping label on the box.
                </li>
                <li style={{ paddingBottom: "5px" }}>
                  Done! Click the confirm button that shall pop up.
                </li>
              </ol>
              
              <ReactToPrint
                trigger={() => <Button onClick={() => setSubmitted(true)}>Print</Button>}
                content={() => componentRef.current}
              />
              <div style={{ display: "none" }}>
                <ComponentToPrint ref={componentRef} />
              </div>
            </Box>
          </SimpleGrid>

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
