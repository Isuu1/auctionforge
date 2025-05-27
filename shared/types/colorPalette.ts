export type ColorPalette = {
  _id: string;
  name: string;
  colors: {
    label: string;
    value: {
      hex: string;
    };
  }[];
};
