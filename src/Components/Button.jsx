import React from "react";
import { Box, Text } from "@chakra-ui/react";
const Button = (props) => {
  const { name, value, onClick, data, error } = props;
  const isValueInData = data.includes(value);
  return (
    <Box
      as="button"
      minHeight={25}
      lineHeight="1.2"
      border="1px"
      borderRadius="20px"
      mx={1}
      my={0.5}
      borderColor={data.length == 0 && error ? "red" : "#ccd0d5"}
      color={isValueInData ? "green" : "#818181"}
      bg={isValueInData ? "green" : ""}
      _hover={{ bg: "green" }}
      onClick={onClick}
    >
      <Box px={1.5}>
        <Text
          fontSize={"xs"}
          color={isValueInData ? "#fff" : ""}
          _hover={{ color: "#fff" }}
        >
          {" "}
          {name}
        </Text>
      </Box>
    </Box>
  );
};

export default Button;
