import React from "react";
import { StyleSheet, TouchableOpacity, Text, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface IGradientButtonProps {
  onPress: () => void;
  title: string;
  styleButton?: any;
}

const GradientButton = ({
  onPress,
  title,
  styleButton,
}: IGradientButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, styleButton]}
    >
      <LinearGradient
        colors={["#FF5F6D", "#FFC371"]}
        locations={[0.285, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: "hidden",
    margin: 10,
    width: Dimensions.get("window").width - 96,
  },
  gradient: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default GradientButton;
