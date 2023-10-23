import React from "react"

const TabButton = ({children,onSelect,isSelected}) => {
    
  return (
    <button className={`${isSelected ? 'active':''}`} onClick={onSelect}>{children}</button>
  )
}

export default React.memo(TabButton)