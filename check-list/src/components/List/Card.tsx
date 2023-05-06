import React from "react";
import * as mainAction from "../../redux-store/redux-action/index";
import { useDispatch, useSelector } from "react-redux";

import EditIcon from "../../assets/vector.png";
type CardParams = {
  id: string;
  title: string;
  completed: boolean;
};

function Card({ id, title, completed }: CardParams) {
  const [isActiveEditMode, setIsActiveEditMode] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(completed);
  const dispatch = useDispatch();
  const handleCheckboxChange = (event) => {
    console.log("isChecked1", isChecked);
    setIsChecked(event.target.checked);
    const checked = event.target.checked;
    dispatch(mainAction.handleEditCard({ id, title, checked }));
  };
  const hanhleEditMode = ({ e }: any) => {
    console.log("hanhleEditMode :", isActiveEditMode);
    setIsActiveEditMode(!isActiveEditMode);
  };
  return (
    <div
      key={id}
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
        <span className="checkbox" key={id}>
          <input
            checked={isChecked}
            type="checkbox"
            defaultChecked
            onChange={handleCheckboxChange}
            id={id}
          />
          <label htmlFor={id}></label>
        </span>
        <span style={{ textDecorationLine: "line-through", color: "#A9A9A9" }}>
          <input
            type="text"
            value={title}
            style={{
              border: "none",
              outline: "none",
              fontSize: 16,
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "19px",
              color: !isChecked ? "#2E2E2E" : "#A9A9A9",
              textDecorationLine: isChecked ? "line-through": ""
            }}
          />
        </span>
      </div>
      <div
        key={id}
        style={{
          cursor: "pointer",
          position: "relative",
          display: "flex",
          justifyContent: "flex-end",
          width: 111,
        }}
      >
        <img src={EditIcon} width={28} id={id} onClick={hanhleEditMode} />
        <div
          id={id}
          style={{
            position: "absolute",
            zIndex: 100,
            top: 20,
            padding: 26,
            backgroundColor: "white",
            borderRadius: 10,
            display: !isActiveEditMode ? "none" : "",
            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            style={{
              color: "#2E2E2E",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "16px",
              textTransform: "capitalize",
            }}
          >
            Edit
          </div>
          <div
            style={{
              color: "#E07C7C",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "16px",
              textTransform: "capitalize",
            }}
          >
            Delete
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
