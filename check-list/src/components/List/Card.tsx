import React from 'react'
import EditIcon from "../../assets/vector.png";
function Card() {
  return (
    <div
        style={{
          display: "flex",
          borderRadius: 30,
          marginBottom: 16,
          backgroundColor: "#FFFFFF",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 16,
          paddingBottom: 16,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 8,
          }}
        >
          <span className="checkbox">
          <input type="checkbox" id="myCheckbox" />
            <label htmlFor="myCheckbox"></label> 
          </span>

          <input
            type="text"
            style={{ border: "none", outline: "none", fontSize: 16 }}
          />
        </div>
        <div style={{ cursor: "pointer" }}>
          <img src={EditIcon} width={28} />
        </div>
     
      </div>
  )
}

export default Card