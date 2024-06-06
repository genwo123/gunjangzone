export function captureScreen(videoRef, canvasRef, setCanvasDimensions) {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    ctx.drawImage(video, 0, 0);

    setCanvasDimensions({
        width: '100%',
        maxWidth: '100%',
        display: 'block'
    });
}
