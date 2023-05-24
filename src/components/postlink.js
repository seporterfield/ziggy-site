import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const PostLink = ({ slug, title, date, excerpt, image }) => {
  const postImage = getImage(image);

  return (
    <Flex alignItems="center" my="6">
      <Box mr="4">
        <Link to={`/posts/${slug}`}>
          <GatsbyImage image={postImage} alt={title} />
        </Link>
      </Box>
      <Box>
        <Heading as="h2" size="xl" fontWeight="bold">
          <Link to={`/posts/${slug}`}>{title}</Link>
        </Heading>
        <Text fontSize="sm" color="gray.500">
          {date}
        </Text>
        <Text>{excerpt}</Text>
      </Box>
    </Flex>
  );
};

export default PostLink;
