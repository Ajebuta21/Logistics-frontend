import React from "react";

const ShippingDetails = ({ formData }) => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col text-sm h-fit">
      <div className="border-b border-dashed border-primary/30 w-full flex justify-between p-2">
        <span>Package delivery will take:</span>
        <span>{formData.time_taken} days</span>
      </div>
      <div className="border-b border-dashed border-primary/30 w-full flex justify-between p-2">
        <span>Weight of package is:</span>
        <span>{formData.weight} lbs</span>
      </div>
      <div className="border-b border-dashed border-primary/30 w-full flex justify-between p-2 gap-5">
        <span>Package description:</span>
        <span>{formData.description}</span>
      </div>
      <div className="border-b border-dashed border-primary/30 w-full flex justify-between p-2">
        <span>Shipping price:</span>
        <span>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(formData.price)}
        </span>
      </div>
    </div>
  );
};

export default ShippingDetails;
