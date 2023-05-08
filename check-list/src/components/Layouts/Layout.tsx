import React, { useEffect } from "react";
import ContentLists from "./ContentList";
import ContentProgressBars from "./ContentProgressBar";
import * as mainAction from "../../redux-store/redux-action/index";
import { useDispatch } from "react-redux";
function Layout() {

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const action = await mainAction.handleInitialValue();
      dispatch(action);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          padding: "61px 101px",
          backgroundColor: "#F5F5F5",
          borderRadius: 20,
        }}
      >
        <ContentProgressBars />
        <ContentLists />
      </div>
  );
}

export default Layout;
