// import { Link } from "react-router-dom";
// import { Box, ButtonGroup, Flex, Heading, Spacer } from "@chakra-ui/react";
// import { Button } from "@chakra-ui/react";
// import { Text } from "@chakra-ui/react";
// import { AiOutlineHistory } from "react-icons/ai";

// export default function Nav() {
//   return (
//     <>
//       <Flex
//         px={4}
//         py={5}
//         bg="#4094EC"
//         color="#fff"
//         minWidth="max-content"
//         alignItems="center"
//         gap="2"
//       >
//         <Box>
//           <Heading size="md">
//             <Link to="/">YT Video Downloader</Link>
//           </Heading>
//         </Box>
//         <Spacer />
//         <ButtonGroup marginRight={8} gap={3} alignItems="center">
//           <Link to="/" fontSize="md">
//             <Text fontSize="md"> Home </Text>
//           </Link>
//           <Link to="/about">
//             <Text fontSize="md"> About </Text>
//           </Link>
//         </ButtonGroup>
// <ButtonGroup alignItems="center">
//   <Button colorScheme="yellow" alignItems="center" gap={1}> <AiOutlineHistory/> History</Button>
// </ButtonGroup>
//       </Flex>
//     </>
//   );
// }

import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4} boxShadow="base">
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={
              isOpen ? (
                <AiOutlineClose style={{ display: "unset" }} />
              ) : (
                <AiOutlineMenu style={{ display: "unset" }} />
              )
            }
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            height={16}
            alignItems={"center"}
            width={"100%"}
            display={{ md: "flex" }}
            justifyContent={"space-between"}
          >
            <Box>
              <Heading size="md">
                <Link to="/">
                  YT Video{" "}
                  <span style={{ color: "#E53E3E" }}> Downloader </span>
                </Link>
              </Heading>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              justifyContent={"space-between"}
              display={{ base: "none", md: "flex" }}
            >
              <Link to="/" fontSize="md">
                <Text fontSize="md"> Home </Text>
              </Link>
              <Link to="/about">
                <Text fontSize="md"> About </Text>
              </Link>
              <Link to="/history">
                <Text fontSize="md"> History </Text>
              </Link>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}></Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link to="/" fontSize="md">
                <Text fontSize="md"> Home </Text>
              </Link>
              <Link to="/about">
                <Text fontSize="md"> About </Text>
              </Link>
              <Link to="/history">
                <Text fontSize="md"> History </Text>
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
