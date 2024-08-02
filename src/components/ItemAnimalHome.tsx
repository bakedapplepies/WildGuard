import { HStack, Text, VStack } from "native-base";

interface IDataAnimal {
  name: string;
  icon: any;
  pertage: string;
}

interface IItemAnimalHome {
  data: IDataAnimal;
}

export default function ItemAnimalHome({ data }: IItemAnimalHome) {
  return (
    <HStack
      alignItems="center"
      backgroundColor="#08B364"
      justifyContent="space-between"
      py={2}
      px={4}
      rounded={"xl"}
    >
      <VStack>
        <Text fontSize={16} color="#fff">
          {data.name}
        </Text>
        <Text fontSize={30} fontWeight="bold" color="#fff">
          {data.pertage}
        </Text>
      </VStack>
      {data.icon}
    </HStack>
  );
}
