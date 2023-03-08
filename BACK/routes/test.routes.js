const { Router } = require("express");
const { testController } = require("../controllers/tests.controller");
const router = Router();

router.get("/test", testController.getTest);
router.post("/test", testController.addTest);

module.exports = router;
