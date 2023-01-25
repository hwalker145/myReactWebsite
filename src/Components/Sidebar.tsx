import {Card, CardProps} from "./Card"
import React from "react"
import "./CompStyles.css"

interface SidebarProps {
    data: CardProps[]
}

const Sidebar = (props: SidebarProps) => {

    return (
        <>
            <div className="sidebar">
                {props.data.map(
                    (card, index) => (
                    <Card key={index} title={card.title}/>
                ))}
            </div>
        </>
    )
}

export default Sidebar