// multerConfig.js
const multer = require('multer');
const path = require('path');

// Set The Storage Engine For file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/'); // uploads folder
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); // file name
    },
});

// File filter to only accept certain file types (images)
const fileFilter = (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (ext === '.png' || ext === '.jpg' || ext === '.gif' || ext === '.jpeg') {
        return cb(null, true);
    } else {
        return cb(new Error('Only images are allowed'));
    }
};

// limit file size to 5mb per image
const limits = {
    fileSize: 1024 * 1024 * 5,
};

// Set up multer middleware for file upload
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: limits,
});