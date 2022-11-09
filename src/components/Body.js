import {
  Box,
  Flex,
  Heading,
  Input,
  Select,
  Text,
  // useColorModeValue,
  Grid,
  Stack,
  Badge,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import qualities from "./videoQuality";

const Body = () => {
  const [videoURL, setvideoURL] = useState("");
  const [data, setData] = useState();
  const [itag, setItag] = useState();
  // const [format, setFormat] = useState();

  const getVideo = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const data = await axios.get(
        `/action/fetchVideoInfo?URL=${videoURL}`,
        config
      );
      console.log(data);
      setData(data);
      // data.data.formats.map((format) => (
      //   console.log(format.itag === itag ? "format.url" : "dd")
      //   // format.itag === itag ? setFormat(format) : setFormat() 
      // ))
      // console.log(format);
    } catch (error) {
      console.log(error.response);
    }
  };

  const selectQuality = async (e) => {
    e.preventDefault();
    setItag(e.target.value);
  };

  const download = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const data = await axios.get(
        `/action/downloadVideo?itag=${itag}&videoURL=${videoURL}`,
        config
      );
      console.log(data.data.url);
      console.log(data);
      // window.location.href = data.data.url;
    } catch (error) {
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

        <form style={{ marginTop: "1rem" }} onSubmit={getVideo}>
          <Input
            type="text"
            placeholder="Please paste your link here!"
            w={"100%"}
            value={videoURL}
            onChange={(e) => setvideoURL(e.target.value)}
          />
          <Select placeholder="Select quality" my={5} onChange={selectQuality}>
            {qualities.map((quality) => (
              <option value={quality.itag}> {quality.qualityLabel} </option>
            ))}
          </Select>
          <Button colorScheme="red" w={"100%"} onClick={getVideo}>
            Get Video
          </Button>
        </form>
      </Box>

      <Grid templateColumns="repeat(5, 1fr)" gap={7} margin={10} py={10}>
        {!data ? (
          "Nothing found"
        ) : (
          <Box
            // bg={useColorModeValue("white", "gray.800")}
            minW="25rem"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative"
          >
            <Image
              src={data.data.videoDetails.thumbnails[3].url}
              alt={`Picture of ${data}`}
              roundedTop="lg"
              w={"full"}
            />
            <Badge variant="solid" colorScheme="cyan" marginLeft={4}>
              {new Date(data.data.videoDetails.lengthSeconds * 1000)
                .toISOString()
                .substring(11, 19)}
            </Badge>
            <Badge
              variant="solid"
              colorScheme="pink"
              marginRight={4}
              float="right"
              marginTop={1}
            >
              <a
                href={data.data.videoDetails.author.user_url}
                target="_blank"
                rel="noreferrer"
              >
                {data.data.videoDetails.author.name}
              </a>
            </Badge>
            <Box p="4" paddingTop={0}>
              <Flex mt="1" justifyContent="space-between" alignContent="center">
                <Box
                  fontSize="lg"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {data.data.videoDetails.title}
                  <Stack direction="row" marginTop={2}>
                    <Badge colorScheme="green" variant="solid">
                      {data.data.videoDetails.uploadDate}
                    </Badge>
                    <Badge colorScheme="red" variant="solid">
                      Views : {data.data.videoDetails.viewCount}
                    </Badge>
                    <Badge colorScheme="purple" variant="solid">
                      {data.data.videoDetails.category}
                    </Badge>
                  </Stack>
                </Box>
              </Flex>
              <Button colorScheme="red" w={"100%"} marginTop={4} onClick={download}>
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
