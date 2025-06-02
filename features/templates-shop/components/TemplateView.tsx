"use client";

import React, { useEffect, useMemo, useState } from "react";
import parse from "html-react-parser";
//Types
import { ColorPalette } from "@/shared/types/colorPalette";
import { Template } from "@/shared/types/template";
//Components
import ColorPicker from "./ColorPicker";
import Button from "@/shared/components/ui/Button";

interface TemplateViewProps {
  template: Template;
  colorPalettes: ColorPalette[];
}

interface ReplaceColorPaletteColors {
  primary: string;
  secondary: string;
}

const TemplateView: React.FC<TemplateViewProps> = ({
  template,
  colorPalettes,
}) => {
  const [activeColorPalette, setActiveColorPalette] =
    useState<ColorPalette | null>(null);

  const templateCode = useMemo(() => {
    const baseCode = template.css[0].code + template.html[0].code;

    if (!activeColorPalette) {
      return baseCode;
    }
    const primaryColor = activeColorPalette.colors.find(
      (color) => color.label === "Primary"
    )?.value.hex;
    const secondaryColor = activeColorPalette.colors.find(
      (color) => color.label === "Secondary"
    )?.value.hex;
    if (!primaryColor) {
      return baseCode;
    }
    return replaceColorPalette(baseCode, {
      primary: primaryColor,
      secondary: secondaryColor || "#000000", // Fallback to black if no secondary color is found
    });
  }, [activeColorPalette, template.css, template.html]);

  useEffect(() => {
    if (colorPalettes.length > 0) {
      setActiveColorPalette(colorPalettes[0]);
    }
  }, [colorPalettes]);

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

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-center justify-between">
        <ColorPicker
          template={template}
          colorPalettes={colorPalettes}
          activeColorPalette={activeColorPalette}
          setActiveColorPalette={setActiveColorPalette}
        />
        <Button
          text={`Buy now | £${template.price}`}
          variant="primary"
          size="small"
        />
      </div>

      {<div>{parse(templateCode)}</div>}
    </div>
  );
};

export default TemplateView;
