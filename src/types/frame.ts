export type FrameSlot = {
  id: string;

  x: number;
  y: number;

  width: number;
  height: number;
};

export type FrameTemplate = {
  id: string;

  width: number;
  height: number;

  backgroundColor: string;

  slots: FrameSlot[];
};
