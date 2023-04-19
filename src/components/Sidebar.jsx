import React from "react";
import { RxLightningBolt } from "react-icons/rx";
import { TfiDashboard, TfiPlus } from "react-icons/tfi";
import { TbListCheck, TbRadioactive } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { CiSliderHorizontal } from "react-icons/ci";
import Icon from "./Icon";
const Sidebar = () => {
  return (
    <div className=" bg-[#1D1042] w-[272px] h-full flex flex-col justify-between px-10 py-10 ">
      <div className="bg-[#45269C] rounded-[8px] w-[208px] h-[46px] mb-4 flex items-center text-center px-6">
        <Icon icon={RxLightningBolt} size={20} color="#D4B2FF" />

        <h1 className="text-center p-2 text-white text-[16px] font-[400]">
          Welcome Keerthi
        </h1>
      </div>
      <nav>
        <ul className="space-y-6 text-[14px] mt-4">
          <li className="flex items-center gap-3 ">
            <Icon icon={TfiDashboard} size={20} color="#fff" />
            <a
              href="/"
              className=" hover:border-b hover:border-[#8222FA] text-white text-left"
            >
              Dashboard
            </a>
          </li>

          <li className="flex items-center gap-3">
            <Icon icon={CiSliderHorizontal} size={20} color="#fff" />
            <a
              href="/settings"
              className="block hover:border-b hover:border-[#8222FA] text-white"
            >
              Settings
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Icon icon={RxLightningBolt} size={20} color="#fff" />
            <a
              href="/activities"
              className=" hover:border-b hover:border-[#8222FA] text-left text-white"
            >
              Activities
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Icon icon={FiUsers} size={20} color="#fff" />
            <a
              href="/users"
              className=" hover:border-b hover:border-[#8222FA] text-left text-white"
            >
              Users
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Icon icon={AiOutlineUserAdd} size={20} color="#fff" />
            <a
              href="/users"
              className=" hover:border-b hover:border-[#8222FA] text-left text-white"
            >
              Added user
            </a>
          </li>
          <li className="flex items-center gap-3 ">
            <Icon icon={TbRadioactive} size={20} color="#fff" />
            <a
              href="/users"
              className="hover:border-b hover:border-[#8222FA]  text-left text-white"
            >
              Affiliate
            </a>
          </li>
          <li className="border-b border-[#FFFFFF] opacity-[50%] top-[300px] left-[8px] pb-2  w-[192px] align-[stretch] "></li>

          <li className="flex items-center gap-3 ">
            <Icon icon={RxLightningBolt} size={20} color="#fff" />
            <a
              href="/users"
              className=" hover:border-b hover:border-[#8222FA] text-[#FFFFFF] text-left"
            >
              Profile
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Icon icon={FiUsers} size={20} color="#fff" />
            <a
              href="/users"
              className=" hover:border-b hover:border-[#8222FA] text-left text-[#FFFFFF]"
            >
              Logout
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-auto">
        <button className="bg-[#703EFE] text-white font-[400] text-[16px] p-[16px] w-[208px] rounded flex items-center justify-center gap-2">
          <Icon
            icon={TfiPlus}
            size={15}
            color="#fff"
            className="items-center"
          />
          NEW PROJECT
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
