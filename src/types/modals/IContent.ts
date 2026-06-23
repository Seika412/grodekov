interface IContentImage {
  type: "slider";
  images: string[];
}

interface IContentText {
  type: "text";
  value: string;
}

export type IContent = IContentImage | IContentText;
