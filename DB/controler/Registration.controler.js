const Reg = require('../models/Registration.model.js');

const postParticipentsDetails = async (req, res) => {
    try {
        const participentsDetails = new Reg(req.body);
        await participentsDetails.save()
            .then((savedDetails) => {
                console.log(true);
                res.status(201).json(savedDetails);
            });
    } catch (err) {
        res.status(500).json({ message: "Try again, some problem occurred" });
    }
};

const getParticipentsDetails = async (req, res) => {
    try {
        const participentsDetails = await Reg.find({ eventType: req.body.eventType });
        res.status(200).json(participentsDetails);
    } catch (err) {
        res.status(500).json({ message: "Unable to fetch data, try again..!" });
    }
};

module.exports = { postParticipentsDetails, getParticipentsDetails };
