import React, { CSSProperties } from "react"
import "../styles.css"

interface SidebarProps {
  children: React.ReactNode;
  styling?: CSSProperties;
}

const Sidebar = (props: SidebarProps) => {

  return (
    <div className="sidebar" style={props.styling}>
      {props.children}
    </div>
  )
}

export default Sidebar