import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Column,
  VStack,
  View,
  Text,
  Image,
  ScrollView,
  HStack,
} from "native-base";

export default function NewDetail({ route }) {
  const navigation = useNavigation();
  const { data } = route.params;

  return (
    <Column flex={1} bg="white">
      <HStack px="4" py={3} safeAreaTop bg="#08B364" alignItems="center">
        <AntDesign
          onPress={() => navigation.goBack()}
          name="left"
          size={24}
          color="white"
        />
        <Text fontSize={18} color="white" ml={"35%"}>
          News
        </Text>
      </HStack>
      <ScrollView style={{ marginBottom: 40 }}>
        <VStack px="4" mt={4}>
          <Text>2023-12-23</Text>
          <Text fontSize={18} fontWeight="bold" mt={1}>
            {data?.title}
          </Text>
          <Image
            my={4}
            alt="avatar"
            height="250px"
            source={{
              uri: data?.cover,
            }}
          />
          <Text>{data?.content}</Text>
        </VStack>
      </ScrollView>
    </Column>
  );
}
