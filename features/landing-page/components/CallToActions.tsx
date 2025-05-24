import React from "react";
//Components
import Button from "@/shared/components/ui/Button";

const CallToActions: React.FC = () => {
  return (
    <div className="container flex flex-col gap-4 items-center justify-center text-center bg-gray-900 p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold">
        Craft Stunning eBay Listings with Ease
      </h1>
      <p>
        Discover professional templates and streamline your eBay selling
        process.
      </p>
      <div className="flex gap-4 mt-5">
        <Button text="Browse templates" variant="primary" size="large" />
        <Button text="Create Listing" variant="secondary" size="large" />
      </div>
    </div>
  );
};

export default CallToActions;
