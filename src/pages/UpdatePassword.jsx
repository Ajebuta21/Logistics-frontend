import React, { useState } from "react";
import api from "../assets/apis/api";
import { form } from "../styles/form";
import { formHeader } from "../styles/formHeader";
import { fullButton } from "../styles/fullButton";
import { inputStyle } from "../styles/inputStyle";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UpdatePassword = () => {
  const [loading, setLoading] = useState(false);
  const [hidden, sethidden] = useState(true);
  const [old_password, setOld_password] = useState("");
  const [new_password, setNew_password] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const data = { old_password, new_password, password_confirmation };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/reset-password", data);
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

  return (
    <div className="w-full h-screen bg-admin bg-center bg-no-repeat bg-cover font-serif">
      <div className="w-full h-full bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center gap-10">
        <form onSubmit={handleSubmit} className={form}>
          <h1 className={formHeader}>Update password</h1>
          <input
            type={hidden ? "password" : "text"}
            className={inputStyle}
            placeholder="Old password"
            value={old_password}
            onChange={(e) => setOld_password(e.target.value)}
          />
          <input
            type={hidden ? "password" : "text"}
            className={inputStyle}
            placeholder="New password"
            value={new_password}
            onChange={(e) => setNew_password(e.target.value)}
          />
          <input
            type={hidden ? "password" : "text"}
            className={inputStyle}
            placeholder="Confirm password"
            value={password_confirmation}
            onChange={(e) => setPassword_confirmation(e.target.value)}
          />
          <div className="w-full flex justify-end">
            {hidden ? (
              <div
                onClick={() => sethidden(!hidden)}
                className="flex items-center gap-1 text-primary text-xs cursor-pointer"
              >
                <p className="">Show password</p>
                <i className="fa-regular fa-eye"></i>
              </div>
            ) : (
              <div
                onClick={() => sethidden(!hidden)}
                className="flex items-center gap-1 text-primary text-xs cursor-pointer"
              >
                <p className="">Hide password</p>
                <i className="fa-regular fa-eye-slash"></i>
              </div>
            )}
          </div>
          {loading ? (
            <div className="w-full flex justify-center">
              <div className="loader"></div>
            </div>
          ) : (
            <button className={fullButton}>Update</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
