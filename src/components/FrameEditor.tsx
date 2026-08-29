import { Canvas, Fill, Rect } from "@shopify/react-native-skia";
import { useWindowDimensions } from "react-native";

import { mockFrame } from "@/data/mockFrame";

export function FrameEditor() {
  const { width: screenWidth } = useWindowDimensions();

  const canvasWidth = screenWidth - 40;

  const displayScale = canvasWidth / mockFrame.width;

  const canvasHeight = mockFrame.height * displayScale;

  return (
    <Canvas
      style={{
        width: canvasWidth,
        height: canvasHeight,
      }}
    >
      <Fill color={mockFrame.backgroundColor} />

      {mockFrame.slots.map((slot) => (
        <Rect
          key={slot.id}
          x={slot.x * displayScale}
          y={slot.y * displayScale}
          width={slot.width * displayScale}
          height={slot.height * displayScale}
          color="#eeeeee"
        />
      ))}
    </Canvas>
  );
}
