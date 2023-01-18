import React from "react";
import { Center, Stack, Text } from "@chakra-ui/react";
import LeafletMap from "../components/map";


export default function Home() {
  return (
    <>
      <Stack direction={"column"} gap={"4"}>
        <Center px={"10"} bg={"gray.200"}>
          <Text>Covid19 Tracker</Text>
        </Center>
        <LeafletMap />
      </Stack>
    </>
  );
}
