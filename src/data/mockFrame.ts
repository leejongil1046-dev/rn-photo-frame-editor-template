import type { FrameTemplate } from "@/types/frame";

export const mockFrame: FrameTemplate = {
  id: "basic-four-cut",

  width: 1080,
  height: 1920,

  backgroundColor: "#ffffff",

  slots: [
    {
      id: "slot-1",
      x: 90,
      y: 120,
      width: 900,
      height: 350,
    },
    {
      id: "slot-2",
      x: 90,
      y: 500,
      width: 900,
      height: 350,
    },
    {
      id: "slot-3",
      x: 90,
      y: 880,
      width: 900,
      height: 350,
    },
    {
      id: "slot-4",
      x: 90,
      y: 1260,
      width: 900,
      height: 350,
    },
  ],
};
