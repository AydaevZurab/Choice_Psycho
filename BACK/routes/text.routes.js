const { Router } = require('express');
const { textController } = require('../controllers/text.controller');
const router = Router();

router.get('/text', textController.getText);
router.post('/text', textController.addText);

module.exports = router;