export type Template = {
  _id: string;
  name: string;
  css: [
    {
      code: string;
    },
  ];
  html: [
    {
      code: string;
    },
  ];
  availableColorPalettes: [
    {
      _ref: string;
    },
  ];
  description: string;
  createdAt: string;
  updatedAt: string;
  content: string;
  image: string | null;
  slug: {
    current: string;
  };
  price: number;
};
