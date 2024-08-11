const { readFileSync, promises } = require('fs');
const { join } = require('path');
const Events = require('../models/event.model.js');

const getEvents = async (req, res) => {
    try {
        const EventList = await Events.find();
        res.status(200).json(EventList);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getEvent = async (req, res) => {
    try {
        const getEventinfo = await Events.findById(req.params.id);
        res.status(200).json(getEventinfo);
    } catch (err) {
        res.status(500).json({ message: 'Not found' });
    }
};

const postEvent = async (req, res) => {
    try {
        const event = new Events({
            name: req.body.name,
            img: {
                data: readFileSync('./upload/eventImage/eventphotos/' + req.file.filename),
                contentType: 'image/png',
            },
            information: req.body.information,
            coordinators: req.body.coordinators,
            type: req.body.type,
            organiser: req.body.organiser,
            place: req.body.place,
            date: new Date(req.body.date),
            exp: req.body.exp,
        });
        event.save()
            .then((event) => {
                res.status(200).json(event);
            })
            .catch((err) => {
                res.status(500).json({ message: err.message });
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateEvent = async (req, res) => {
    try {
        const id = req.params.id;
        if (!req.file) {
            return res.status(400).json({ message: 'No image uploaded' });
        }

        const imgData = {
            data: await promises.readFile(join('./upload/eventImage/eventphotos/', req.file.filename)),
            contentType: 'image/png',
        };

        const event = await Events.findByIdAndUpdate(id, { img: imgData });

        if (!event) {
            return res.status(404).json({ message: 'Current event not found' });
        }

        const updatedEvent = await Events.findById(req.params.id);
        res.status(200).json({ message: 'Image updated', event: updatedEvent });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const event = await Events.findByIdAndDelete(id);
        if (!event) {
            return res.status(404).json({ message: 'Current event not found' });
        }
        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getEvents, getEvent, postEvent, updateEvent, deleteEvent };
