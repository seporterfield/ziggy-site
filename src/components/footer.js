import * as React from "react";
import { Box, Text } from "@chakra-ui/react";

const ZiggyFooter = () => {
  return (
    <Box bg="gray.900" py="4" px="6" mt="8" as="footer">
      <Text color="white" fontSize="sm" textAlign="center">
        Site built with React using Gatsby, Chakra UI, and Tailwind CSS by Siegfried Porterfield © {new Date().getFullYear()}
      </Text>
    </Box>
  );
};

export default ZiggyFooter;
