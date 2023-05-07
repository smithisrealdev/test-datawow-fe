import React, { useContext } from "react";
import Card from "../List/Card";
import * as mainAction from "../../redux-store/redux-action/index";
import { useDispatch, useSelector } from "react-redux";

import SaveButton from "../SaveButton";
import { DropdownFilter } from "../List/DropdownFilter";
function ContentList() {
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState("");
  const handleAddCard = (title) => {
    dispatch(mainAction.handleAddCard(title));
    setTitle("");
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
        <DropdownFilter />
       
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
          alignItems: "center",
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
            borderRadius: 30,
            fontWeight: 400,
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 14,
            paddingBottom: 14,
          }}
        />
        <SaveButton isDisplay={title} handles={() => handleAddCard(title)} />
      </div>
    </div>
  );
}

export default ContentList;
