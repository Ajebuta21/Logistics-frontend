import React from "react";
import Footer from "../components/footers/Footer";
import Faqs from "../components/homeComponents/Faqs";
import Stats from "../components/homeComponents/Stats";

const whyUs = [
  {
    title: "Tailored Solutions",
    body: "At Mockup Logistics, we understand that every shipment is unique. We work closely with you to develop customized shipping solutions that align with your specific requirements, including distance, weight, and delivery timelines.",
  },
  {
    title: "Expertise and Experience",
    body: " With years of experience in the logistics industry, our team of professionals possesses the knowledge and skills to handle all aspects of shipping, from documentation and customs clearance to warehousing and final delivery. We stay abreast of industry trends and regulations to provide you with the best possible service.",
  },
  {
    title: "Advanced Technology",
    body: "We leverage cutting-edge technology to enhance our logistics operations. Our real-time tracking system allows you to monitor your shipments throughout the entire journey, providing peace of mind and full visibility. Additionally, our data-driven approach helps us optimize routes and reduce transit times.",
  },
  {
    title: "Customer Commitment",
    body: "Customer satisfaction is at the heart of everything we do. We are committed to providing exceptional service, clear communication, and proactive support at every stage of the shipping process. Our goal is to build lasting relationships with our clients based on trust, reliability, and mutual success.",
  },
  {
    title: "Sustainability",
    body: "Mockup Logistics is committed to sustainable practices and reducing our environmental impact. We continuously explore innovative solutions to minimize our carbon footprint, from optimizing transportation routes to utilizing eco-friendly packaging materials.",
  },
];
const AboutPage = () => {
  return (
    <div className="w-full flex flex-col font-serif">
      <div className="w-full h-60 bg-home bg-center bg-no-repeat bg-cover">
        <div className="w-full h-full bg-black/10 backdrop-blur-sm p-10 flex items-end">
          <h1 className="text-2xl text-white font-bold">
            About Mockup Logistics
          </h1>
        </div>
      </div>
      <div className="w-full flex flex-col p-10 gap-10 text-sm">
        <p>
          Welcome to Mockup Logistics, your trusted partner in global shipping
          and logistics solutions. At Mockup Logistics, we are dedicated to
          providing seamless, reliable, and efficient shipping services tailored
          to meet the unique needs of our diverse clientele. Our mission is to
          ensure your products reach their destinations safely, promptly, and
          cost-effectively, no matter the distance or the mode of transport
          required.
        </p>
        <h2 className="font-semibold text-lg text-primary">Our Services</h2>
        <p>
          At Mockup Logistics, we pride ourselves on offering a comprehensive
          range of shipping solutions to meet the diverse needs of our clients.
          Our services are designed to ensure the safe, efficient, and timely
          delivery of your goods, regardless of their destination. Below is a
          detailed description of the three primary shipping services we offer:
        </p>
        <div className="w-full flex flex-row max-lg:flex-col gap-10">
          <div className="w-full bg-air bg-center bg-no-repeat bg-cover h-60 shadow-lg">
            <div className="w-full h-full bg-black/50 flex flex-col items-center justify-center gap-2">
              <h3 className="text-2xl text-white font-bold">Air Freight</h3>
            </div>
          </div>
          <div className="w-full">
            <h2 className="font-semibold text-lg text-primary">Air Freight</h2>
            When time is of the essence, our air freight services are the
            perfect solution. We offer expedited shipping options to ensure your
            products are delivered swiftly and securely to any destination
            worldwide. Our partnerships with leading airlines allow us to
            provide competitive rates and flexible schedules to meet your
            deadlines.
          </div>
        </div>
        <div className="w-full flex flex-row-reverse max-lg:flex-col gap-10">
          <div className="w-full bg-land bg-center bg-no-repeat bg-cover h-60 shadow-lg">
            <div className="w-full h-full bg-black/50 flex flex-col items-center justify-center gap-2">
              <h3 className="text-2xl text-white font-bold">Road Freight</h3>
            </div>
          </div>
          <div className="w-full">
            <h2 className="font-semibold text-lg text-primary">Road Freight</h2>
            For domestic and regional deliveries, our road freight services
            offer a dependable and economical solution. Whether it's a single
            parcel or a full truckload, we have the capacity and expertise to
            handle shipments of various sizes and complexities. Our extensive
            network of carriers and state-of-the-art tracking technology ensures
            timely and transparent delivery.
          </div>
        </div>
        <div className="w-full flex flex-row max-lg:flex-col gap-10">
          <div className="w-full bg-sea bg-center bg-no-repeat bg-cover h-60 shadow-lg">
            <div className="w-full h-full bg-black/50 flex flex-col items-center justify-center gap-2">
              <h3 className="text-2xl text-white font-bold">Ocean Freight</h3>
            </div>
          </div>
          <div className="w-full">
            <h2 className="font-semibold text-lg text-primary">
              Ocean Freight
            </h2>
            When you need to move large quantities of goods over long distances,
            our ocean freight services are the ideal choice. We offer both full
            container load (FCL) and less than container load (LCL) options,
            providing flexibility and cost savings for shipments of all sizes.
            With our global network of shipping partners, we navigate the
            complexities of international shipping to deliver your cargo
            efficiently and safely.
          </div>
        </div>
        <h2 className="font-semibold text-lg text-primary">Why Choose Us?</h2>
        <div className="w-full grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item) => {
            return (
              <div className="w-full p-5 flex flex-col bg-gray-100 gap-5 shadow-lg">
                <h3 className="font-semibold text-primary text-lg">
                  {item.title}
                </h3>
                <span className="text-sm text-gray-500">{item.body}</span>
              </div>
            );
          })}
        </div>
        <h2 className="font-semibold text-lg text-primary">Our Statistics</h2>
        <Stats />
        <h2 className="font-semibold text-lg text-primary">
          Frequently Asked Questions
        </h2>
        <Faqs />
        <h2 className="font-semibold text-lg text-primary">
          Maximum Weight Limit
        </h2>
        <p>
          To ensure the safety and efficiency of our shipping services, we have
          a maximum weight limit of 150 lbs per shipment. This allows us to
          provide consistent, high-quality service across all transportation
          modes—air, road, and ocean. If you have special requirements or need
          assistance with larger shipments, our team is here to help you find
          the best solution.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
