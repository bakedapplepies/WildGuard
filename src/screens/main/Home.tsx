import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Column,
  FlatList,
  HStack,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import HomeHeader from "../../components/HomeHeader";
import AntDesign from "@expo/vector-icons/AntDesign";
import ItemCardHome from "../../components/ItemCardHome";
import { listAnimalHome } from "./FakeData";
import ItemAnimalHome from "../../components/ItemAnimalHome";
import { useNavigation } from "@react-navigation/native";
import { getFirestore, collection, doc, getDocs } from "firebase/firestore";
import { app } from "../../../firebaseConfig";
import { LoadingAnimation } from "../../components/LoadingAnimation";

const Home = () => {
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  const db = getFirestore(app);
  const [dataNewSpecies, setDataNewSpecies] = useState();

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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {!dataNewSpecies && <LoadingAnimation />}
      <Column flex={1} bg="white">
        <HomeHeader />
        <Column flex={1} mt={10} px="4">
          <ScrollView showsVerticalScrollIndicator={false}>
            <HStack justifyContent="space-between" alignItems="center">
              <Text fontSize="lg" color="black">
                Amazing species
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("ListAmazing")}
              >
                <HStack alignItems="center">
                  <Text fontSize="xs" color="text.900" mr={1}>
                    See more
                  </Text>
                  <AntDesign name="arrowright" size={12} color="text.900" />
                </HStack>
              </TouchableOpacity>
            </HStack>
            <Column space="4" mt={2} style={{ marginBottom: 100 }}>
              <FlatList
                marginTop={5}
                data={dataNewSpecies?.slice(0, 2)}
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
                keyExtractor={(item) => item.id}
              />
              <VStack>
                <Text color="#08B364" fontSize={30} fontWeight={"bold"}>
                  More than 44,000 species are threatened with extinction
                </Text>
                <Text fontSize={16} color="#000000">
                  That is still 28% of all assessed species.
                </Text>
              </VStack>
              <VStack space={2}>
                {listAnimalHome.map((item, index) => (
                  <ItemAnimalHome data={item} key={index} />
                ))}
              </VStack>
            </Column>
          </ScrollView>
        </Column>
      </Column>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
