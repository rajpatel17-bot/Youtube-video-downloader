const { filter } = require("@chakra-ui/react");
const ytdl = require("ytdl-core");

const actionCtrl = {
  fetchVideoInfo: async (req, res) => {
    try {
      const { URL } = req.query;
      if (!URL)
        return res.status(400).json({ message: "All fields required" });
      
      const videoINFO = await ytdl.getInfo(URL);
      if (videoINFO) {
        res.status(200).json(videoINFO);
      } else {
        return res.status(404).json({ message: "Invalid link" });
      }
    } catch (error) {
      console.log(error.messege);
      return res.status(500).json({ message: error.message });
    }
  },

  downloadVideo: async (req, res) => {
    try {
      const { videoURL, itag } = req.query;
      res.header("Content-Disposition", `attachment; filename="video.mp4"`);
      // ytdl(videoURL).pipe(res);
      const info = await ytdl.getInfo(videoURL);
      let format = ytdl.chooseFormat(info.formats, { quality: itag });
      console.log("Format found!", format);
      res.status(200).json(format);

    } catch (error) {
      console.log(error.message);
    }
  },
};

module.exports = actionCtrl;
