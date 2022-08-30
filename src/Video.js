import { forwardRef, useImperativeHandle, useRef } from "react"
import video1 from "./videos/video1.mp4"

function Video(props, ref) {
    const videoRef = useRef()
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))
    return (
        <div>
            <video 
                ref={videoRef}
                src={video1}
                width={400}
                controls
            />
        </div>
    )
}

export default forwardRef(Video)