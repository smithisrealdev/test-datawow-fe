import React, { useState } from "react";
import ArrowDownIcon from "../../assets/arrow-down.png";
export function DropdownFilter() {
  const [selectedOption, setSelectedOption] = useState("all");
  const options = ["All", "option 1", "option 2"];

  function handleSelectChange(e) {
    setSelectedOption(e.target.value);
  }

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: 10,
          width: 110,
          padding: "4px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>all</div>
        <img src={ArrowDownIcon} width={10} height={6} />
      </div>
      <div
        // ref={modalRef}
        style={{
          position: "absolute",
          zIndex: 100,
          top: 33,
          width: "100%",
          padding: "10px 6px",
          alignItems: "flex-start",
          flexDirection: "column",
          backgroundColor: "white",
          borderRadius: 10,
          boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {options.map((option, index) => (
          <option
            style={{
              background: option === "All" ? "#585292" : "white",
              color: option === "All" ? "white" : "black",
              fontWeight: 400,
              fontSize: 14,
              lineHeight: "16px",
              textTransform: "capitalize",
              padding: 6,
              marginBottom: 2,
              borderRadius: 8,
            }}
            key={index}
            value={option}
          >
            {option}
          </option>
        ))}
      </div>
    </div>

    // <div>
    //   <label htmlFor="select-filter">Filter:</label>
    //   <select id="select-filter" value={selectedOption} onChange={handleSelectChange}>
    //     {options.map((option, index) => (
    //       <option key={index} value={option}>{option}</option>
    //     ))}
    //   </select>

    //   <p>{selectedOption}</p>
    // </div>
  );
}
