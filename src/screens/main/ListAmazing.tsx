import { LoadingAnimation } from "../../components/LoadingAnimation";
import { Column, FlatList, Heading, HStack, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../../../firebaseConfig";
import ItemCardHome from "../../components/ItemCardHome";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function ListAmazing() {
  const db = getFirestore(app);
  const [dataNewSpecies, setDataNewSpecies] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    const renderData = async () => {
      const querySnapshot = await getDocs(collection(db, "species"));
      const newData = [];
      querySnapshot.forEach((doc) => {
        newData.push({ ...doc.data() });
      });
      setDataNewSpecies(newData);
    };

    renderData();
  }, []);

  return (
    <>
      {!dataNewSpecies && <LoadingAnimation />}
      <Column flex={1} bg="white">
        <HStack px="4" py={3} safeAreaTop bg="#08B364" alignItems="center">
          <AntDesign
            onPress={() => navigation.goBack()}
            name="left"
            size={24}
            color="white"
          />
        </HStack>
        <Column flex={1} px="4" space="4" mt={2} style={{ marginBottom: 100 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            marginTop={5}
            data={dataNewSpecies}
            renderItem={({ item }) => (
              <ItemCardHome
                onPress={() =>
                  navigation.navigate("DetailAmazingSpace", {
                    data: item,
                  })
                }
                data={item}
              />
            )}
            keyExtractor={(item) => item?.title}
          />
        </Column>
      </Column>
    </>
  );
}
