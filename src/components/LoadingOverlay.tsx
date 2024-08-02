import { StyleSheet } from "react-native";
import React from "react";
import { Center, VStack } from "native-base";
import { IconLoading } from "../../assets/icon/IconLoading";

const LoadingOverlay = () => {
  return (
    <Center flex={1} style={styles.container}>
      <VStack space={2} justifyContent="center">
        <IconLoading />
      </VStack>
    </Center>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    position: "absolute",
    zIndex: 1,
    width: "100%",
    height: "100%",
  },
});
