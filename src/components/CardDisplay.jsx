import React from "react";
import HighfidelityDesignCard from "./HighfidelityDesignCard";
import CardImage from "../assets/CardImage.png";
import Card from "../assets/Card.png";
import CardPic from "../assets/CardPic.png";
import CardDesign from "./CardDesign";
import AddTaskButton from "./AddTaskButton";

const CardDisplay = () => {
  return (
    <div className="grid grid-cols-3 px-12 gap-6 self-stretch w-full">
      <div className=" flex flex-col gap-2">
        <HighfidelityDesignCard imageSrc={CardImage} progressColor="#EBEBEB" />
        <CardDesign />
        <AddTaskButton />
      </div>
      <div className=" flex flex-col gap-2">
        <HighfidelityDesignCard
          imageSrc={Card}
          progressColor="bg-[#FF5F37]"
          progress={70}
        />
        <AddTaskButton />
      </div>
      <div className="flex flex-col gap-2">
        <CardDesign progressColor="bg-[#8BC488]" progress={100} />
        <HighfidelityDesignCard
          imageSrc={CardPic}
          progressColor="bg-[#8BC488]"
          progress={100}
        />
        <AddTaskButton />
      </div>
    </div>
  );
};

export default CardDisplay;
