import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import api from "../assets/apis/api";
import { fullButton } from "../styles/fullButton";
import { inputStyle } from "../styles/inputStyle";
import { Link } from "react-router-dom";

const AdminPage = () => {
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const getDetails = async () => {
      setLoading(true);
      try {
        const response = await api.get("/all-packages");
        setDetails(response.data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    getDetails();
  }, []);
  const user = useSelector((state) => state.user.profile);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col font-serif">
      <div className="w-full h-60 bg-admin bg-center bg-no-repeat bg-cover">
        <div className="w-full h-full bg-black/10 backdrop-blur-sm p-10 flex items-end">
          <h1 className="text-2xl text-white font-bold">Admin Dashboard</h1>
        </div>
      </div>
      <div className="w-full p-10 flex max-lg:flex-col gap-5">
        <div className="w-full lg:w-1/2 flex flex-col gap-5">
          {user && (
            <div className="w-full p-5 bg-gray-100 shadow-lg flex gap-5 flex-col">
              <h2 className="text-center font-semibold text-primary">
                User Information
              </h2>
              <div className="text-sm flex justify-between">
                <span className="text-primary">First name:</span>
                <span className="text-gray-500 capitalize">
                  {user.firstname}
                </span>
              </div>
              <div className="text-sm flex justify-between">
                <span className="text-primary">Last name:</span>
                <span className="text-gray-500 capitalize">
                  {user.lastname}
                </span>
              </div>
              <div className="text-sm flex justify-between">
                <span className="text-primary">Email:</span>
                <span className="text-gray-500">{user.email}</span>
              </div>
              <div className="w-full flex justify-center">
                <Link to={`/update-password`} className={fullButton}>
                  Update password
                </Link>
              </div>
            </div>
          )}
          <div className="w-full gap-5 grid grid-cols-2 lg:grid-cols-4 text-primary">
            <div className="w-full bg-gray-100 flex flex-col items-center gap-2 p-2 text-xs shadow-lg">
              <span className="text-center">Total packages created</span>
              <span className="text-base text-black">{details.length}</span>
            </div>
            <div className="w-full bg-gray-100 flex flex-col items-center gap-2 p-2 text-xs shadow-lg">
              <span className="text-center">Package status: Pending</span>
              <span className="text-base text-black">
                {details.filter((item) => item.status === "pending").length}
              </span>
            </div>
            <div className="w-full bg-gray-100 flex flex-col items-center gap-2 p-2 text-xs shadow-lg">
              <span className="text-center">Package status: In transit</span>
              <span className="text-base text-black">
                {details.filter((item) => item.status === "in transit").length}
              </span>
            </div>
            <div className="w-full bg-gray-100 flex flex-col items-center gap-2 p-2 text-xs shadow-lg">
              <span className="text-center">Package status: Delivered</span>
              <span className="text-base text-black">
                {details.filter((item) => item.status === "delivered").length}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-2">
          <h2 className="text-center font-semibold text-primary">
            Shipping orders
          </h2>
          <input
            type="text"
            className={inputStyle}
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search tracking ID/Sender's Name/Recievers Name"
          />
          {details
            .filter((item) => {
              return (
                item.tracking_id
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                item.senders_name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                item.recievers_name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              );
            })
            .slice()
            .reverse()
            .map((item) => {
              return (
                <Link
                  to={`/package-details/${item.tracking_id}`}
                  className="p-2 border w-full flex gap-2 text-xs items-center shadow-sm"
                >
                  <span className="w-1/3">
                    {item.origin} to {item.destination}.
                  </span>
                  <span className="w-1/3 text-center text-primary">
                    {item.tracking_id}
                  </span>
                  <span className="w-1/3 text-right">
                    {new Date(item.created_at).toLocaleString()}
                  </span>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
