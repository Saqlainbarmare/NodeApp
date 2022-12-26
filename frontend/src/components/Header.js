import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Flex, Heading, Link } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      py="6"
      px="6"
      bgColor="gray.800"
      w="100%"
      top="0"
      pos="fixed"
      zIndex="2"
    >
      <Flex align="center" mr="5">
        <Heading
          as="h1"
          color="whiteAlpha.800"
          fontWeight="bold"
          size="md"
          letterSpacing="md"
        >
          <Link
            as={RouterLink}
            to="/"
            _hover={{ color: "gray.500", textDecor: "none" }}
          >
            Product Store
          </Link>
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Header;
