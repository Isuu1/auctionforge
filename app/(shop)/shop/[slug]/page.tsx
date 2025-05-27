//Icons
import BackLink from "@/shared/components/BackLink";
import { Template } from "@/shared/types/template";
import { FaArrowLeft } from "react-icons/fa";
import parse from "html-react-parser";
import { ColorPalette } from "@/shared/types/colorPalette";

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
  console.log(colorPalettes);
  console.log(template);

  const associatedColorPalette = colorPalettes.filter((palette: ColorPalette) =>
    template.availableColorPalettes.some(
      (refPalette) => refPalette._ref === palette._id
    )
  );
  console.log("Template associated color palette:", associatedColorPalette);

  return (
    <div className="page">
      <BackLink text="Template" icon={<FaArrowLeft />} />
      <div className="flex gap-4 items-center">
        <p>Theme</p>
        {associatedColorPalette.map((palette: ColorPalette) => {
          return palette.colors.map(
            (color, index: number) =>
              color.label === "Primary" && (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div
                    className="w-9 h-9 rounded-lg"
                    style={{ backgroundColor: color.value.hex }}
                  ></div>
                </div>
              )
          );
        })}
      </div>
      {template.html && (
        <div>{parse(template.html[0].code + template.css[0].code)}</div>
      )}
    </div>
  );
}
