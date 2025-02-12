// cloudinary import and configuration
const cloudinary = require('cloudinary').v2;


cloudinary.config({
    cloud_name: 'djeqhtxdt', //enter your cloud name
    api_key: '686795812425125', //enter your api_key
    api_secret: 'BpTpMtvQ5jyAIK195fG5Itz_-cQ', //enter your api_secret
    secure: true
  });
   
   
  module.exports = cloudinary