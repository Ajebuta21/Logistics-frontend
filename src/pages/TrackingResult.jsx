import React, { useEffect, useState } from "react";
import api from "../assets/apis/api";
import toast from "react-hot-toast";
import SendersDetails from "../components/package/SendersDetails";
import RecieverDetails from "../components/package/RecieverDetails";
import PackageDescription from "../components/package/PackageDescription";
import HistoryInformation from "../components/package/HistoryInformation";
import Footer from "../components/footers/Footer";

const TrackingResult = () => {
  const tracking_id = sessionStorage.getItem("tracking_id");
  const [details, setDetails] = useState({});
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const getDetails = async () => {
    setLoading(true);
    try {
      const response = await api.get(`/get-package/${tracking_id}`);
      setDetails(response.data.package);
      setHistory(response.data.history);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetails();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  }

  if (!loading && Object.keys(details).length === 0) {
    return (
      <div className="w-full flex flex-col font-serif">
        <div className="w-full h-60 bg-ship bg-center bg-no-repeat bg-cover">
          <div className="w-full h-full bg-black/10 backdrop-blur-sm p-10 flex items-end">
            <h1 className="text-2xl text-white font-bold">Track Shipment</h1>
          </div>
        </div>
        <div className="text-center mt-20">
          <span className="text-sm text-gray-500">No record found.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col font-serif">
      <div className="w-full h-60 bg-ship bg-center bg-no-repeat bg-cover">
        <div className="w-full h-full bg-black/10 backdrop-blur-sm p-10 flex items-end">
          <h1 className="text-2xl text-white font-bold">Track Shipment</h1>
        </div>
      </div>
      <div className="w-full p-10 flex flex-col gap-5">
        <h2 className="font-semibold">
          Tracking number: {details.tracking_id}
        </h2>
        <span className="w-full text-primary text-xs">
          Shipping cost:{" "}
          <span className="text-black">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(details.price)}
          </span>
        </span>
        <div className="w-full flex max-lg:flex-col gap-5">
          <SendersDetails details={details} />
          <RecieverDetails details={details} />
        </div>
        <PackageDescription details={details} />
        <h2 className="font-semibold">Tracking history</h2>
        <HistoryInformation history={history} />
      </div>
      <Footer />
    </div>
  );
};

export default TrackingResult;
