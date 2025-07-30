// import React from "react";
import { PricingTable } from "@clerk/clerk-react";

const Subscription = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h1>
        <p className="text-gray-600 text-md md:text-lg">
          Upgrade to unlock premium AI tools and enjoy more features with Nest.ai.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-3xl">
          <PricingTable />
        </div>
      </div>
    </section>
  );
};

export default Subscription;
