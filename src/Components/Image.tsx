import { Image as BootImage } from "react-bootstrap";

interface ImageProps {
    filelink: string
    height?: number
    width?: number
}

const Image = ({ filelink }: ImageProps, { height }: ImageProps, { width }: ImageProps) => {
    return <BootImage src={filelink}
        height={height}
        width={width}></BootImage>
}

export default Image