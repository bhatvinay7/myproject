const express = require('express');
const { getEvents, getEvent, postEvent, updateEvent, deleteEvent } = require('../controler/event.controler.js');
const  upload  = require('../upload/eventImage/eventImage.multer.js');
const router = express.Router();

router.get('/', getEvents);
router.get('/:id', getEvent);
router.post('/', upload.single("Image"), postEvent);
router.patch('/:id', upload.single("Image"), updateEvent);
router.delete('/:id', deleteEvent);

module.exports = router;
