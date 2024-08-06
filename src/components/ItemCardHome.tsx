import { Button, Heading, HStack, Image, Text, VStack } from "native-base";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";

interface IItemCardHomeProps {
  data: any;
  onPress: () => void;
}

export default function ItemCardHome({ data, onPress }: IItemCardHomeProps) {
  return (
    <TouchableOpacity onPress={onPress}>
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
            uri: data.taxon.images.main.urlThumb,
          }}
        />
        <VStack px={4} my={2}>
          <HStack justifyContent="space-between">
            <Text>
              {data?.taxon?.taxonomy?.kingdomName} -{" "}
              {data?.taxon?.taxonomy?.className}
            </Text>
            <Text>{data?.scopes?.[0]?.en}</Text>
          </HStack>
          <Heading mt={2} fontSize="lg" fontWeight="bold">
            <Text>{data?.taxon?.mainCommonName}</Text>
          </Heading>
          <Text italic>{data?.taxon?.scientificName}</Text>
          <HStack justifyContent="space-between" mt={3} alignItems="center">
            <HStack>
              <AntDesign name="arrowdown" size={20} color="#DC2626" />
              <Text ml={2}>{data?.populationTrend.title.en}</Text>
            </HStack>
            <Button width="1/3" backgroundColor="#08B364">
              <Text color="#fff" numberOfLines={1}>
                {data?.redListCategory?.title?.en}
              </Text>
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </TouchableOpacity>
  );
}
