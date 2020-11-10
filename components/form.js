import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Text
} from "@chakra-ui/core";

const Form = ({ errorMessage, onSubmit }) => (
  <>
    <form onSubmit={onSubmit}>
      <FormControl>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input type="email" id="email" aria-describedby="email-helper-text" />
        <FormHelperText id="email-helper-text">
          {!errorMessage && (
            <Text>
              Please ensure you have access to this email, you will receive a
              magic link to sign in.
            </Text>
          )}
          {errorMessage && <Text color="tomato">{errorMessage}</Text>}
        </FormHelperText>
        <Button mt={4} colorScheme="blue" type="submit">
          Log in
        </Button>
      </FormControl>
    </form>
  </>
);

export default Form;
