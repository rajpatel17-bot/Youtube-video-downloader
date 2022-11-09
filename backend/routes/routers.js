const router = require("express").Router();
const actionCtrl = require("../controllers/actionCtrl");

router.get("/fetchVideoInfo/", actionCtrl.fetchVideoInfo);
router.get("/downloadVideo", actionCtrl.downloadVideo);
// router.post("/playlist", actionCtrl.playlist);

module.exports = router;
