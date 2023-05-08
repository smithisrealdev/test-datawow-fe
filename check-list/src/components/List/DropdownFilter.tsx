import React, { useState, useRef,useEffect } from "react";
import ArrowDownIcon from "../../assets/arrow-down.png";
export function DropdownFilter({setSelectOption,select}) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const options = ["All", "Done", "Undone"];
  const modalRef = useRef<HTMLDivElement>(null);
  const selectRef =  useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && selectRef.current.contains(event.target)) {
        return;
      }
  
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpenModal(false);
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  const handleSelectChange = (e: React.FormEvent<HTMLOptionElement>) => {
    setSelectOption(e.currentTarget.value);
  };
  const handleClickOpenModalMenuFilter = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        onClick={handleClickOpenModalMenuFilter}
        style={{
          backgroundColor: "#fff",
          borderRadius: 10,
          width: 110,
          padding: "4px 14px",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          justifyContent: "space-between",
        }}
        ref={selectRef}
      >
        <div>{select}</div>
        <img src={ArrowDownIcon} width={10} height={6} />
      </div>
      {isOpenModal && (
        <div
          ref={modalRef}
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
            transition: "opacity 2s ease, transform 4s ease",
          }}
        >
          {options.map((option, index) => (
            <option
              style={{
                cursor: "pointer",
                backgroundColor: select === option ? "#585292" : "white",
                color: select === option ? "white" : "black",
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
              onClick={handleSelectChange}
            >
              {option}
            </option>
          ))}
        </div>
      )}
    </div>
  );
}
