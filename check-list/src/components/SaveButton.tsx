import React from "react";

export default function SaveButton({ isDisplay, handles }) {
  return (
    <div
      onClick={handles}
      style={{
        backgroundColor: "#585292",
        color: "#fff",
        borderRadius: 30,
        width: 64,
        height: 36,
        marginRight: 8,
        marginTop: 4,
        marginBottom: 4,
        alignItems: "center",
        justifyContent: "center",
        display: isDisplay ? "flex" : "none",
        cursor: "pointer",
      }}
    >
      Save
    </div>
  );
}
