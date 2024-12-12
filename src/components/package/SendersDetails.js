import React from 'react'

const SendersDetails = ({details}) => {
  return (
    <div className="w-full shadow-lg p-5 flex flex-col gap-1 text-xs border">
      <span className="text-primary">
        From: <span className="text-black">{details.origin}</span>
      </span>
      <span className="text-primary">
        Sent from: <span className="text-black capitalize">{details.senders_name}</span>
      </span>
      <span className="text-primary">
        Senders contact:{" "}
        <span className="text-black">{details.senders_number}</span>
      </span>
      <span className="text-primary">
        Senders email:{" "}
        <span className="text-black">{details.senders_email}</span>
      </span>
    </div>
  );
}

export default SendersDetails
