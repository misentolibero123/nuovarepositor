import { Input as ChakraInput, FormControl, FormLabel } from "@chakra-ui/react";

const Input = ({ label, ...props }) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <ChakraInput {...props} />
    </FormControl>
  );
};

export default Input;
