import React, { useState } from "react";
import { trackingInput } from "../../styles/trackingInput";
import { smallButton } from "../../styles/smallButton";
import { useNavigate } from "react-router-dom";

const Track = () => {
  const [trackingID, setTrackingID] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    sessionStorage.setItem("tracking_id", trackingID);
    navigate("/tracking-results");
  };
  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        placeholder="Tracking ID"
        className={trackingInput}
        value={trackingID}
        onChange={(e) => setTrackingID(e.target.value)}
      />
      <button className={smallButton}>Search</button>
    </form>
  );
};

export default Track;
