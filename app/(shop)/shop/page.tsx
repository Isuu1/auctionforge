import BackLink from "@/shared/components/BackLink";
//Icons
import { FaArrowLeft } from "react-icons/fa";

export default function Page() {
  return (
    <div className="page">
      <BackLink text="Browse templates" icon={<FaArrowLeft />} />
      <h1>Template shop</h1>
    </div>
  );
}
