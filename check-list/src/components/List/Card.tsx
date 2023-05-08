import React, { useState, useEffect, useRef, ChangeEvent } from "react";
import * as mainAction from "../../redux-store/redux-action/index";
import { useDispatch } from "react-redux";
import EditIcon from "../../assets/vector.png";
import SaveButton from "../SaveButton";
type CardParams = {
  id: string;
  title: string;
  completed: boolean;
};

function Card({ id, title, completed }: CardParams) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClickEdit, setIsClickEdit] = useState(false);
  const [isMenuEditClicked, setIsMenuEditClicked] = useState(false);
  const [inputTitle, setInputTitle] = useState(title);
  const [isChecked, setIsChecked] = useState(completed);
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const menuEditRef = useRef();
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    const checked = event.target.checked;
    dispatch(mainAction.handleEditCard({ id, title, checked }));
  };
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuEditRef.current && menuEditRef.current.contains(event.target)) {
        return;
      }

      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const hanhleOpenModalMenuEdit = (event) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputTitle(event.target.value);
  };
  const hanhleClickEdit = () => {
    setIsClickEdit(!isClickEdit);
    setIsOpen(!isOpen);
  };
  const hanhleClickSaveAfterEdit = ({ id, inputTitle, completed }) => {
    dispatch(
      mainAction.handleEditCard({ id, title: inputTitle, checked: completed })
    );
    setIsClickEdit(!isClickEdit);
  };
  const handleClickRemove = (id) => {
    setIsOpen(!isOpen);
    dispatch(mainAction.handleRemoveCard({ id }));
  };
  return (
    <div
      key={id}
      style={{
        display: "flex",
        borderRadius: 30,
        marginBottom: 16,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          gap: 8,
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 14,
          paddingBottom: 14,
        }}
      >
        {!isClickEdit && (
          <span
            className="checkbox"
            style={{ display: !isClickEdit ? "flex" : "none" }}
            key={id}
          >
            <input
              checked={isChecked}
              type="checkbox"
              onChange={handleCheckboxChange}
              id={id}
            />
            <label htmlFor={id}></label>
          </span>
        )}

        <span style={{ display: "flex", flex: 1 }}>
          <input
            disabled={!isClickEdit}
            type="text"
            ref={inputRef}
            value={inputTitle}
            onChange={handleInputChange}
            style={{
              border: "none",
              outline: "none",
              fontSize: 16,
              flex: 1,
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "19px",
              backgroundColor: "#FFFFFF",
              color: !isChecked ? "#2E2E2E" : "#A9A9A9",
              textDecorationLine: isChecked ? "line-through" : "",
            }}
          />
        </span>
      </div>
      <SaveButton
        isDisplay={isClickEdit}
        handles={() => hanhleClickSaveAfterEdit({ id, inputTitle, completed })}
      />
      <div
        key={id}
        style={{
          position: "relative",
          display: !isClickEdit ? "flex" : "none",
          justifyContent: "flex-end",
          width: 111,
          marginRight: 16,
          marginTop: 4,
          marginBottom: 4,
        }}
      >
        <img
          ref={menuEditRef}
          src={EditIcon}
          style={{ cursor: "pointer" }}
          width={28}
          id={id}
          onClick={hanhleOpenModalMenuEdit}
        />
        {isOpen && (
          <div
            ref={modalRef}
            id={id}
            style={{
              position: "absolute",
              zIndex: 10000000000,
              top: 20,
              width: 110,
              height: 80,
              gap: 16,
              paddingLeft: 22,
              paddingTop: 16,
              paddingBottom: 16,
              alignItems: "flex-start",
              flexDirection: "column",
              backgroundColor: "white",
              borderRadius: 10,
              boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              style={{
                color: "#2E2E2E",
                fontStyle: "normal",
                fontWeight: 400,
                cursor: "pointer",
                flex: 1,
                marginBottom: 16,
                fontSize: "14px",
                lineHeight: "16px",
                textTransform: "capitalize",
              }}
              onClick={hanhleClickEdit}
            >
              Edit
            </div>
            <div
              style={{
                color: "#E07C7C",
                fontStyle: "normal",
                cursor: "pointer",
                fontWeight: 400,
                flex: 1,
                fontSize: "14px",
                lineHeight: "16px",
                textTransform: "capitalize",
              }}
              onClick={() => handleClickRemove(id)}
            >
              Delete
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
