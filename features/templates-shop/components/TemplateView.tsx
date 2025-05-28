"use client";

import { ColorPalette } from "@/shared/types/colorPalette";
import { Template } from "@/shared/types/template";
import React, { useEffect, useState } from "react";
import ColorPicker from "./ColorPicker";
import parse from "html-react-parser";

interface TemplateViewProps {
  template: Template;
  colorPalettes: ColorPalette[];
}

const TemplateView: React.FC<TemplateViewProps> = ({
  template,
  colorPalettes,
}) => {
  const [activeColorPalette, setActiveColorPalette] =
    useState<ColorPalette | null>(null);

  const [templateCode, setTemplateCode] = useState<string>("");

  useEffect(() => {
    setTemplateCode(template.css[0].code + template.html[0].code);
  }, []);

  //   const replaceSecondaryColor = (html: string, color: string): string => {
  //     return html.replace(
  //       /--secondary-color:\s*#[a-fA-F0-9]{6}/g,
  //       `--secondary-color: ${color}`
  //     );
  //   };

  interface ReplaceColorPaletteColors {
    primary: string;
    secondary: string;
  }

  const replaceColorPalette = (
    html: string,
    colors: ReplaceColorPaletteColors
  ): string => {
    return html
      .replace(
        /--primary-color:\s*#[a-fA-F0-9]{6}/g,
        `--primary-color: ${colors.primary}`
      )
      .replace(
        /--secondary-color:\s*#[a-fA-F0-9]{6}/g,
        `--secondary-color: ${colors.secondary}`
      );
  };

  console.log("Active Color Palette:", activeColorPalette);

  useEffect(() => {
    if (activeColorPalette && template.html) {
      const primaryColor = activeColorPalette.colors.find(
        (color) => color.label === "Primary"
      )?.value.hex;

      const secondaryColor = activeColorPalette.colors.find(
        (color) => color.label === "Secondary"
      )?.value.hex;

      console.log("Primary Color:", primaryColor);
      console.log("Secondary Color:", secondaryColor);

      if (primaryColor) {
        const updatedHtml = replaceColorPalette(
          template.css[0].code + template.html[0].code,
          {
            primary: primaryColor,
            secondary: secondaryColor || "#000000", // Fallback to black if no secondary color is found
          }
        );
        setTemplateCode(updatedHtml);
      }
    }
  }, [activeColorPalette, templateCode, template.html, template.css]);

  useEffect(() => {
    if (colorPalettes.length > 0) {
      setActiveColorPalette(colorPalettes[0]);
    }
  }, [colorPalettes]);

  return (
    <div className="flex flex-col gap-4">
      <ColorPicker
        template={template}
        colorPalettes={colorPalettes}
        activeColorPalette={activeColorPalette}
        setActiveColorPalette={setActiveColorPalette}
      />
      {<div>{parse(templateCode)}</div>}
    </div>
  );
};

export default TemplateView;
