import { useNavigation } from "@react-navigation/native";
import { Column, FlatList, Heading, HStack, Text, VStack } from "native-base";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";

const Games = () => {
  const navigation = useNavigation();

  const listGame = [
    {
      icon: <Ionicons name="image" size={24} color="#08B364" />,
      name: "Choose the correct answer",
      navigation: "DetailQuestion",
    },
    {
      icon: <Ionicons name="images" size={24} color="#08B364" />,
      name: "Choose the right image",
      navigation: "DetailQuestion",
    },
    {
      icon: <Ionicons name="pencil-outline" size={24} color="#08B364" />,
      name: "Fill in words",
      navigation: "DetailQuestion",
    },
    {
      icon: <Ionicons name="magnet" size={24} color="#08B364" />,
      name: "Matching pictures",
      navigation: "DetailQuestion",
    },
  ];

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
          Games
        </Heading>
      </VStack>
      <FlatList
        px={4}
        showsVerticalScrollIndicator={false}
        marginTop={5}
        data={listGame}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.navigation)}
          >
            <HStack
              alignItems="center"
              py={3}
              borderBottomWidth={1}
              borderBottomColor="#E5E5E5"
              justifyContent="space-between"
            >
              <HStack alignItems="center">
                {item.icon}
                <Text ml={2} fontWeight="bold" fontSize={18}>
                  {item.name}
                </Text>
              </HStack>
              <AntDesign name="right" size={20} color="#D4D4D4" />
            </HStack>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </Column>
  );
};

export default Games;
