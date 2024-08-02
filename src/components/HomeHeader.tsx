import React from "react";
import { Heading, Icon, Input, VStack } from "native-base";
import { IconSearch } from "../../assets/icon/IconSearch";
import { IconFilter } from "../../assets/icon/IconFilter";

const HomeHeader = () => {
  return (
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
        WildGuard
      </Heading>
      <Input
        zIndex={9999}
        position="absolute"
        bottom={-20}
        borderRadius={100}
        backgroundColor="#fff"
        size="xl"
        placeholder="Tìm kiếm"
        InputLeftElement={
          <Icon
            ml={3}
            as={<IconSearch color="gray.900" />}
            size={5}
            color="gray.900"
          />
        }
        // InputRightElement={<Icon as={<IconFilter />} size={5} mr="4" />}
      />
    </VStack>
  );
};

export default HomeHeader;
