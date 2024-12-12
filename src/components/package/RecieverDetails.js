import React from "react";

const RecieverDetails = ({ details }) => {
  return (
    <div className="w-full shadow-lg p-5 flex flex-col gap-1 text-xs border">
      <span className="text-primary">
        To: <span className="text-black">{details.destination}</span>
      </span>
      <span className="text-primary">
        Sent to:{" "}
        <span className="text-black capitalize">{details.recievers_name}</span>
      </span>
      <span className="text-primary">
        Recievers contact:{" "}
        <span className="text-black">{details.recievers_number}</span>
      </span>
      <span className="text-primary">
        Recievers email:{" "}
        <span className="text-black">{details.recievers_email}</span>
      </span>
    </div>
  );
};

export default RecieverDetails;
