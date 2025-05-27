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
      {template.html && (
        <div>{parse(template.html[0].code + template.css[0].code)}</div>
      )}
    </div>
  );
};

export default TemplateView;
