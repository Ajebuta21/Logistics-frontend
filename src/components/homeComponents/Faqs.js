import React, { useState } from "react";

const faq = [
  {
    question: "What shipping options does GlobeMerge Logistics offer?",
    answer:
      "We offer a variety of shipping options including air, road, and ocean freight to cater to different needs and preferences. Our services are designed to provide the most efficient and cost-effective solutions for your shipping requirements.",
  },
  {
    question: "How do I track my shipment?",
    answer:
      "You can track your shipment using our advanced tracking system. Simply enter your tracking number on our website, and you will receive real-time updates on the status of your shipment, from dispatch to delivery.",
  },
  {
    question: "What is the maximum weight limit for shipments?",
    answer:
      "The maximum weight limit for shipments with GlobeMerge Logistics is 150 lbs. If you have special requirements or need assistance with larger shipments, please contact our support team for tailored solutions.",
  },
  {
    question: "How do I request a shipping quote?",
    answer:
      "Requesting a shipping quote is easy. You can fill out the quote request form on our website with details about your shipment, including the origin, destination, weight, and dimensions. Our team will get back to you with a competitive quote promptly.",
  },
  {
    question: "Are there any items that cannot be shipped?",
    answer:
      "Yes, there are certain items that are prohibited from being shipped due to safety and regulatory reasons. These include hazardous materials, perishable goods, and items restricted by international trade regulations. Please refer to our shipping guidelines for a comprehensive list of prohibited items.",
  },
  {
    question: "What are your customer service hours?",
    answer:
      "Our customer service team is available from Monday to Friday, 9 AM to 6 PM (local time). You can reach us via phone, email, or live chat for any inquiries or assistance you need.",
  },
  {
    question: "How do I handle customs and import duties?",
    answer:
      "Our experienced team will assist you with all customs and import duty requirements. We handle the necessary documentation and ensure compliance with international regulations to facilitate smooth customs clearance for your shipments.",
  },
  {
    question:
      "Can I change the delivery address after the shipment has been dispatched?",
    answer:
      "Changing the delivery address after dispatch can be challenging, but we will do our best to accommodate your request. Please contact our customer service team as soon as possible with your tracking number and the new delivery address. Additional fees may apply.",
  },
  {
    question: "Do you offer insurance for shipments?",
    answer:
      "Yes, we offer insurance options to provide extra protection for your valuable shipments. You can choose the level of coverage that best suits your needs during the booking process. Our team can provide more details about the insurance policies available.",
  },
];

const Faqs = () => {
  const [openItems, setOpenItems] = useState(new Array(faq.length).fill(false));

  const toggleItem = (index) => {
    const updatedOpenItems = openItems.map((item, i) =>
      i === index ? !item : false
    );
    setOpenItems(updatedOpenItems);
  };
  return (
    <div className="w-full flex flex-col">
      {faq.map((item, index) => (
        <div
          onClick={() => toggleItem(index)}
          key={index}
          className={`p-2 w-full py-2 z-10 cursor-pointer ${
            openItems[index]
              ? "border-primary border-l-4"
              : "border-transparent"
          } transition-all ease-in-out`}
        >
          <div className="w-full flex items-center justify-between text-black font-semibold">
            <h4 className="w-5/6 ">{item.question}</h4>
            {openItems[index] ? "-" : "+"}
          </div>
          <p
            className={`text-primary ${
              openItems[index] ? "h-max" : "h-0 opacity-0"
            } transition-all ease-in-out text-xs`}
          >
            {item.answer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Faqs;
