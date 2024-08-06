import { HStack, Image, Text, VStack } from "native-base";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface IDataCard {
  uri: string;
  title: string;
  description: string;
  time: string;
}

interface IItemCardHomeProps {
  data: IDataCard;
}

export default function ItemCardNew({ data }: IItemCardHomeProps) {
  const navigation = useNavigation();
  return (
    <VStack
      borderRadius={"16px"}
      borderWidth={1}
      borderColor="#00000029"
      mb={4}
    >
      <Image
        alt="avatar"
        borderTopLeftRadius="16px"
        borderTopRightRadius="16px"
        height="150px"
        source={{
          uri: data.cover,
        }}
      />
      <VStack px={4} my={2}>
        <Text color="#000000">{data.time}</Text>
        <Text fontSize={18} fontWeight="bold" mt={1}>
          {data.title}
        </Text>
        <Text numberOfLines={5}>{data.description}</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("NewDetail", {
              data: data,
            })
          }
        >
          <HStack justifyContent="flex-end" alignItems="center">
            <Text mr={1} color="#A3A3A3">
              Read more
            </Text>
            <AntDesign name="arrowright" size={20} color="#A3A3A3" />
          </HStack>
        </TouchableOpacity>
      </VStack>
    </VStack>
  );
}
