//Icons
import BackLink from "@/shared/components/BackLink";
import { FaArrowLeft } from "react-icons/fa";

export default function Page() {
  return (
    <div className="page">
      <BackLink text="Create new listing" icon={<FaArrowLeft />} />
      <h1>Listing creator</h1>
    </div>
  );
}
