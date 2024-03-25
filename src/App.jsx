import React, { useState } from "react";
import { ArrowBackIcon, StarIcon } from "@chakra-ui/icons";
import { Flex, Spacer } from "@chakra-ui/react";

import {
  ChakraProvider,
  Heading,
  Image,
  Box,
  Button,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import theme from "./theme";
import GroupButtons from "./Components/Button";
import RateExperience from "./Components/RateExperience";
import ContainerUpdate from "./Components/ContainerUpdate";
import {
  FormControl,
  FormLabel,
} from '@chakra-ui/react'

const App = () => {
  const [data, setData] = useState();
  const [like, setLike] = useState([]);
  const [rating, setRating] = useState();
  const [error, setError] = useState(false);

  const Buttons = [
    { label: "Polite attitude", value: 1 },
    { label: "Fast Service", value: 2 },
    { label: "Friendliness", value: 3 },
    { label: "Professionalism", value: 4 },
    { label: "Cleanliness", value: 5 },
    { label: "Accuracy", value: 6 },
  ];

  const handleClick = (value) => {
    if (like.includes(value)) {
      setLike((prevState) => prevState.filter((item) => item !== value));
    } else {
      setLike((prevState) => [...prevState, value]);
    }
  };

  const filteredButtons = Buttons.filter((button) =>
    like.includes(button.value)
  );
 
  const handleSubmit = () => {
    if(!rating|| like.length == 0 || !data ){
      setError(true)
    }else{
      console.log({WhatYouLike : filteredButtons, TellUsMore : data, Experience: rating})
    }
  }
  
  return (
    <ChakraProvider theme={theme}>
      <ContainerUpdate bg>
        <Flex color="#515863">
          <Box>
            <ArrowBackIcon boxSize={7} />
          </Box>
          <Box px={5}>
            <Text>Pay Tip</Text>
          </Box>
        </Flex>
        <Flex color="#515863" pb="4">
          <Flex>
            <Box>
              <Image
                borderRadius="full"
                boxSize="90px"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
            </Box>
            <Box pl="4" pt="4">
              <Heading noOfLines={1} size="md">
                John Doe
              </Heading>
              <Text fontSize="xs">Manager</Text>
              <Text as="i" fontSize="xs">
                "Happy To Work Here
              </Text>
            </Box>
          </Flex>
          <Spacer />
          <Box pl="5" pt="4">
            <Flex>
              <Heading>4.5</Heading>
              <Icon as={StarIcon} pl="2" pt="2" color="gold" boxSize={7} />
            </Flex>
            <Text color="#7396ae" as="b" fontSize={"sm"}>
              273 Reviews
            </Text>
          </Box>
        </Flex>
      </ContainerUpdate>
      <FormControl 
      >
      <RateExperience number = {rating} setNumber={setRating} error={error}/>

      <ContainerUpdate pt="4">
        <Box bg="#ffff" p={3.5}>
          <Box p={2}>
            <FormLabel fontSize="sm">What did you Like ?</FormLabel>
          </Box>
          <Box>
            {Buttons.map((button) => (
              <GroupButtons
                name={button.label}
                value={button.value}
                error={error}
                data={like}
                onClick={() => handleClick(button.value)}
              />
            ))}
          </Box>
        </Box>
      </ContainerUpdate>

      <ContainerUpdate pt="4">
        <Box bg="#ffff" p={3.5}>
          <Text fontSize="sm">Tell Us more(optional)</Text>
          <Textarea
            h={120}
            value={data}
            isInvalid = {!data&& error ? true :false}
            onChange={(e) => setData(e.target.value)}
          />
        </Box>
      </ContainerUpdate>

      <ContainerUpdate pt="4">
        <Button
          bg="#dde3e8"
          size="md"
          color={"#67686f"}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </ContainerUpdate>
      </FormControl>
    </ChakraProvider>
  );
};

export default App;
