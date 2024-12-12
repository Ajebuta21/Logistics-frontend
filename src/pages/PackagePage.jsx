import React, { useEffect, useState } from "react";
import api from "../assets/apis/api";
import toast from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";
import { smallButton } from "../styles/smallButton";
import { selectInput } from "../styles/selectInput";
import SendersDetails from "../components/package/SendersDetails";
import RecieverDetails from "../components/package/RecieverDetails";
import PackageDescription from "../components/package/PackageDescription";
import HistoryInformation from "../components/package/HistoryInformation";
import { inputStyle } from "../styles/inputStyle";
import { fullButton } from "../styles/fullButton";
import { bigButton } from "../styles/bigButton";
import Modal from "../components/modals/Modal";

const PackagePage = () => {
  const navigate = useNavigate();
  const { tracking_id } = useParams();
  const [details, setDetails] = useState({});
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [location, setLocation] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getDetails = async () => {
    setLoading(true);
    try {
      const response = await api.get(`/get-package/${tracking_id}`);
      setDetails(response.data.package);
      setStatus(response.data.package.status);
      setHistory(response.data.history);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  const changeStatus = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/change-status", {
        status,
        tracking_id,
      });
      getDetails();
      toast.success("Status changed");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const createHistory = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/create-history", {
        location,
        package_id: tracking_id,
      });
      getDetails();
      setLocation("");
      toast.success(response.data.message);
    } catch (error) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.response.data.error);
      }
    } finally {
      setLoading(false);
    }
  };

  const deletePackage = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/delete-package", {
        tracking_id,
      });
      toast.success(response.data.message);
      navigate(-1);
    } catch (error) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.response.data.error);
      }
    } finally {
      setLoading(false);
    }
  };

  const getInvoice = async () => {
    try {
      await toast.promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
        loading: "Processing your request...",
        success: "Invoice generated!",
        error: "An error occurred. Please try again later.",
      });

      sessionStorage.setItem("package", JSON.stringify(details));
      navigate("/generate-invoice");
    } catch (error) {
      toast.error("An error occurred while processing your request.");
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
        <div className="w-full h-60 bg-admin bg-center bg-no-repeat bg-cover">
          <div className="w-full h-full bg-black/10 backdrop-blur-sm p-10 flex items-end">
            <h1 className="text-2xl text-white font-bold">Package Details</h1>
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
      <div className="w-full h-60 bg-admin bg-center bg-no-repeat bg-cover">
        <div className="w-full h-full bg-black/10 backdrop-blur-sm p-10 flex items-end">
          <h1 className="text-2xl text-white font-bold">Package Details</h1>
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
        <h2 className="font-semibold">Change package status</h2>
        <form onSubmit={changeStatus} className="w-full flex gap-5">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className={selectInput}
          >
            <option value="pending">Pending</option>
            <option value="in transit">In transit</option>
            <option value="delivered">Delivered</option>
          </select>
          <button className={smallButton}>Change</button>
        </form>
        <h2 className="font-semibold">Tracking history</h2>
        <HistoryInformation history={history} />
        <h2 className="font-semibold">Add new history</h2>
        <form onSubmit={createHistory} className="flex flex-col w-full gap-2">
          <input
            type="text"
            placeholder="Information about the packages where about"
            className={inputStyle}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button className={fullButton}>Submit</button>
        </form>
        <h2 className="font-semibold">Delete this package</h2>
        <button onClick={openModal} className={bigButton}>
          Delete
        </button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="w-full bg-white flex flex-col">
            <div className="w-full p-5 text-center">Delete this package?</div>
            <div className="w-full flex">
              <button
                onClick={closeModal}
                className="border p-2 text-center w-full transition-all ease-in-out hover:bg-primary hover:text-white"
              >
                Cancel
              </button>
              <form className="w-full">
                <button
                  onClick={deletePackage}
                  className="border p-2 text-center w-full transition-all ease-in-out hover:bg-primary hover:text-white"
                >
                  Delete
                </button>
              </form>
            </div>
          </div>
        </Modal>
        <h2 className="font-semibold">Reprint invoice</h2>
        <button onClick={getInvoice} className={bigButton}>
          Get invoice
        </button>
      </div>
    </div>
  );
};

export default PackagePage;
