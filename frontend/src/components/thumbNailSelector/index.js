import { useRef, useState, useEffect } from "react";

const VideoThumbnailSelector = ({ videoFile, onThumbnailSelect }) => {
  const videoRef = useRef();
  const canvasRef = useRef();
  const [sliderValue, setSliderValue] = useState(0);
  const [duration, setDuration] = useState(0);
  const [videoSrc, setVideoSrc] = useState(null);
  const [thumbnail, setThumbnail] = useState(null)
  // console.log('videovideovideovideovideovideo', videoFile

  useEffect(() => {
    if (videoFile) {
        const objUrl = URL.createObjectURL(videoFile);
        const video = videoRef.current;

        video.src = objUrl;
        video.onloadedmetadata = () => {
            setDuration(video.duration)
            captureFrame(0)
        }
        return ()=> {
            URL.revokeObjectURL(objUrl);
        }
    }
  }, [videoFile]);

  const captureFrame = (time) => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    
    if (video && canvas) {
        video.currentTime = time;
        video.onseeked = () => {
            const ctx = canvas.getContext("2d");
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const frameData = canvas.toDataURL("image/png");
            setThumbnail(frameData)
            onThumbnailSelect(frameData);
        }
    }
  };

  const handleSliderChange = (e) => {
    const value = e.target.value;
    setSliderValue(value);
    captureFrame(value)
  };

  return (
    <>
      {videoFile && (
        <div>

          <input
            type="range"
            min="0"
            max={duration || 0}
            step="0.1"
            value={sliderValue}
            onChange={handleSliderChange}
          />
          {thumbnail && <img src={thumbnail} alt='thumbnail'></img>}
          <button onClick={captureFrame}>Select Thumbnail</button>

          <canvas ref={canvasRef} style={{ display: "none" }} />
          <video ref={videoRef} style={{display: 'none'}} />
        </div>
      )}
    </>
  );
};

export default VideoThumbnailSelector;
