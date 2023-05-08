import React, { useState, useEffect } from "react";
import Card from "../List/Card";
import * as mainAction from "../../redux-store/redux-action/index";
import { useDispatch, useSelector } from "react-redux";

import SaveButton from "../SaveButton";
import { DropdownFilter } from "../List/DropdownFilter";
function ContentList() {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("All");
  const [title, setTitle] = useState("");
  const handleAddCard = (title) => {
    dispatch(mainAction.handleAddCard(title));
    setTitle("");
  };
  const [lists, setLists] = useState([]);
  const { listTasks } = useSelector((state) => state.main);
  useEffect(() => {
    switch (selectedOption) {
      case "Done":
        console.log("Done");
        setLists(listTasks.filter((element) => element.completed === true));
        break;
      case "Undone":
        setLists(listTasks.filter((element) => element.completed === false));
        break;
      default:
        setLists(listTasks);
        break;
    }
  }, [listTasks, selectedOption]);

  const handleAddText = (event) => {
    setTitle(event.target.value);
  };

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
        <h2
          style={{
            fontStyle: "normal",
            fontWeight: 500,
            // fontSize: 24,
            fontSize: `calc(20px + 0.390625vw)`,
            // lineHeight: 28,
          }}
        >
          Task
        </h2>
        <DropdownFilter
          setSelectOption={setSelectedOption}
          select={selectedOption}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          overflowY: lists.length > 12 ? "scroll" : "none",
          maxHeight: lists.length > 12 ? "800px" : "auto",
        }}
      >
        {lists.map((element) => {
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
          marginTop: lists.length >= 11 ? 12 : 0,
          backgroundColor: "#FFFFFF",
          alignItems: "center",
          maxHeight: "400px",
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
