import styled from "styled-components/native";
import { Picker } from "@react-native-picker/picker";
import { TouchableOpacity, TextInput, View, Text } from "react-native";

const Container = styled.View`
  flex: 1;
  padding: 30px;
  background-color: #dbd4f0;
`;

const InfoContainer = styled.View`
  background-color: #b6a9e1;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const InfoText = styled.Text`
  font-size: 16px;
  color: #4929b4;
  margin-bottom: 5px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #4929b4;
  text-align: center;
  margin-vertical: 10px;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-vertical: 10px;
`;

const NoDataText = styled.Text`
  font-size: 16px;
  color: #4929b4;
  text-align: center;
  margin-top: 20px;
`;
export {
  Container,
  InfoContainer,
  NoDataText,
  ButtonContainer,
  Title,
  InfoText,
};
