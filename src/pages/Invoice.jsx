import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { smallButton } from "../styles/smallButton";
import Logo from "../assets/logos/gml.png";
import { Link } from "react-router-dom";

const PrintInvoice = React.forwardRef(({ items }, ref) => (
  <div
    className="printable-content w-[400px] p-5 flex flex-col gap-2 border font-serif text-lg"
    ref={ref}
  >
    <div className="w-full flex justify-center py-5">
      <img src={Logo} alt="" className="w-32" />
    </div>
    <h2 className="font-semibold mb-2 text-center text-2xl">Invoice</h2>
    {items && (
      <>
        <h2 className="text-primary">
          Tracking number:{" "}
          <span className="text-black">{items.tracking_id}</span>
        </h2>
        <span className="w-full text-primary">
          Shipping cost:{" "}
          <span className="text-black">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(items.price)}
          </span>
        </span>
        <div className="w-full flex flex-col gap-5">
          <div className="w-full p-5 flex flex-col gap-1 border">
            <span className="text-primary">
              From: <span className="text-black">{items.origin}</span>
            </span>
            <span className="text-primary">
              Sent from:{" "}
              <span className="text-black">{items.senders_name}</span>
            </span>
            <span className="text-primary">
              Senders contact:{" "}
              <span className="text-black">{items.senders_number}</span>
            </span>
            <span className="text-primary">
              Senders email:{" "}
              <span className="text-black">{items.senders_email}</span>
            </span>
          </div>
          <div className="w-full p-5 flex flex-col gap-1 border">
            <span className="text-primary">
              To: <span className="text-black">{items.destination}</span>
            </span>
            <span className="text-primary">
              Sent to:{" "}
              <span className="text-black">{items.recievers_name}</span>
            </span>
            <span className="text-primary">
              Recievers contact:{" "}
              <span className="text-black">{items.recievers_number}</span>
            </span>
            <span className="text-primary">
              Recievers email:{" "}
              <span className="text-black">{items.recievers_email}</span>
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2">
          <span className="w-full text-primary">
            Time for delivery:{" "}
            <span className="text-black">{items.time_taken} days.</span>
          </span>
          <span className="w-full text-primary ">
            Weight: <span className="text-black">{items.weight} lbs</span>
          </span>
          <span className="w-full text-primary">
            Description:{" "}
            <span className="text-black">{items.description}.</span>
          </span>
          <span className="w-full text-primary">
            Created at:{" "}
            <span className="text-black">
              {new Date(items.created_at).toLocaleString()}.
            </span>
          </span>
        </div>
      </>
    )}
  </div>
));

const Invoice = () => {
  const invoiceRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => invoiceRef.current,
  });

  const [items, setItems] = useState([]);

  useEffect(() => {
    const getPackage = () => {
      const item = JSON.parse(sessionStorage.getItem("package"));
      setItems(item);
    };
    getPackage();
  }, []);

  return (
    <div className="w-full pt-16">
      {items && (
        <div className="w-full flex flex-col py-10 items-center gap-5">
          <p className="text-xs text-gray-500 text-center">
            The package invoice has been generated
          </p>
          <PrintInvoice items={items} ref={invoiceRef} />
          <div className="flex gap-5 items-center">
            <button onClick={handlePrint} className={`${smallButton} no-print`}>
              Print Invoice
            </button>
            <Link to="/" className={`${smallButton} no-print`}>
              Back to home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Invoice;
