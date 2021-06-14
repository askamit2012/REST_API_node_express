const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
// const awsConfig = require("../awsConfig.json");
// const s3 = new aws.S3();
require("dotenv").config();
const path = require("path");
const s3 = new aws.S3({
  accessKeyId: process.env.AWSAccessKeyId,
  secretAccessKey: process.env.AWSSecretKey,
});

// aws.config.loadFromPath("./awsConfig.json");
// aws.config.update(awsConfig);
// const params = {
//   Bucket: "myfirstbucket00000",
//   CreateBucketConfiguration: {
//     // Set your region here
//     LocationConstraint: "eu-west-1",
//   },
// };

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
  }
};

const upload = multer({
  fileFilter,
  storage: multerS3({
    acl: "public-read-write",
    s3,
    bucket: "myfirstbucket00000",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + "-" + file.originalname);
    },
  }),
});

module.exports = upload;
