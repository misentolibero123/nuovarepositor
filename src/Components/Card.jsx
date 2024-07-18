import { Box } from "@chakra-ui/react";

const Card = ({ children, ...props }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Card;
