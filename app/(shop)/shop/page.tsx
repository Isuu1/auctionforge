import BackLink from "@/shared/components/BackLink";
import { Template } from "@/shared/types/template";
//Icons
import { FaArrowLeft } from "react-icons/fa";

export default async function Page() {
  const response = await fetch("http://localhost:5245/api/templates");
  const templates: Template[] = await response.json();

  console.log(templates);

  return (
    <div className="page">
      <BackLink text="Browse templates" icon={<FaArrowLeft />} />
      <h1>Template shop</h1>
    </div>
  );
}
