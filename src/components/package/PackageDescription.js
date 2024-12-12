import React from "react";

const PackageDescription = ({ details }) => {
  return (
    <div className="w-full grid grid-cols-2 lg:grid-cols-4 text-xs gap-5">
      <span className="w-full text-primary max-lg:text-left">
        Time for delivery:{" "}
        <span className="text-black">{details.time_taken} days.</span>
      </span>
      <span className="w-full text-primary max-lg:text-right">
        Weight: <span className="text-black">{details.weight} lbs</span>
      </span>
      <span className="w-full text-primary max-lg:text-left">
        Description: <span className="text-black">{details.description}.</span>
      </span>
      <span className="w-full text-primary max-lg:text-right">
        Status: <span className="text-black capitalize">{details.status}</span>
      </span>
    </div>
  );
};

export default PackageDescription;
