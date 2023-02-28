"use client";
import { SearchIcon } from "@chakra-ui/icons";
import { MoonIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Box pt={5} shadow="base">
      <Flex justifyContent={"space-around"} alignItems={"center"}>
        <Box>
          <HStack>
            <Image src="/images/Logo.webp" alt="panaverse-logo" />
            <List>
              <HStack
                align={"center"}
                spacing={10}
                ml="40px"
                fontWeight={"bold"}
              >
                <ListItem>Home</ListItem>
                <ListItem>About</ListItem>
                <ListItem>Contact</ListItem>
              </HStack>
            </List>
          </HStack>
        </Box>
        <Box>
          <Flex>
            <Box pl={15} as="span">
              <MoonIcon w={25} h={25} />
            </Box>
            <Box px={15} as="span">
              <SearchIcon w={25} h={25} />
            </Box>
            <Link target={"_blank"} href="https://www.piaic.org/">
            <Button variant={"outline"}>Go to PIAIC</Button>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
