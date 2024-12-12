import React, { useState } from "react";
import { form } from "../styles/form";
import { formHeader } from "../styles/formHeader";
import { fullButton } from "../styles/fullButton";
import { inputStyle } from "../styles/inputStyle";
import { useNavigate } from "react-router-dom";
import api from "../assets/apis/api";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [hidden, sethidden] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const data = {
    email,
    password,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/login", data);
      const token = response.data.access_token;
      localStorage.setItem("access_token", token);
      navigate(-1);
      toast.success("Login succesful");
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen bg-home bg-center bg-no-repeat bg-cover font-serif">
      <div className="w-full h-full bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center gap-10">
        <form onSubmit={handleSubmit} className={form}>
          <h1 className={formHeader}>Welcome back</h1>
          <input
            type="email"
            className={inputStyle}
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type={hidden ? "password" : "text"}
            className={inputStyle}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="w-full flex justify-end">
            {hidden ? (
              <div
                onClick={() => sethidden(!hidden)}
                className="flex items-center gap-1 text-primary text-xs cursor-pointer"
              >
                <p className="">Show password</p>
                <i class="fa-regular fa-eye"></i>
              </div>
            ) : (
              <div
                onClick={() => sethidden(!hidden)}
                className="flex items-center gap-1 text-primary text-xs cursor-pointer"
              >
                <p className="">Hide password</p>
                <i class="fa-regular fa-eye-slash"></i>
              </div>
            )}
          </div>
          {loading ? (
            <div className="w-full flex justify-center">
              <div className="loader"></div>
            </div>
          ) : (
            <button className={fullButton}>Log in</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
