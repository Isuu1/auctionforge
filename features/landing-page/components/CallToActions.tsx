import React from "react";
//Styles
import styles from "./CallToActions.module.scss";
import Button from "@/shared/components/ui/Button";

const CallToActions = () => {
  return (
    <div className={styles.callToActions}>
      <h1>Craft Stunning eBay Listings with Ease</h1>
      <p>
        Discover professional templates and streamline your eBay selling
        process.
      </p>
      <div>
        <Button text="Browse templates" variant="primary" size="large" />
        <Button text="Create Listing" variant="secondary" size="large" />
      </div>
    </div>
  );
};

export default CallToActions;
