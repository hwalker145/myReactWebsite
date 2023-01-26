import Image from "./Image"
import "./CompStyles.css"
import React from "react"

interface CardProps {
    icon?: React.ReactNode;
    title?: string;
    height?: number;
    width?: number;
}

const Card = (props: CardProps) => {
    return (<div className="card">
        {props.icon}
        {props.title}
    </div>)
};

export default Card;