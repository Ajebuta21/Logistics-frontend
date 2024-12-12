import React from "react";
import { ReactTyped } from "react-typed";
import CountUp from "react-countup";

const stats = [
  { title: "Packages Delivered", value: 120, suffix: "M+" },
  { title: "Happy Clients", value: 36, suffix: "K+" },
  { title: "Locations", value: 134, suffix: "+" },
];

const Stats = () => {
  return (
    <div className="w-full bg-admin bg-center bg-no-repeat bg-cover">
      <div className="w-full px-10 py-20 gap-5 grid grid-cols-1 md:grid-cols-3 bg-black/70">
        {stats.map((item) => {
          return (
            <div className="flex flex-col gap-2 items-center">
              <ReactTyped
                startWhenVisible
                strings={[item.title]}
                typeSpeed={100}
                className="font-semibold text-white"
              />
              <CountUp
                start={0}
                end={item.value}
                duration={3}
                decimals={0}
                separator=" "
                suffix={item.suffix}
                className="text-primary font-extralight text-2xl"
                enableScrollSpy={true}
              ></CountUp>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
