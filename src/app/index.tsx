import { StyleSheet, View } from "react-native";

import { FrameEditor } from "@/components/FrameEditor";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FrameEditor />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#222222",
  },
});
