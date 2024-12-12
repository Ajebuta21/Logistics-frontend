import React, { useState } from "react";
import { locations } from "../assets/arrays/locations";
import { fullButton } from "../styles/fullButton";
import { inputStyle } from "../styles/inputStyle";
import ShippingDetails from "../components/shippingComponents/ShippingDetails";
import api from "../assets/apis/api";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { bigButton } from "../styles/bigButton";
import Footer from "../components/footers/Footer";

const ShippingPage = () => {
  const [loading, setLoading] = useState(false);
  const auth = useSelector((state) => state.user.auth);
  const [formData, setFormData] = useState({
    senders_name: "",
    senders_email: "",
    senders_number: "",
    recievers_name: "",
    recievers_email: "",
    recievers_number: "",
    origin: "",
    destination: "",
    distance: "",
    time_taken: "",
    weight: "",
    description: "",
    price: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = () => {
    if (formData.origin && formData.destination && formData.weight) {
      const origin = locations.find(
        (loc) => `${loc.state}, ${loc.country}` === formData.origin
      );
      const destination = locations.find(
        (loc) => `${loc.state}, ${loc.country}` === formData.destination
      );

      if (origin && destination) {
        const distance = calculateDistance(
          origin.latitude,
          origin.longitude,
          destination.latitude,
          destination.longitude
        );

        const weight = formData.weight;

        if (!formData.price) {
          const price = calculatePriceWithWeight(weight, distance);
          formData.price = price.toFixed(2);
        }

        if (!formData.time_taken) {
          const speed = 60; // average speed in km/h
          const timeTaken = distance / speed; // time in hours
          const daysTaken = Math.ceil(timeTaken / 24); // time in days
          formData.time_taken = daysTaken;
        }

        setFormData({
          ...formData,
          distance: distance.toFixed(2),
        });
      }
    }
  };

  const calculatePriceWithWeight = (weight, distance) => {
    const basePricePerKilometer = 1;
    const priceMultiplier = 0.01;

    const price =
      basePricePerKilometer * distance + Math.exp(priceMultiplier * weight);

    return price;
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = (value) => (value * Math.PI) / 180;

    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
        Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/create-package", formData);
      toast.success(response.data.message);
      sessionStorage.setItem("package", JSON.stringify(response.data.package));

      setTimeout(() => {
        navigate("/generate-invoice");
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (!auth) {
    return (
      <div className="w-full h-screen flex flex-col font-serif">
        <div className="w-full h-60 bg-ship bg-center bg-no-repeat bg-cover">
          <div className="w-full h-full bg-black/10 backdrop-blur-sm p-10 flex items-end">
            <h1 className="text-2xl text-white font-bold">Ship Product</h1>
          </div>
        </div>
        <div className="w-full p-10 flex flex-col items-center gap-5">
          <span className="text-gray-500 text-xs">
            You need to be logged in to create shipment
          </span>
          <Link to="/login" className={bigButton}>
            Log in
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col font-serif">
      <div className="w-full h-60 bg-ship bg-center bg-no-repeat bg-cover">
        <div className="w-full h-full bg-black/10 backdrop-blur-sm p-10 flex items-end">
          <h1 className="text-2xl text-white font-bold">Ship Product</h1>
        </div>
      </div>
      <div className="w-full p-10 flex max-lg:flex-col gap-5">
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-1/2 flex flex-col gap-5 lg:gap-2"
        >
          <input
            type="text"
            className={inputStyle}
            placeholder="Origin"
            list="departureOptions"
            name="origin"
            value={formData.origin}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          <datalist id="departureOptions">
            {locations.map((city) => (
              <option
                key={`${city.longitude}`}
                value={`${city.state}, ${city.country}`}
              />
            ))}
          </datalist>
          <input
            type="text"
            className={inputStyle}
            placeholder="Destination"
            list="destinationOptions"
            name="destination"
            value={formData.destination}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          <datalist id="destinationOptions">
            {locations.map((city) => (
              <option
                key={`${city.longitude}`}
                value={`${city.state}, ${city.country}`}
              />
            ))}
          </datalist>
          <input
            type="number"
            className={inputStyle}
            placeholder="Weight (lbs). Note max weight is 150lbs"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
            onBlur={handleBlur}
            max={150}
          />
          <input
            type="number"
            className={inputStyle}
            placeholder="Price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
          <input
            type="number"
            className={inputStyle}
            placeholder="Time in days"
            name="time_taken"
            value={formData.time_taken}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className={inputStyle}
            placeholder="Sender's name"
            name="senders_name"
            value={formData.senders_name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            className={inputStyle}
            placeholder="Sender's email"
            name="senders_email"
            value={formData.senders_email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className={inputStyle}
            placeholder="Sender's number"
            name="senders_number"
            value={formData.senders_number}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className={inputStyle}
            placeholder="Receiver's name"
            name="recievers_name"
            value={formData.recievers_name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            className={inputStyle}
            placeholder="Receiver's email"
            name="recievers_email"
            value={formData.recievers_email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className={inputStyle}
            placeholder="Receiver's number"
            name="recievers_number"
            value={formData.recievers_number}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className={inputStyle}
            placeholder="Description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
          {loading ? (
            <div className="w-full flex justify-center">
              <div className="loader"></div>
            </div>
          ) : (
            <button className={fullButton}>Create</button>
          )}
        </form>
        <ShippingDetails formData={formData} />
      </div>
      <Footer />
    </div>
  );
};

export default ShippingPage;
