import React from "react";
import Card from "../List/Card";
import * as mainAction from "../../redux-store/redux-action/index";
import { useDispatch, useSelector } from "react-redux";

function ContentList() {
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState("");
  const handleAddCard = (title) => {
    dispatch(mainAction.handleAddCard(title));
  };
  const handleAddText = (event) => {
    setTitle(event.target.value);
  };
  const { listTasks } = useSelector((state) => state.main);

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
        <div style={{backgroundColor: "#fff",borderRadius:10,width:110,padding:"4px 14px",display:"flex",justifyContent:"space-between"}}>
          <div>
          all
          </div>
          <div>
            i
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {listTasks.map((element) => {
          return (
            <Card
              key={element.id}
              id={element.id}
              title={element.title}
              completed={element.completed}
            />
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          borderRadius: 30,
          marginBottom: 16,
          backgroundColor: "#FFFFFF",
          // justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 16,
          paddingBottom: 16,
        }}
      >
        <input
          name="Add your todo..."
          type="text"
          id="my-input"
          placeholder="Add your todo..."
          value={title}
          onChange={handleAddText}
          style={{
            border: "none",
            outline: "none",
            flex: 1,
            fontSize: 16,
            fontWeight: 400,
          }}
        />
        <div
          onClick={() => handleAddCard(title)}
          style={{
            backgroundColor: "#585292",
            color: "#fff",
            borderRadius: 30,
            width: 64,
            height: 36,
            alignItems: "center",
            justifyContent: "center",
            display: title ? "flex" : "none",
            cursor: "pointer",
          }}
        >
          Save
        </div>
      </div>
    </div>
  );
}

export default ContentList;
