import React, { useState } from "react";
import { form } from "../styles/form";
import { formHeader } from "../styles/formHeader";
import { fullButton } from "../styles/fullButton";
import { inputStyle } from "../styles/inputStyle";
import { Link, useNavigate } from "react-router-dom";
import api from "../assets/apis/api";
import toast from "react-hot-toast";

const SignupPage = () => {
  const [loading, setLoading] = useState(false);
  const [hidden, sethidden] = useState(true);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const navigate = useNavigate();
  const data = {
    firstname,
    lastname,
    email,
    password,
    password_confirmation,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/signup", data);
      toast.success(response.data.message);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full h-screen bg-home bg-center bg-no-repeat bg-cover font-serif">
      <div className="w-full h-full bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center gap-10">
        <form onSubmit={handleSubmit} className={form}>
          <h1 className={formHeader}>Create account</h1>
          <div className="w-full flex gap-2">
            <input
              type="text"
              className={inputStyle}
              placeholder="First name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              type="text"
              className={inputStyle}
              placeholder="Last name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <input
            type="email"
            className={inputStyle}
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="w-full flex gap-2">
            <input
              type={hidden ? "password" : "text"}
              className={inputStyle}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type={hidden ? "password" : "text"}
              className={inputStyle}
              placeholder="Confirm password"
              value={password_confirmation}
              onChange={(e) => setPassword_confirmation(e.target.value)}
            />
          </div>
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
            <button className={fullButton}>Sign up</button>
          )}
          <p className="text-gray-500 text-center text-xs">
            If you already have an account.{" "}
            <Link to={"/login"} className="text-primary">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
