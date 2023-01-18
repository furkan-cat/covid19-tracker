import { Button, Container, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { routes } from "../utils/constants";

/**
 * 
@return - Returns error text when occur any of error on fetching proccess
*/

export default function ErrorBoundary() {
  const { total, stats } = useSelector((state) => state.country);
  const navigate = useNavigate();

  return (
    <Container mt={5}>
      <Stack direction="column">
        <Text>
          There is a problem with data fetching or with your connection. Please
          go back to the home page to try again.
        </Text>
        <Button onClick={() => navigate(routes.home)}>Go Home</Button>
      </Stack>
    </Container>
  );
}
