import React from "react";
import { Image as BootImage } from "react-bootstrap";

interface ImageProps {
    filelink: string
    alttext: string
    classdata?: string 
    height?: number
    width?: number
}

const Image = (props: ImageProps) => {
    return <BootImage src={props.filelink}
        alt={props.alttext}
        className={props.classdata}
        height={props.height}
        width={props.width}/>
}

export default Image