import React from "react";
import { useState } from "react";
import { LuPackage, LuPackageSearch } from "react-icons/lu";
import Ship from "../components/homeComponents/Ship";
import Track from "../components/homeComponents/Track";

const Home = () => {
  const [task, setTask] = useState("Track");
  return (
    <div className="w-full font-serif">
      <div className="w-full h-screen bg-home bg-center bg-no-repeat bg-cover">
        <div className="w-full h-full bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center gap-14">
          <h1 className="text-white font-semibold text-2xl text-center">
            Welcome to <br className="lg:hidden" /> Mockup Logistics
          </h1>
          <div className="flex items-center">
            <div
              onClick={() => setTask("Track")}
              className={`w-36 h-32 flex flex-col gap-2 items-center justify-center transition-all ease-in-out duration-500 ${
                task === "Track"
                  ? "bg-primary text-white scale-110 z-10"
                  : "bg-white text-primary"
              } cursor-pointer`}
            >
              <LuPackageSearch className="text-3xl" />
              <span className="text-lg">Track</span>
            </div>
            <div
              onClick={() => setTask("Ship")}
              className={`w-36 h-32 flex flex-col gap-2 items-center justify-center transition-all ease-in-out duration-500 ${
                task === "Ship"
                  ? "bg-primary text-white scale-110 z-10"
                  : "bg-white text-primary"
              } cursor-pointer`}
            >
              <LuPackage className="text-3xl" />
              <span className="text-lg">Ship</span>
            </div>
          </div>
          {task === "Track" ? <Track /> : <Ship />}
        </div>
      </div>
    </div>
  );
};

export default Home;
