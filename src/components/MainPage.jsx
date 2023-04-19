import React from "react";
import CardDisplay from "./CardDisplay";
import Menu from "./Menu";
import TodoBar from "./TodoBar";

const MainPage = () => {
  return (
    <div className="bg-[#FCFBFC] flex flex-col flex-1 ">
      <Menu />

      <div className="">
        <TodoBar />
      </div>
      <CardDisplay />
    </div>
  );
};

export default MainPage;
