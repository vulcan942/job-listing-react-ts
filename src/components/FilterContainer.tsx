import React from "react";
import { Box, Tag, Flex, Link } from "@chakra-ui/react";
const FilterContainer = ({
  filters,
  clearHandler,
}: {
  filters: string[];
  clearHandler: any;
}) => {
  return (
    <Box
      w="80%"
      p={8}
      borderRadius={"4px"}
      bg="white"
      boxShadow={"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);"}
    >
      <Flex flexDirection={"row"} justifyContent={"space-between"}>
        <div>
          {filters.map((filter, index) => (
            <Tag
              key={index}
              size="lg"
              mx={2}
              variant="subtle"
              colorScheme="cyan"
            >
              {filter}
            </Tag>
          ))}
        </div>
        {filters.length ? (
          <Link onClick={clearHandler} color={"teal"} fontWeight={"500"}>
            Clear
          </Link>
        ) : null}
      </Flex>
    </Box>
  );
};
export default FilterContainer;
