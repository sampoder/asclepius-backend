import { useRouter } from "next/router";
import { useState, useRef } from "react";
import Head from "next/head";
import {
  Container,
  Center,
  Code,
  Heading,
  Text,
  Box,
  Form,
  FormControl,
  FormLabel,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Input,
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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/core";

const Home = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    window.open("about:blank", "_self");
    window.close();
  };
  const cancelRef = useRef();
  return (
    <>
      <Head>
        <title>Asclepius Data Collection</title>
      </Head>

      <Container maxW="xl" pt={100}>
        <Heading pb={6}>🩺 Data Collection</Heading>
        <Text pb={18}>
          Thank you for using a Asclepius package, please submit you data.
        </Text>
        <form>
          <FormControl id="heart-rate" isRequired pb={18}>
            <FormLabel>Heart Rate (BPM)</FormLabel>
            <NumberInput>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl id="blood-pressure" isRequired pb={18}>
            <FormLabel>Blood Pressure (mmHg)</FormLabel>
            <NumberInput>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl id="temperature" isRequired pb={18}>
            <FormLabel>Temperature (℃)</FormLabel>
            <NumberInput>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <Button
            colorScheme="teal"
            variant="outline"
            onClick={() => setIsOpen(true)}
          >
            Submit
          </Button>
        </form>
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
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Submit Form
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="green" onClick={onClose} ml={3}>
                Submit
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
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
