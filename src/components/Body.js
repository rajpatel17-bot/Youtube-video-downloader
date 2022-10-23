import {
  Box,
  Flex,
  FormControl,
  Heading,
  Input,
  Select,
  Text,
  useColorModeValue,
  Grid,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const data = {
  imageURL:
    "https://i.ytimg.com/vi/rDdWkKg3-Ms/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjjamaqeCJeTXSVFnfoMliLVRMbA",
  name: "SC का बड़ा आदेश - Hindu Muslim पर भड़काऊ बयान दिया, तो आपके साथ ये होगा! The Lallantop Show",
};

const Body = () => {
  return (
    <>
      <Flex id="Body" alignItems="center" justifyContent="center" padding={5}>
        <Box flex="1" display={{ md: "flex" }} justifyContent="center">
          <Image
            boxSize="25rem"
            alignItems={"center"}
            src={process.env.PUBLIC_URL + "/assets/bodyImg.png"}
          />
        </Box>
        <Box
          flex="1"
          display={{ md: "flex" }}
          flexDirection="column"
          textAlign={"center"}
          justifyContent="center"
          alignItems={"center"}
        >
          <Heading>
            <Text fontSize="4xl">Welcome To The</Text>
          </Heading>
          <Text fontSize="2xl">
            YT Video <span style={{ color: "#E53E3E" }}> Downloader </span>
          </Text>
          <Text fontSize="lg" my={3} mx={3}>
            The best platform to download a Youtube VIDEOS or PLAYLIST on
            LOW(144px) to HIGH(1080px) resolution for free on just one click. So
            Enjoy!
          </Text>
          <Button colorScheme="red">Download Now</Button>
        </Box>
      </Flex>

      <Box
        boxShadow="2xl"
        p="6"
        rounded="md"
        bg="white"
        w={"80%"}
        margin="auto"
        marginTop={"-10"}
      >
        <Heading size="md" textAlign={"center"}>
          To download your Youtube VIDEOS or PLAYLIST, Please provide the link
          below-
        </Heading>
        <FormControl marginTop={5}>
          <Input
            type="text"
            placeholder="Please paste your link here!"
            w={"100%"}
          />
          <Select placeholder="Select quality" my={5}>
            <option value="option1">144p</option>
            <option value="option2">240p</option>
            <option value="option3">360p</option>
            <option value="option3">480p</option>
            <option value="option3">720p</option>
            <option value="option3">1080p</option>
          </Select>
          <Button colorScheme="red" w={"100%"}>
            Download
          </Button>
        </FormControl>
      </Box>

      <Grid templateColumns="repeat(5, 1fr)" gap={7} margin={10} py={10}>
        <Box
          bg={useColorModeValue("white", "gray.800")}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        >
          <Image
            src={data.imageURL}
            alt={`Picture of ${data.name}`}
            roundedTop="lg"
          />
          <Box p="6">
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="lg"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {data.name}
              </Box>
            </Flex>
            <Button colorScheme="red" w={"100%"} marginTop={4}>
              Download
            </Button>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Body;
