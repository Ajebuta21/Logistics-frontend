import React from "react";
import Footer from "../components/footers/Footer";

const TermsPage = () => {
  return (
    <div className="w-full flex flex-col font-serif">
      <div className="w-full h-60 bg-home bg-center bg-no-repeat bg-cover">
        <div className="w-full h-full bg-black/10 backdrop-blur-sm p-10 flex items-end">
          <h1 className="text-2xl text-white font-bold">
            Terms and Conditions
          </h1>
        </div>
      </div>
      <div className="w-full flex flex-col p-10 gap-10 text-sm">
        <h2 className="font-semibold text-lg text-primary">Introduction</h2>
        <p>
          Welcome to Mockup Logistics. These terms and conditions outline the
          rules and regulations for the use of Mockup Logistics's website and
          services. By accessing this website and using our services, you accept
          these terms and conditions in full. If you do not agree with these
          terms, please do not use our website or services.
        </p>
        <h2 className="font-semibold text-lg text-primary">Definitions</h2>
        <ul className="list-disc leading-6 -mt-5 list-inside">
          <li>"Company," "We," "Our," and "Us" refers to Mockup Logistics.</li>
          <li>
            "User," "You," and "Your" refers to the person accessing our website
            and using our services.
          </li>
          <li>
            "Services" refers to the logistics and shipping services provided by
            Mockup Logistics.
          </li>
        </ul>
        <h2 className="font-semibold text-lg text-primary">
          Use of Our Services
        </h2>
        <h3 className="font-semibold -mt-5">Eligibility</h3>
        <p className="-mt-5">
          You must be at least 18 years old to use our services. By using our
          services, you represent and warrant that you meet this eligibility
          requirement.
        </p>
        <h3 className="font-semibold -mt-5">Account Registration</h3>
        <p className="-mt-5">
          To use certain services, you may need to create an account. You agree
          to provide accurate and complete information during the registration
          process and to keep your account information up to date. You are
          responsible for maintaining the confidentiality of your account
          credentials and for all activities that occur under your account.
        </p>
        <h3 className="font-semibold -mt-5">Prohibited Uses</h3>
        <p className="-mt-5">
          You agree not to use our services for any unlawful or prohibited
          activities, including but not limited to:
        </p>
        <ul className="list-disc leading-6 -mt-5 list-inside">
          <li>
            "Shipping prohibited items such as hazardous materials, illegal
            substances, and other restricted goods.
          </li>
          <li>Violating any applicable laws or regulations.</li>
          <li>
            Engaging in fraudulent activities or misrepresenting information.
          </li>
        </ul>
        <h2 className="font-semibold text-lg text-primary">Shipping Terms</h2>
        <h3 className="font-semibold -mt-5">Shipping Options</h3>
        <p className="-mt-5">
          We offer various shipping options, including air, road, and ocean
          freight. The availability of these options may depend on the
          destination, weight, and dimensions of the shipment.
        </p>
        <h3 className="font-semibold -mt-5">Weight Limits</h3>
        <p className="-mt-5">
          The maximum weight limit for shipments is 150 lbs. If you have special
          requirements or need assistance with larger shipments, please contact
          our support team.
        </p>
        <h3 className="font-semibold -mt-5">Delivery Timeframes</h3>
        <p className="-mt-5">
          Delivery timeframes are estimates and may vary due to factors beyond
          our control, such as weather conditions, customs delays, and other
          unforeseen circumstances.
        </p>
        <h2 className="font-semibold text-lg text-primary">Payment Terms</h2>
        <h3 className="font-semibold -mt-5">Payment Methods</h3>
        <p className="-mt-5">
          We accept various payment methods, including credit cards, debit
          cards, and other electronic payment options. Payment must be made in
          full before shipment processing.
        </p>
        <h3 className="font-semibold -mt-5">Pricing</h3>
        <p className="-mt-5">
          All prices are subject to change without notice. We reserve the right
          to modify our prices at any time. Any changes in pricing will be
          communicated to you before processing your shipment.
        </p>
        <h2 className="font-semibold text-lg text-primary">Liability</h2>
        <h3 className="font-semibold -mt-5">Limitation of Liability</h3>
        <p className="-mt-5">
          To the fullest extent permitted by law, Mockup Logistics shall not be
          liable for any indirect, incidental, special, or consequential damages
          arising from the use of our services or the inability to use our
          services, even if we have been advised of the possibility of such
          damages.
        </p>
        <h3 className="font-semibold -mt-5">Insurance</h3>
        <p className="-mt-5">
          We offer insurance options to provide extra protection for your
          shipments. You can choose the level of coverage that best suits your
          needs during the booking process. Our team can provide more details
          about the insurance policies available.
        </p>
        <h2 className="font-semibold text-lg text-primary">Indemnification</h2>
        <p className="-mt-5">
          You agree to indemnify, defend, and hold harmless Mockup Logistics and
          its affiliates, officers, directors, employees, and agents from and
          against any and all claims, liabilities, damages, losses, and
          expenses, including reasonable attorney's fees, arising out of or in
          any way connected with your access to or use of our services.
        </p>
        <h2 className="font-semibold text-lg text-primary">
          Intellectual Property
        </h2>
        <p className="-mt-5">
          All content, trademarks, logos, and other intellectual property on our
          website are the property of Mockup Logistics or its licensors. You may
          not use, reproduce, distribute, or create derivative works from any of
          the content without our prior written consent.
        </p>
        <h2 className="font-semibold text-lg text-primary">Governing Law</h2>
        <p className="-mt-5">
          These terms and conditions are governed by and construed in accordance
          with the laws of the jurisdiction in which Mockup Logistics operates.
          You agree to submit to the exclusive jurisdiction of the courts
          located in that jurisdiction for the resolution of any disputes.
        </p>
        <h2 className="font-semibold text-lg text-primary">
          Changes to These Terms
        </h2>
        <p className="-mt-5">
          We may update these terms and conditions from time to time to reflect
          changes in our practices or for other operational, legal, or
          regulatory reasons. Any changes will be posted on this page, and the
          date at the top will indicate when the latest changes were made.
        </p>
        <h2 className="font-semibold text-lg text-primary">Contact Us</h2>
        <p className="-mt-5">
          If you have any questions about these terms and conditions, please
          contact us at{" "}
          <span className="text-blue-400">support@mockuplogistics.com</span> or
          through our support channel.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default TermsPage;
