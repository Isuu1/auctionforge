//Icons
import BackLink from "@/shared/components/BackLink";
import { Template } from "@/shared/types/template";
import { FaArrowLeft } from "react-icons/fa";
import parse from "html-react-parser";
//import { ColorPalette } from "@/shared/types/colorPalette";
import ColorPicker from "@/features/templates-shop/components/ColorPicker";

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
  // const colorPalettesResponse = await fetch(
  //   `http://localhost:5245/api/colorpalette`
  // );
  // const colorPalettesData = await colorPalettesResponse.json();
  // const colorPalettes = colorPalettesData.result;
  // console.log(colorPalettes);
  // console.log(template);

  // const associatedColorPalette = colorPalettes.filter((palette: ColorPalette) =>
  //   template.availableColorPalettes.some(
  //     (refPalette) => refPalette._ref === palette._id
  //   )
  // );
  // console.log("Template associated color palette:", associatedColorPalette);

  return (
    <div className="page">
      <BackLink text="Template" icon={<FaArrowLeft />} />
      <ColorPicker template={template} />
      {template.html && (
        <div>{parse(template.html[0].code + template.css[0].code)}</div>
      )}
    </div>
  );
}
