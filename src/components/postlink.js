import * as React from "react";
import { Link } from "gatsby";
import { Box, Text } from "@chakra-ui/react";

const PostLink = ({ slug, title, date, excerpt }) => {
  return (
    <Box mb={6}>
      <Text fontSize="xl" fontWeight="semibold" mb={2}>
        <Link to={`/posts/${slug}`}>{title}</Link>
      </Text>
      <Text fontSize="sm" color="gray.500" mb={1}>
        Posted: {date}
      </Text>
      <Text>{excerpt}</Text>
    </Box>
  );
};

export default PostLink;
