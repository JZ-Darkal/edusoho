<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>视频播放</title>
    <link href="http://edusoho.darkal.cn/video/video.css" rel="stylesheet">
    <script src="http://edusoho.darkal.cn/video/videojs.js"></script>
    <style>
        html,body,.video-js{
            height:100%;
            width:100%;
            margin:0;
            padding:0;
            box-sizing:border-box;
        }
    </style>
</head>
<body>
    <video id='example-video' width height class="video-js vjs-default-skin" controls>
        <source src="<?php echo $_GET['src'] ?>" type="application/x-mpegURL">
    </video>
    <script src="https://vjs.zencdn.net/7.0.5/video.js"></script>
    <script>
        var player = videojs('example-video');
        player.play();
    </script>
</body>
</html>