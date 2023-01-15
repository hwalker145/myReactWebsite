import React from "react";
import { Image as BootImage } from "react-bootstrap";

interface ImageProps {
    filelink: string
    height?: number
    width?: number
}

const Image: React.FC<ImageProps> = (props) => {
    return <BootImage src={props.filelink}
        height={props.height}
        width={props.width}></BootImage>
}

export default Image