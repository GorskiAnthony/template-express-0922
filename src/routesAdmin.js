const router = require("express").Router();

const AdminController = require("./controllers/AdminController");

const adminMiddleware = require("./middleware/adminMiddleware");

// -> /api/admin/login
router.post("/login", AdminController.login);

router.post("/post", adminMiddleware, AdminController.post);
router.get("/get", adminMiddleware, AdminController.get);
router.put("/put", adminMiddleware, AdminController.put);
router.delete("/delete", adminMiddleware, AdminController.delete);

module.exports = router;
