import { useNavigation } from "@react-navigation/native";
import {
  Column,
  Heading,
  View,
  VStack,
  Text,
  HStack,
  Divider,
  Button,
} from "native-base";
import React from "react";
import PagerView from "react-native-pager-view";
import { Dimensions, StyleSheet } from "react-native";
import { IconRankBrown } from "../../../assets/iconRank/IconRankBrown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { IconRankSliver } from "../../../assets/iconRank/IconRankSliver";
import { IconRankBronze } from "../../../assets/iconRank/IconRankBronze";

const widthItem = Dimensions.get("window").width / 2 - 24;
const renderBoxFinal = (text: string, point: string) => {
  return (
    <Column
      width={widthItem}
      justifyContent="center"
      borderWidth={1}
      borderRadius={"8px"}
      borderColor="#08B364"
      px={"16px"}
      py={"8px"}
    >
      <Text textAlign="center" mb={2}>
        {text}
      </Text>
      <Divider />
      <Text
        textAlign="center"
        mt={2}
        mb={2}
        fontWeight={"bold"}
        color="#08B364"
      >
        {point}/100
      </Text>
      <Button backgroundColor="#08B364" px={"20px"}>
        Improve
      </Button>
    </Column>
  );
};

export const Trophy = () => {
  return (
    <Column flex={1} bg="white">
      <VStack
        justifyContent="center"
        alignItems="center"
        px="4"
        safeAreaTop
        space="8"
        py="3"
        bg="#08B364"
      >
        <Heading fontSize="md" color="muted.50">
          Trophy
        </Heading>
      </VStack>
      <PagerView style={styles.container} initialPage={0}>
        <HStack
          justifyContent={"space-between"}
          alignItems={"center"}
          key="1"
          px={"24px"}
        >
          <AntDesign name="left" size={30} color="#D4D4D4" />
          <VStack alignItems="center">
            <IconRankBrown />
            <Text fontWeight="bold" fontSize={17}>
              Bronze
            </Text>
          </VStack>
          <AntDesign name="right" size={30} color="#D4D4D4" />
        </HStack>
        <HStack
          justifyContent={"space-between"}
          alignItems={"center"}
          key="2"
          px={"24px"}
        >
          <AntDesign name="left" size={30} color="#D4D4D4" />
          <VStack alignItems="center">
            <IconRankSliver />
            <Text fontWeight="bold" fontSize={17}>
              Silver
            </Text>
          </VStack>
          <AntDesign name="right" size={30} color="#D4D4D4" />
        </HStack>
        <HStack
          justifyContent={"space-between"}
          alignItems={"center"}
          key="3"
          px={"24px"}
        >
          <AntDesign name="left" size={30} color="#D4D4D4" />
          <VStack alignItems="center">
            <IconRankBronze />
            <Text fontWeight="bold" fontSize={17}>
              Bronze
            </Text>
          </VStack>
          <AntDesign name="right" size={30} color="#D4D4D4" />
        </HStack>
      </PagerView>
      <VStack px={4} mt={4}>
        <HStack space={3} justifyContent="space-between">
          {renderBoxFinal(`Choose the ${"\n"} correct answer`, "10")}
          {renderBoxFinal(`Choose the ${"\n"} right image`, "20")}
        </HStack>
        <HStack space={3} mt={4} justifyContent="space-between">
          {renderBoxFinal(`Fill in ${"\n"} words`, "40")}
          {renderBoxFinal(`Matching ${"\n"} pictures`, "50")}
        </HStack>
      </VStack>
    </Column>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height / 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
