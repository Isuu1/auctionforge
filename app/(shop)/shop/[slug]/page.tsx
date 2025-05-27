//Icons
import { FaArrowLeft } from "react-icons/fa";
//Components
import BackLink from "@/shared/components/BackLink";
import TemplateView from "@/features/templates-shop/components/TemplateView";
//Types
import { Template } from "@/shared/types/template";

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
  //Get the template by slug
  const response = await fetch(`http://localhost:5245/api/templates/${slug}`);
  const data = await response.json();
  const template: Template = data.result[0];

  //Get color palettes
  const colorPalettesResponse = await fetch(
    `http://localhost:5245/api/colorpalette`
  );
  const colorPalettesData = await colorPalettesResponse.json();
  const colorPalettes = colorPalettesData.result;

  return (
    <div className="page">
      <BackLink text="Template" icon={<FaArrowLeft />} />

      <TemplateView template={template} colorPalettes={colorPalettes} />
    </div>
  );
}
