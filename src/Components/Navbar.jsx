import { Box, Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>Logo</Box>
        <Flex alignItems="center">
          <NextLink href="/" passHref>
            <Link px={2} py={1} rounded={"md"} _hover={{ bg: "teal.700" }}>
              Home
            </Link>
          </NextLink>
          <NextLink href="/about" passHref>
            <Link px={2} py={1} rounded={"md"} _hover={{ bg: "teal.700" }}>
              About
            </Link>
          </NextLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
