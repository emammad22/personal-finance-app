import React from "react";
import { Canvas, Fill, Group, Mask, RoundedRect, rect, rrect } from "@shopify/react-native-skia";
import { Dimensions, Platform, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");
const innerDimension = 300;

// Define the outer and inner rectangles
const outer = rrect(rect(0, 0, width, height), 0, 0);
const inner = rrect(
  rect(width / 2 - innerDimension / 2, height / 2 - innerDimension / 2, innerDimension, innerDimension),
  20,
  20
);

export const Overlay = () => {
  return (
    <Canvas style={Platform.OS === "ios" ? StyleSheet.absoluteFillObject : { flex: 1 }}>
      {/* Darkened background */}
      <Fill color="rgba(0, 0, 0, 1)" />

      {/* Cut-out scanning area */}
      <Mask mask={<RoundedRect rect={inner} color="white" />}>
        <Group>
          <Fill color="black" />
        </Group>
      </Mask>
    </Canvas>
  );
};
