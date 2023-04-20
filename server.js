const { raw } = require('body-parser');
const express = require('express');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg')
ffmpeg.setFfmpegPath(ffmpegPath);

const PORT = process.env.PORT || 5025;
const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const rawPath = `../../Downloads/NSF_Prelim_Test_Videos`
const videoName = '643de56eae3ae6c524b7ba9f'
const finalPath = `${rawPath}/${videoName}.mov`
var video = `${rawPath}/Original_MP4s/${videoName}.mp4`

const conversion = ffmpeg(video).format('mov')
conversion.save(finalPath)
// console.log((video))