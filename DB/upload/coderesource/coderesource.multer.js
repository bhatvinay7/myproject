const multer = require('multer');
const { diskStorage } = require('multer');

const storage = diskStorage({
    destination: (req, file, cb) => {
        cb(null, './upload/coderesource/codeImage');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now());
    }
});

const upload = multer({ storage: storage });

module.exports = upload;
