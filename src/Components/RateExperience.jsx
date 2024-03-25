import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { Flex, Box, Text, Container, Icon } from '@chakra-ui/react';
import {  StarIcon } from "@chakra-ui/icons";

const RateExperience = (props) => {
  const {number, setNumber, error} = props
  const [rating, setRating] = useState();
  
  const handleStarClick = (index) => {
    if(index == number){
      setNumber(-1);
    }else{
      setNumber(index);
    }
  };
  return (
    <Container pt="4">
      <Flex bg="#ffff" p={5}>
        <Box>
          <Text fontSize="sm">Rate your experience</Text>
          <Box pt="2">
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={index <= rating ? solidStar : regularStar}
                size="lg"
                color={"gold"}
                onMouseOver={() => setRating(index )}
                onMouseLeave={() => setRating(number)}
                onClick={() => handleStarClick(index)}
                style={{ cursor: 'pointer', padding: 5 }}
              />
            ))}
          </Box>
          {error && !number && <Text fontSize={'xs'} color={'red'}>Rate the Experience</Text>}
        </Box>
        <Box ml="auto" p="4">
          <Icon as={StarIcon} color="gold" boxSize={50} />
        </Box>
      </Flex>
    </Container>
  );
};

export default RateExperience;
