import React from "react";
import { useSelector } from "react-redux";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface MainState {
  listTasks: Task[];
}
function ContentProgressBar() {
  const { listTasks } = useSelector((state: { main: MainState }) => state.main);
  const [valueProgress, setValueProgress] = React.useState(0);
  const countCompleted = listTasks.reduce((count, element) => {
    if (element.completed) {
      return count + 1;
    }
    return count;
  }, 0);
  React.useEffect(() => {
    const percent = (countCompleted / listTasks.length) * 100;
    setValueProgress(percent);
  }, [countCompleted, listTasks.length]);

  return (
    <div
      style={{
        backgroundColor: "#E07C7C",
        borderRadius: 20,
        padding: 20,
        gap: 10,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontWeight: "500",
          fontStyle: "normal",
          color: "white",
          fontSize: `calc(22px + 0.390625vw)`,
        }}
      >
        Progress
      </div>
      <div
        style={{
          width: "100%",
          height: "8px",
          borderRadius: "30px",
          backgroundColor: "#3B3B3B",
        }}
      >
        <div
          style={{
            width: valueProgress + "%",
            height: "100%",
            borderRadius: "30px",
            backgroundColor: "white",
            transition: "width 1s ease-in-out", // added transition css property
          }}
        />
      </div>
      <div
        style={{
          fontSize: 16,
          fontWeight: "400",
          fontStyle: "normal",
          color: "#EBB9B8",
        }}
      >
        {countCompleted} completed
      </div>
    </div>
  );
}

export default ContentProgressBar;
