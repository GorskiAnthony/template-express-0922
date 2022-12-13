const router = require("express").Router();

const VracController = require("./controllers/VracController");

router.post("/post", VracController.post);
router.get("/get", VracController.get);
router.put("/put", VracController.put);
router.delete("/delete", VracController.delete);

module.exports = router;
