import React from "react";
import Card from "../List/Card";
function ContentList() {
  return (
    <div style={{ display: "flex", flexDirection: "column", marginTop: 32 }}>
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Task</h2>
        <button>filter</button>
      </div>
      {[10, 1, 10, 10, 10, 10, 10, 10].map(() => {
        return <Card />;
      })}
    </div>
  );
}

export default ContentList;
