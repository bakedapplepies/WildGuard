import { StyleSheet } from "react-native";
import React from "react";
import { Center, Image, VStack } from "native-base";
import { IconLoading } from "../../assets/icon/IconLoading";

export const LoadingAnimation = () => {
  return (
    <Center flex={1} style={styles.container}>
      <VStack space={2} justifyContent="center">
        <Image
          my={4}
          alt="avatar"
          height="250px"
          source={require("../../assets/loading.gif")}
        />
      </VStack>
    </Center>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    position: "absolute",
    zIndex: 1,
    width: "100%",
    height: "100%",
  },
});
