import React, { useEffect } from "react";
import ContentLists from "./ContentList";
import ContentProgressBars from "./ContentProgressBar";
import * as mainAction from "../../redux-store/redux-action/index";
import { useDispatch } from "react-redux";
function Layout() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("handleInitialValue!!")
    
    const fetchData = async () => {
      const action = await mainAction.handleInitialValue();
      dispatch(action);
    }
  
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <ContentProgressBars />
      <ContentLists />
    </div>
  );
}

export default Layout;
