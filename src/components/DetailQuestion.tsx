import {
  Button,
  Center,
  Column,
  HStack,
  Image,
  Radio,
  ScrollView,
  Text,
  VStack,
  Pressable,
  View,
  FlatList,
} from "native-base";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../../firebaseConfig";

export default function DetailQuestion() {
  const navigation = useNavigation();
  const db = getFirestore(app);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null); // null, 'correct', 'incorrect'

  useEffect(() => {
    const renderData = async () => {
      const querySnapshot = await getDocs(collection(db, "questions"));
      const newData = [];
      querySnapshot.forEach((doc) => {
        newData.push({ ...doc.data() });
      });
      setQuestions(newData);
    };

    renderData();
  }, []);

  useEffect(() => {
    // Reset selected answer and status when the current question changes
    setSelectedAnswer(null);
    setAnswerStatus(null);
  }, [currentQuestionIndex]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleSelectAnswer = (value) => {
    setSelectedAnswer(value);

    // Check if the selected answer is correct based on correctId
    const isCorrect =
      currentQuestion.answers.indexOf(value) === currentQuestion.correctId;
    setAnswerStatus(isCorrect ? "correct" : "incorrect");
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const renderImageAnswer = ({ item: answer, index }) => (
    <Pressable
      key={answer}
      onPress={() => handleSelectAnswer(answer)}
      style={{ flex: 1, margin: 5 }}
    >
      <View
        style={{
          borderColor:
            selectedAnswer === answer
              ? answerStatus === "correct"
                ? "green"
                : "red"
              : "transparent",
          borderWidth: selectedAnswer === answer ? 1.5 : 0,
          borderRadius: 20,
        }}
      >
        <Image
          borderRadius={20}
          alt={`answer-${index}`}
          height={112}
          source={{ uri: answer }}
          style={{
            borderWidth: selectedAnswer === answer ? 2 : 0,
            objectFit: "fill",
          }}
        />
      </View>
    </Pressable>
  );

  return (
    <Column flex={1} bg="white">
      <HStack px="4" py={3} safeAreaTop bg="#08B364" alignItems="center">
        <AntDesign
          onPress={() => navigation.goBack()}
          name="left"
          size={24}
          color="white"
        />
        <Text fontSize={18} color="white" ml={"12%"}>
          Choose the correct answer
        </Text>
      </HStack>
      <ScrollView style={{ marginBottom: 40 }} flex={1}>
        {currentQuestion && (
          <VStack px="4" mt={4}>
            <Text fontSize={17} fontWeight="bold" mt={1} mb={1}>
              {`Câu ${currentQuestionIndex + 1}`}
            </Text>
            <Text mb={4}>{currentQuestion.title}</Text>
            {currentQuestion.type === "IMAGE" ? (
              <FlatList
                data={currentQuestion.answers}
                renderItem={renderImageAnswer}
                numColumns={2}
                keyExtractor={(item, index) => `${item}-${index}`}
              />
            ) : (
              <Radio.Group
                name="myRadioGroup"
                value={selectedAnswer}
                onChange={handleSelectAnswer}
                accessibilityLabel="Pick your favorite answer"
              >
                {currentQuestion.answers.map((answer, index) => (
                  <Radio
                    key={answer}
                    value={answer}
                    my={1}
                    colorScheme="black"
                    _text={{
                      color:
                        answer === selectedAnswer
                          ? answerStatus === "correct"
                            ? "green.500"
                            : answerStatus === "incorrect"
                              ? "red.500"
                              : "black"
                          : "black",
                    }}
                  >
                    {answer}
                  </Radio>
                ))}
              </Radio.Group>
            )}
          </VStack>
        )}
        <Center>
          <HStack space={2} mt={6}>
            <AntDesign
              name="leftcircle"
              size={24}
              color="black"
              onPress={handlePreviousQuestion}
            />
            <AntDesign
              name="rightcircle"
              size={24}
              color="black"
              onPress={handleNextQuestion}
            />
          </HStack>
        </Center>
      </ScrollView>
      <Button
        backgroundColor="#08B364"
        mx={4}
        mb={10}
        onPress={handleNextQuestion}
      >
        Next
      </Button>
    </Column>
  );
}
