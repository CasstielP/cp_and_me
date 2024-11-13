const express = require('express')

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Video, User } = require('../../db/models');

const { check } = require('express-validator');
const { handleValidationErrxors } = require('../../utils/validation');
const multer = require('multer')
const s3 = require('../../config/aws-config')
const router = express.Router();


//Multer configuration for temporary storage
const   upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 10000 * 1024 * 1024 }   
});

const validateUploadVideo = [
    check('title')
        .exists({checkFalsy: true})
        .withMessage('Please provide a title'),
    check('description')
        .exists({checkFalsy: true})
        .withMessage('Please provide a valid description')
]

router.post('/upload', upload.single('video'), 
validateUploadVideo,
async (req, res) => {
    try{
        const {title, description, userId} = req.body;
        const file = req.file
        
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `videos/${Date.now()}-${file.originalname}`, // Unique file name with timestamp
            Body: file.buffer,
            ContentType: file.mimetype,
        }

        const s3Response = await s3.upload(params).promise()

        const video = await Video.create({
            userId,
            title,
            description,
            videoUrl: s3Response.Location, // URL returned from S3
          });

          res.status(201).json({
            message: 'Video uploaded successfully.',
            video,
          })
    } catch (error) {
        console.error('Error uploading video:', error);
        res.status(500).json({ message: 'An error occurred while uploading the video.' });
    }
})


//upload videos

//fetch all videos
router.get('/',  async (req, res) => {
    const Videos = await Video.findAll()
    res.json({
     Videos
    })
})
//display user videos



module.exports = router
// module.exports = upload