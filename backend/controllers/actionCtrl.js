const ytdl = require("ytdl-core");

const actionCtrl = {
  fetchVideoInfo: async (req, res) => {
    try {
      const { videoURL } = req.body;
      console.log(req.body);
      if (!videoURL)
        return res.status(400).json({ message: "All fields require" });

      const videoINFO = await ytdl.getInfo(videoURL);
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

  downloadVideo: () => {},
};

module.exports = actionCtrl;
