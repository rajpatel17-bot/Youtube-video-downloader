const { log } = require("console");
const ytdl = require("ytdl-core");

const actionCtrl = {
  fetchVideoInfo: async (req, res) => {
    try {
      const { URL } = req.query;
      if (!URL) return res.status(400).json({ message: "All fields required" });

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

  getDownloadInfo: async (req, res) => {
    try {
      const { videoURL, itag } = req.query;
      res.header("Content-Disposition", `attachment; filename="video.mp4"`);
      const info = await ytdl.getInfo(videoURL);
      let format = ytdl.chooseFormat(info.formats, { quality: itag });
      let audioFormats = ytdl.filterFormats(info.formats, "audioonly");
      // console.log("Format found!", format);
      res.status(200).json({ format: format, audio: audioFormats });
    } catch (error) {
      console.log(error.message);
    }
  },

  mergeAudioVideo: async (req, res) => {
    try {
      const { audioURL, videoResURL } = req.body;
      const { exec } = require("child_process");
      const ffmpeg = require("ffmpeg");

      let output = 'output.mp4';

      let resp = exec(`ffmpg -safe 0 -f -i ${audioURL} -i ${videoResURL} -c:v copy -c:a aac -map 0:v -map 1:a ${output}`);

      console.log(output);

      return res.status(200).json(resp);

      // console.log(audioURL);
      // console.log(videoResURL);
      
    } catch (error) {
      console.log(error.message);
    }
  },
};

module.exports = actionCtrl;
