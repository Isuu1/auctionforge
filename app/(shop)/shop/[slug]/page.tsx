//Icons
import BackLink from "@/shared/components/BackLink";
import { Template } from "@/shared/types/template";
import { FaArrowLeft } from "react-icons/fa";

// export async function generateStaticParams() {
//   const result = await fetch("http://localhost:5245/api/templates").then(
//     (res) => res.json()
//   );

//   const templates = result.result;

//   return templates.map((template: Template) => ({
//     slug: template.slug.current,
//   }));
// }

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  console.log("Template slug:", slug);
  const response = await fetch(`http://localhost:5245/api/templates/${slug}`);
  const data = await response.json();
  console.log("Template data response:", data);
  const template: Template = data.result;
  console.log("Template data:", template);
  return (
    <div className="page">
      <BackLink text="Template" icon={<FaArrowLeft />} />
    </div>
  );
}
