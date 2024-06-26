import React, { useState } from 'react'
import './style.scss'

function SwitchTab({data, onTabChange}) {
    const [selectedTab, setSelectedTab] = useState(0)
    const [left, setLeft] = useState(0)
    
    const activeTab = (tab, index) => {
        setLeft(index * 100);  // As width set to 100 px in style.scss
        // After a delay of 300 milliseconds, set the selectedTab state
        setTimeout(() => {
            setSelectedTab(index)
        }, 300);
        onTabChange(tab, index) 
    }

  return (
    <div className="switchingTabs">
        <div className="tabItems">
            {data.map((tab, index) => (
                <span key={index} className={`tabItem ${selectedTab === index ? "active" : ""}`} onClick={() => activeTab(tab, index)}>
                    {tab}
                </span>
            ))}
            <span className="movingBg" style={{left}}/>
        </div>
    </div>
  )
}

export default SwitchTab