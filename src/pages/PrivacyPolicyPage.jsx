import React from "react";
import Footer from "../components/footers/Footer";

const PrivacyPolicyPage = () => {
  return (
    <div className="w-full flex flex-col font-serif">
      <div className="w-full h-60 bg-home bg-center bg-no-repeat bg-cover">
        <div className="w-full h-full bg-black/10 backdrop-blur-sm p-10 flex items-end">
          <h1 className="text-2xl text-white font-bold">Privacy Policy</h1>
        </div>
      </div>
      <div className="w-full flex flex-col p-10 gap-10 text-sm">
        <h2 className="font-semibold text-lg text-primary">Introduction</h2>
        <p>
          At Mockup Logistics, we are committed to protecting your privacy and
          ensuring that your personal information is handled in a safe and
          responsible manner. This Privacy Policy outlines how we collect, use,
          disclose, and protect your information when you visit our website and
          use our services.
        </p>
        <h2 className="font-semibold text-lg text-primary">
          Information We Collect
        </h2>
        <p className="-mt-5">
          We may collect the following types of information:
        </p>
        <h3 className="font-semibold -mt-5">Personal Information</h3>
        <ul className="list-disc leading-6 -mt-5 list-inside">
          <li>
            Contact Information: Name, address, phone number, email address.
          </li>
          <li>
            Account Information: Username, password, and other credentials for
            accessing our services.
          </li>
          <li>
            Payment Information: Credit card details, billing address, and other
            payment-related information.
          </li>
          <li>
            Shipping Information: Recipient’s name, address, phone number, and
            email address.
          </li>
        </ul>
        <h3 className="font-semibold -mt-5">Non-Personal Information</h3>
        <ul className="list-disc leading-6 -mt-5 list-inside">
          <li>
            Technical Information: IP address, browser type, operating system,
            referring URLs, and other technical information collected through
            cookies and other tracking technologies.
          </li>
          <li>
            Usage Information: Pages visited, time spent on the site, links
            clicked, and other interactions with our website and services.
          </li>
        </ul>
        <h2 className="font-semibold text-lg text-primary">
          How We Use Your Information
        </h2>
        <p className="-mt-5">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc leading-6 -mt-5 list-inside">
          <li>
            To Provide and Improve Our Services: Process shipments, manage
            accounts, process payments, and enhance our services.
          </li>
          <li>
            To Communicate with You: Send updates, promotional materials, and
            respond to your inquiries and customer service requests.
          </li>
          <li>
            To Ensure Security: Protect against fraud, unauthorized
            transactions, and other liabilities.
          </li>
          <li>
            To Comply with Legal Obligations: Adhere to applicable laws,
            regulations, and legal processes.
          </li>
        </ul>
        <h2 className="font-semibold text-lg text-primary">
          Sharing Your Information
        </h2>
        <p className="-mt-5">
          We do not sell, trade, or otherwise transfer your personal information
          to outside parties except as described below:
        </p>
        <ul className="list-disc leading-6 -mt-5 list-inside">
          <li>
            Service Providers: We may share your information with third-party
            service providers who assist us in operating our website, conducting
            our business, or providing services to you. These providers are
            contractually obligated to protect your information and use it only
            for the purposes for which it was disclosed.
          </li>
          <li>
            Business Transfers: In the event of a merger, acquisition, or sale
            of all or a portion of our assets, your information may be
            transferred to the acquiring entity.
          </li>
          <li>
            Legal Requirements: We may disclose your information if required to
            do so by law or in response to valid requests by public authorities.
          </li>
        </ul>
        <h2 className="font-semibold text-lg text-primary">Data Security</h2>
        <p className="-mt-5">
          We implement a variety of security measures to maintain the safety of
          your personal information. These measures include:
        </p>
        <ul className="list-disc leading-6 -mt-5 list-inside">
          <li>
            Encryption: Data transmitted between your browser and our servers is
            encrypted using Secure Socket Layer (SSL) technology.
          </li>
          <li>
            Access Controls: Access to personal information is restricted to
            authorized personnel only.
          </li>
          <li>
            Regular Audits: We conduct regular audits of our security practices
            to ensure ongoing protection of your information.
          </li>
        </ul>
        <h2 className="font-semibold text-lg text-primary">
          Cookies and Tracking Technologies
        </h2>
        <p className="-mt-5">
          Our website uses cookies and other tracking technologies to enhance
          your experience, gather general visitor information, and track visits
          to our website. You can choose to disable cookies through your browser
          settings, but this may affect the functionality of our website.
        </p>
        <h2 className="font-semibold text-lg text-primary">
          Changes to This Privacy Policy
        </h2>
        <p className="-mt-5">
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or applicable laws. Any changes will be posted on
          this page, and the date at the top of the policy will indicate when
          the latest changes were made.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
