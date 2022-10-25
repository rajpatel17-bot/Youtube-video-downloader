const router = require("express").Router();
const actionCtrl = require("../controllers/actionCtrl");

router.get("/fetchVideoInfo", actionCtrl.fetchVideoInfo);
router.post("/downloadVideo", actionCtrl.downloadVideo);
// router.post("/signup", actionCtrl.playlist);

module.exports = router;
