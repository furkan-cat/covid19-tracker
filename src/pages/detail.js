import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Card,
  CardBody,
  Center,
  Container,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

export default function Detail() {
  const { total, stats } = useSelector((state) => state.country);
  return (
    <Container maxW="container.lg">
      <Card mt={5}>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Center>
              <Heading size="xs" textTransform="uppercase">
                {total.data.location}
              </Heading>
            </Center>
            <Box>
              <Stack direction="row" alignItems="center">
                <Text pt="2" fontSize="sm">
                  Deaths
                </Text>
                <Text pt="2" fontSize="md" fontWeight="semibold">
                  {total.data.deaths}
                </Text>
              </Stack>
              <Stack direction="row" alignItems="center">
                <Text pt="2" fontSize="sm">
                  Confirmed
                </Text>
                <Text pt="2" fontSize="md" fontWeight="semibold">
                  {total.data.confirmed}
                </Text>
              </Stack>
              <Stack direction="row" alignItems="center">
                <Text pt="2" fontSize="sm">
                  Location
                </Text>
                <Text pt="2" fontSize="md" fontWeight="semibold">
                  {total.data.location}
                </Text>
              </Stack>
              <Stack direction="row" alignItems="center">
                <Text pt="2" fontSize="sm">
                  Recovered
                </Text>
                <Text pt="2" fontSize="md" fontWeight="semibold">
                  {total.data.recovered ? total.data.recovered : "null"}
                </Text>
              </Stack>
              <Stack direction="row" alignItems="center">
                <Text pt="2" fontSize="sm">
                  Last Checked
                </Text>
                <Text pt="2" fontSize="md" fontWeight="semibold">
                  {total.data.lastChecked}
                </Text>
              </Stack>
              <Stack direction="row" alignItems="center">
                <Text pt="2" fontSize="sm">
                  Last Reported
                </Text>
                <Text pt="2" fontSize="md" fontWeight="semibold">
                  {total.data.lastReported}
                </Text>
              </Stack>
            </Box>
          </Stack>
        </CardBody>
      </Card>
      <Card mt={5}>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Center>
              <Heading size="xs" textTransform="uppercase">
                Country Details by Province
              </Heading>
            </Center>
            {stats.data.covid19Stats.length > 0 &&
              stats.data.covid19Stats.slice(0, 10).map((item) => (
                <Box key={item.keyId}>
                  <Stack direction="row" alignItems="center">
                    <Text pt="2" fontSize="sm">
                      Province
                    </Text>
                    <Text pt="2" fontSize="md" fontWeight="semibold">
                      {item.province}
                    </Text>
                  </Stack>
                  <Stack direction="row" alignItems="center">
                    <Text pt="2" fontSize="sm">
                      Deaths
                    </Text>
                    <Text pt="2" fontSize="md" fontWeight="semibold">
                      {item.deaths}
                    </Text>
                  </Stack>
                  <Stack direction="row" alignItems="center">
                    <Text pt="2" fontSize="sm">
                      Confirmed
                    </Text>
                    <Text pt="2" fontSize="sm" fontWeight="semibold">
                      {item.confirmed}
                    </Text>
                  </Stack>
                  <Stack direction="row" alignItems="center">
                    <Text pt="2" fontSize="sm">
                      Last Update
                    </Text>
                    <Text pt="2" fontSize="sm" fontWeight="semibold">
                      {item.lastUpdate}
                    </Text>
                  </Stack>
                </Box>
              ))}
          </Stack>
        </CardBody>
      </Card>
    </Container>
  );
}
