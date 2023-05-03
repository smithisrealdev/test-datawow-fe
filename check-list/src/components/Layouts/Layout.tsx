import React from "react";
import ContentLists from "./ContentList";
import ContentProgressBars from "./ContentProgressBar";
function Layout() {
  return (
    <div>
      <ContentProgressBars />
      <ContentLists />
    </div>
  );
}

export default Layout;
