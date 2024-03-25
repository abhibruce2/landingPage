import React from "react";
import { Container, Stack } from "@chakra-ui/react";

const ContainerUpdate = (props) => {
  return (
    <Container pt="4" style={props.bg ? { backgroundColor: "#e6eeff" }: {}}>
      <Stack>
       {props.children}
      </Stack>
    </Container>
  );
};

export default ContainerUpdate;
