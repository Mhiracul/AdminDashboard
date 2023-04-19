import React from "react";
import ProfileImage from "./ProfileImage";
import image from "../assets/image.png";
import { FiUsers } from "react-icons/fi";
import Icon from "./Icon";
import { RxLightningBolt } from "react-icons/rx";
import { AiOutlinePlus, AiOutlineUnorderedList } from "react-icons/ai";
import { CiPause1 } from "react-icons/ci";
const Menu = () => {
  return (
    <div className="bg-[#FFFFFF] w-full px-12 py-2 shadow-md ">
      <div className="flex flex-col gap-[35px]">
        <div className="flex justify-between items-center flex-row p-[12px]  ">
          <div>
            <h1 className="text-[#000000] text-[38px] font-[600] leading-[45.99px] font-[inter] ">
              New Campaign Run{" "}
            </h1>
            <p className="text-[#B8B9BD] font-[400] text-[14px] leading-[16.94px] font-[inter] mt-1">
              A new campaign launch work for brand new feature in May month
            </p>
          </div>
          <div>
            <button className="bg-black text-white w-[160px] h-[41px] rounded-[8px] text-[14px] font-[inter] font-[400]">
              ADD MEMBERS
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="flex items-center px-4">
              <ProfileImage src={image} alt="Profile Image" />
              <ProfileImage src={image} alt="Profile Image" />
              <ProfileImage src={image} alt="Profile Image" />
            </div>
            <div>
              <p className="text-[14px] leading-[16.94px] font-[inter] text-[#B8B9BD] font-normal">
                8 members
              </p>
            </div>
          </div>
          <div className="">
            <ul className="text-[14px] leading-[16.94px] font-[inter] flex justify-between gap-6">
              <li className="flex gap-1 text-[#7D8088]">
                <Icon icon={FiUsers} size={15} color="#7D8088" />
                Participants View
              </li>
              <li className="flex gap-1 text-[#7D8088]">
                <Icon icon={CiPause1} size={15} color="#7D8088" />
                Board View
              </li>
              <li className="flex gap-1 text-[#7D8088]">
                <Icon icon={AiOutlineUnorderedList} size={15} color="#7D8088" />
                List View
              </li>
              <li className="flex gap-1 text-[#7D8088]">
                <Icon icon={RxLightningBolt} size={15} color="#7D8088" />
                Power View
              </li>
              <li className="flex gap-1 text-[#7D8088]">
                <Icon icon={AiOutlinePlus} size={15} color="#7D8088" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
