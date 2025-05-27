"use client";

import { ColorPalette } from "@/shared/types/colorPalette";
import { Template } from "@/shared/types/template";
import React, { useEffect, useState } from "react";

interface ColorPickerProps {
  template: Template;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ template }) => {
  const [colorPalettes, setColorPalettes] = useState<ColorPalette[]>([]);
  const [activeColorPalette, setActiveColorPalette] =
    useState<ColorPalette | null>(null);

  useEffect(() => {
    if (colorPalettes.length > 0) {
      setActiveColorPalette(colorPalettes[0]);
    }
  }, [colorPalettes]);

  useEffect(() => {
    const fetchColorPalettes = async () => {
      const response = await fetch("http://localhost:5245/api/colorpalette");
      const data = await response.json();
      setColorPalettes(data.result);
      return data.result;
    };
    fetchColorPalettes();
  }, []);

  const associatedColorPalettes = colorPalettes.filter(
    (palette: ColorPalette) =>
      template.availableColorPalettes.some(
        (refPalette) => refPalette._ref === palette._id
      )
  );

  return (
    <div className="flex gap-4 items-center">
      <p>Theme</p>
      {associatedColorPalettes.map((palette: ColorPalette) => {
        return palette.colors.map(
          (color, index: number) =>
            color.label === "Primary" && (
              <div
                key={index}
                className={`transition-all cursor-pointer w-9 h-9 flex flex-col items-center gap-2 border-3 rounded-lg ${activeColorPalette?._id === palette._id ? "border-yellow-500" : "border-transparent"}`}
                onClick={() => setActiveColorPalette(palette)}
                style={{ backgroundColor: color.value.hex }}
              ></div>
            )
        );
      })}
    </div>
  );
};

export default ColorPicker;
