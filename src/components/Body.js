import {
  Box,
  Flex,
  Heading,
  Input,
  Select,
  Text,
  useColorModeValue,
  Grid,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

// const data = {
//   imageURL:
//     "https://i.ytimg.com/vi/rDdWkKg3-Ms/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjjamaqeCJeTXSVFnfoMliLVRMbA",
//   name: "SC का बड़ा आदेश - Hindu Muslim पर भड़काऊ बयान दिया, तो आपके साथ ये होगा! The Lallantop Show",
// };

const Body = () => {
  const [videoURL, setvideoURL] = useState("");
  const [data, setData] = useState();
  const [formats, setFormats] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const data = await axios.get(
        `/action/fetchVideoInfo?URL=${videoURL}/`,
        config
      );
      console.log(data);
      setFormats(data.data.formats);
      setData(data);
    } catch (error) {
      // @ts-ignore
      console.log(error.response);
    }
  };

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

        <form style={{ marginTop: "1rem" }} onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Please paste your link here!"
            w={"100%"}
            value={videoURL}
            onChange={(e) => setvideoURL(e.target.value)}
          />
          <Select placeholder="Select quality" my={5}>
            {formats.map(
              (format) =>
                format.mimeType.includes("video/mp4") && (
                  <option> {format.qualityLabel} </option>
                )
            )}
          </Select>
          <Button colorScheme="red" w={"100%"} onClick={handleSubmit}>
            Download
          </Button>
        </form>
      </Box>

      <Grid templateColumns="repeat(5, 1fr)" gap={7} margin={10} py={10}>
        {!data ? (
          "Nothing found"
        ) : (
          <Box
            // bg={useColorModeValue("white", "gray.800")}
            maxW="sm"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative"
          >
            <Image
              // @ts-ignore
              src={data.data.videoDetails.thumbnails[3].url}
              alt={`Picture of ${data}`}
              roundedTop="lg"
            />
            <Box p="6">
              <Flex mt="1" justifyContent="space-between" alignContent="center">
                <Box
                  fontSize="lg"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  // isTruncated
                >
                  {/* @ts-ignore */}
                  {data.data.videoDetails.title}
                </Box>
              </Flex>
              <Button colorScheme="red" w={"100%"} marginTop={4}>
                Download
              </Button>
            </Box>
          </Box>
        )}
      </Grid>
    </>
  );
};

export default Body;
