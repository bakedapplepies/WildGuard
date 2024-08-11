import React, { useEffect, useState } from "react";
import { Column, FlatList, VStack, Heading } from "native-base";
import ItemCardNew from "../../components/ItemCardNew";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../../../firebaseConfig";
import { LoadingAnimation } from "../../components/LoadingAnimation";

export default function Search() {
  const db = getFirestore(app);
  const [dataNew, setDataNew] = useState();

  useEffect(() => {
    const renderData = async () => {
      const querySnapshot = await getDocs(collection(db, "news"));
      const newData = [];
      querySnapshot.forEach((doc) => {
        newData.push({ ...doc.data() });
      });
      setDataNew(newData);
    };

    renderData();
  }, []);

  return (
    <>
      {!dataNew && <LoadingAnimation />}
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
            News
          </Heading>
        </VStack>
        <Column flex={1} px="4" space="4" mt={2} style={{ marginBottom: 100 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            marginTop={5}
            data={dataNew}
            renderItem={({ item }) => <ItemCardNew data={item} />}
            keyExtractor={(item) => item?.title}
          />
        </Column>
      </Column>
    </>
  );
}
