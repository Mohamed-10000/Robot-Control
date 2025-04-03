import React, { useRef, useEffect, useState, useCallback } from 'react';
import '../styles/VideoFeed.css';

const VideoFeed = ({ mapMode }) => {
  const videoRef = useRef(null);
  const [cameraError, setCameraError] = useState(null);

  const connectWebRTCCamera = useCallback(async () => {
    try {
      const videoElement = videoRef.current;
      if (!videoElement) return null;

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: 'environment'
        }
      });

      videoElement.srcObject = stream;
      setCameraError(null);
      return stream;
    } catch (err) {
      console.error("WebRTC Camera Error:", err);
      setCameraError("Could not access camera");
      return null;
    }
  }, []);

  useEffect(() => {
    if (mapMode !== 'Camera') return;

    let stream = null;
    const videoElement = videoRef.current; // Capture current ref value

    const setupCamera = async () => {
      stream = await connectWebRTCCamera();
    };

    setupCamera();

    return () => {
      // Use the captured videoElement and stream
      if (videoElement?.srcObject) {
        videoElement.srcObject.getTracks().forEach(track => track.stop());
        videoElement.srcObject = null;
      }
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [mapMode, connectWebRTCCamera]);

  return (
    <div className="video-feed-container">
      {mapMode === 'Camera' ? (
        <>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="live-feed"
            onError={() => setCameraError("Video playback failed")}
          />
          {cameraError && (
            <div className="camera-error">
              {cameraError}
              <button onClick={connectWebRTCCamera}>Retry</button>
            </div>
          )}
        </>
      ) : (
        <div className="map-view">
          <p>{mapMode} Display</p>
        </div>
      )}
    </div>
  );
};

export default VideoFeed;