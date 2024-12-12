import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { bigButton } from "../../styles/bigButton";

const Ship = () => {
  const auth = useSelector((state) => state.user.auth);
  return (
    <>
      {auth ? (
        <Link to="/create-shipping" className={bigButton}>
          Create a shipment
        </Link>
      ) : (
        <Link to="/login" className={bigButton}>
          Log in
        </Link>
      )}
    </>
  );
};

export default Ship;
