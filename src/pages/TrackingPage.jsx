import React from "react";
import Footer from "../components/footers/Footer";
import Track from "../components/homeComponents/Track";

const TrackingPage = () => {
  return (
    <div className="w-full flex flex-col font-serif">
      <div className="w-full h-60 bg-ship bg-center bg-no-repeat bg-cover">
        <div className="w-full h-full bg-black/10 backdrop-blur-sm p-10 flex items-end">
          <h1 className="text-2xl text-white font-bold">Track Your Shipment</h1>
        </div>
      </div>
      <div className="w-full py-28 lg:py-16 px-10 flex flex-col items-center gap-5">
        <p className="text-xs text-gray-500 text-center">
          Want to check the status of your package? Please enter the tracking ID
          provided to you in the field below so we can retrieve your package
          details.
        </p>
        <Track />
      </div>
      <Footer />
    </div>
  );
};

export default TrackingPage;
