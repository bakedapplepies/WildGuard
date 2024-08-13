import {
  Column,
  Divider,
  Heading,
  HStack,
  Icon,
  Image,
  Row,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { IconTaxonomy } from "../../../assets/iconHomeDetail/IconTaxonomy";
import RenderHTML from "react-native-render-html";
import { useWindowDimensions } from "react-native";

export default function DetailAmazingSpace({ route }: any) {
  const navigation = useNavigation();
  const { data } = route.params;
  const { width } = useWindowDimensions();

  return (
    <Column flex={1} bg="white">
      <HStack px="4" py={3} safeAreaTop bg="#08B364" alignItems="center">
        <AntDesign
          onPress={() => navigation.goBack()}
          name="left"
          size={24}
          color="white"
        />
      </HStack>
      <ScrollView style={{ marginBottom: 40 }}>
        <VStack flex={1} bg="white">
          <Image
            mt={4}
            mx={4}
            alt="avatar"
            height="250px"
            source={{
              uri: data?.taxon?.images?.main?.urlThumb,
            }}
            borderRadius={"20px"}
          />
          <VStack p={4} space={2}>
            <Heading size="md">{data?.taxon?.taxonomy?.kingdomName}</Heading>
            <Text italic>{data?.taxon.taxonomy.className}</Text>
            {data?.speciesAbstract && (
              <RenderHTML
                contentWidth={width}
                source={{ html: data.speciesAbstract }}
              />
            )}

            <HStack justifyContent="space-between" alignItems="center">
              <VStack>
                <Text fontWeight="bold">THE RED LIST ASSESSMENT</Text>
                <Text>LAST ASSESSED</Text>
                <Text color="#08B364" mt={1} fontWeight="bold">
                  {data?.date}
                </Text>
                <Text>SCOPE OF ASSESSMENT</Text>
                <Text color="#08B364" mt={1} fontWeight="bold">
                  {data?.scopes[0].en}
                </Text>
              </VStack>
            </HStack>
          </VStack>
          <VStack backgroundColor="#DC2626" width={"full"} padding={2}>
            <Text fontWeight="bold" color="white">
              POPULATION TREND
            </Text>
            <HStack mt={2}>
              <Icon
                as={FontAwesome}
                name="arrow-down"
                color="#991B1B"
                size="lg"
              />
              <Text ml={2} color="white">
                {data?.populationTrend.title.en}
              </Text>
            </HStack>
          </VStack>

          <VStack space={2} px={4} mt={3}>
            <Text fontWeight="bold">NUMBER OF MATURE INDIVIDUALS</Text>
            <Text color="green.600">{data?.estimatedPopulation}</Text>

            <Divider my={2} />

            <Text fontWeight="bold">HABITAT AND ECOLOGY</Text>
            <Text color="green.600">
              {data?.habitatSummary[0].description.en}
            </Text>

            <Divider my={2} />
            <HStack>
              <IconTaxonomy />
              <Text fontWeight="bold" ml={2}>
                Taxonomy
              </Text>
            </HStack>

            <HStack>
              <VStack width="50%">
                <Text>KINGDOM</Text>
                <Text fontWeight="bold" color="green.600">
                  {data?.taxon.taxonomy.kingdomName}
                </Text>
              </VStack>
              <VStack width="50%">
                <Text>ORDER</Text>
                <Text fontWeight="bold" color="green.600">
                  {data?.taxon.taxonomy.orderName}
                </Text>
              </VStack>
            </HStack>
            <Row>
              <Column width="50%">
                <Text>PHYLUM</Text>
                <Text fontWeight="bold" color="green.600">
                  {data?.taxon.taxonomy.phylumName}
                </Text>
              </Column>
              <Column width="50%">
                <Text>FAMILY</Text>
                <Text fontWeight="bold" color="green.600">
                  {data?.taxon.taxonomy.familyName}
                </Text>
              </Column>
            </Row>
            <HStack>
              <VStack width="50%">
                <Text>CLASS</Text>
                <Text fontWeight="bold" color="green.600">
                  {data?.taxon.taxonomy.className}
                </Text>
              </VStack>
              <VStack width="50%">
                <Text>GENUS</Text>
                <Text fontWeight="bold" color="green.600">
                  {data?.taxon.taxonomy.genusName}
                </Text>
              </VStack>
            </HStack>

            <Divider my={2} />
            <HStack>
              <MaterialCommunityIcons
                name="file-document"
                size={24}
                color="black"
              />
              <Text ml={2} fontWeight="bold">
                Assessment Information
              </Text>
            </HStack>

            <Text>IUCN RED LIST CATEGORY AND CRITERIA</Text>
            <Text fontWeight="bold" color="green.600">
              {data?.redListCategory.title.en}
            </Text>
            <Text>DATE ASSESSED</Text>
            <Text fontWeight="bold" color="green.600">
              {data?.date}
            </Text>
            <Text>YEAR PUBLISHED</Text>
            <Text fontWeight="bold" color="green.600">
              {data?.yearPublished}
            </Text>
          </VStack>

          <VStack space={2} px={4} mt={4}>
            <Divider />
            <HStack>
              <MaterialCommunityIcons name="earth" size={24} color="black" />
              <Text ml={2} bold>
                Geographic Range
              </Text>
            </HStack>
            <Text>NATIVE</Text>
            <Text>Extant (breeding)</Text>
            <Text fontWeight="bold" color="green.600">
              {data?.nativeLocations[0].presence}
            </Text>
            <Text>Extant (non-breeding)</Text>
            <Text fontWeight="bold" color="green.600">
              {data?.nativeLocations[0].locations[0]?.description.en}
            </Text>
            <Text>Extant & Vagrant (non-breeding)</Text>
            <Text fontWeight="bold" color="green.600">
              Fiji; Panama
            </Text>
            <Text>Extant & Vagrant</Text>
            <Text fontWeight="bold" color="green.600">
              Angola; French Polynesia; Italy; Japan; Mauritius; Portugal;
              Réunion; United States
            </Text>
            <Text>Extant & Origin Uncertain (seasonality uncertain)</Text>
            <Text fontWeight="bold" color="green.600">
              Bouvet Island; Tonga
            </Text>
            <Divider />
          </VStack>
        </VStack>
      </ScrollView>
    </Column>
  );
}
