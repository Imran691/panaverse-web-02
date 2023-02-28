"use client";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
// import Link from "next/link";

export default function TopContainer() {
  return (
    <Box backgroundImage={"/images/bg.webp"} backgroundSize={"contain"} py={20}>
      <HStack>
        <Box w={"50%"} color="white" pl={"44"}>
          <Heading fontSize={60}>Build your next idea even faster</Heading>
          <Text lineHeight={8}>
            One Year Panaverse DAO Earn as you Learn Program. Consolidating Web
            3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and
            Ambient Computing/IoT Technologies
          </Text>
          <Box mt={5}>
            <Button colorScheme={"blue"} mr={"5"}>
              Buy now
            </Button>
            <Button colorScheme={"blue"}>Veiw Components</Button>
          </Box>
          <Flex alignItems={"center"}>
            <AvatarGroup size="md" max={4} mt={5}>
              <Avatar
                name="Zia Khan"
                src="https://pbs.twimg.com/profile_images/1478630664190795778/xuBHOC65_400x400.jpg"
              />
              <Avatar
                name="Adil Altaf"
                src="https://avatars.githubusercontent.com/u/62209503?v=4"
              />
              <Avatar
                name="Ovais Ali"
                src="https://chakrademosite-ows-ali.vercel.app/me.jpg"
              />
              <Avatar name="Imran" src="/images/picme.jpeg" />
              <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            </AvatarGroup>
            <Text pt={5} ml={4}>
              Tutorial by:{" "}
              <Link
                color={"blue.300"}
                target={"_blank"}
                href={"https://www.youtube.com/@owaisali124"}
              >
                Ovais Ali
              </Link>{" "}
              & Created by: <Link color={"blue.300"}
                target={"_blank"}
                href={"https://github.com/Imran691"}>M. Imran</Link>
            </Text>
          </Flex>
        </Box>
        <Box w={"50%"}>
          <Image src="/images/banner.png" alt="Pic1" />
        </Box>
      </HStack>
    </Box>
  );
}
