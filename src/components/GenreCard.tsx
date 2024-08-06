import React from "react";
import { AspectRatio, HStack, Heading, Image, VStack } from "native-base";
import { GenreModel } from "../mockup/data";

type Props = {
  data: GenreModel;
};

const GenreCard = ({ data }: Props) => {
  return (
    <AspectRatio ratio={16 / 9} flex={1} overflow="hidden" rounded="xl">
      <HStack bg={data.color} justifyContent="space-between">
        <Heading maxW="60%" fontSize="lg" color="white" m="2.5" zIndex={3}>
          {data.title}
        </Heading>
        {/* <VStack w="full" h="full" position="absolute" bg="rgba(0,0,0,0.3)" zIndex={2} /> */}
        <AspectRatio
          ratio={1}
          h="90%"
          rounded="xl"
          shadow="4"
          position="absolute"
          top="5"
          right={-20}
        >
          <VStack w="100%" h="100%" rounded="xl">
            <Image
              w="100%"
              h="100%"
              source={{ uri: data.image }}
              style={{
                transform: [{ rotate: "30deg" }],
                borderRadius: 20,
              }}
            />
          </VStack>
        </AspectRatio>
      </HStack>
    </AspectRatio>
  );
};

export default GenreCard;
