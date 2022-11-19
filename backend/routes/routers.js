const router = require("express").Router();
const actionCtrl = require("../controllers/actionCtrl");

router.get("/fetchVideoInfo", actionCtrl.fetchVideoInfo);
router.get("/getDownloadInfo", actionCtrl.getDownloadInfo);
router.post("/mergeAudioVideo", actionCtrl.mergeAudioVideo);
// router.post("/playlist", actionCtrl.playlist);

module.exports = router;
