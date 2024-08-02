import { TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Text } from "native-base";

type Props = {
  active?: boolean;
  onPress?: () => void;
  title: string;
};

const TagButton = (props: Props) => {
  const [active, setActive] = useState(false);

  const onPress = () => {
    setActive(!active);
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default TagButton;
