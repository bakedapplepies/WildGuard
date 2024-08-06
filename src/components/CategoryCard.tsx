import React from "react";
import { AspectRatio, Heading, Row } from "native-base";
import { ImageBackground, ImageSourcePropType } from "react-native";
import { CategoryModel } from "../mockup/data";

export type Props = {
  data: CategoryModel;
};

const CategoryCard = ({ data }: Props) => {
  return (
    <Row alignItems="center" flex={1} space="4" bg="muted.800" rounded="xl">
      <AspectRatio ratio={1} size="16" rounded="xl" overflow="hidden">
        <ImageBackground source={{ uri: data.image }} />
      </AspectRatio>
      <Heading flex={1} fontSize="sm" color="white" mr="3">
        {data.title}
      </Heading>
    </Row>
  );
};

export default CategoryCard;
