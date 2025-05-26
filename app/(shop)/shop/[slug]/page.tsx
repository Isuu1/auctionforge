//Icons
import BackLink from "@/shared/components/BackLink";
import { Template } from "@/shared/types/template";
import { FaArrowLeft } from "react-icons/fa";
import parse from "html-react-parser";

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
  const template: Template = data.result[0];
  console.log("Template data:", template);
  console.log("Template HTML content:", template.html);
  return (
    <div className="page">
      <BackLink text="Template" icon={<FaArrowLeft />} />

      {template.html && (
        <div className="template-render">
          {parse(template.html[0].code + template.css[0].code)}
        </div>
      )}
    </div>
  );
}
