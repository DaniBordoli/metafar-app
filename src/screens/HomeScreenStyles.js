import styled from "styled-components/native";
import { Picker } from "@react-native-picker/picker";
import { TouchableOpacity, TextInput, View, Text } from "react-native";

const Container = styled.View`
  flex: 1;
  padding: 25px;
  background-color: #dbd4f0;
`;

const PickerContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 10px;
`;

const Label = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #4929b4;
`;

const PickerWrapper = styled.View`
  border-width: 1px;
  border-color: #6d54c3;
  border-radius: 5px;
  background-color: #927fd2;
  padding: 5px;
`;

const StyledPicker = styled(Picker)`
  width: 150px;
  color: #ffffff;
`;

const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  position: relative;
`;

const SearchInput = styled.TextInput`
  flex: 1;
  height: 40px;
  border-color: #6d54c3;
  border-width: 1px;
  border-radius: 5px;
  padding-horizontal: 10px;
  background-color: #ffffff;
`;

const ClearButton = styled(TouchableOpacity)`
  position: absolute;
  right: 10px;
`;

const TableHeader = styled.View`
  flex-direction: row;
  background-color: #927fd2;
  padding-vertical: 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const TableHeaderText = styled.Text`
  flex: 1;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
`;

const TableRow = styled.View`
  flex-direction: row;
  padding-vertical: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #927fd2;
  background-color: #ffffff;
`;

const TableCell = styled.Text`
  flex: 1;
  text-align: center;
  color: #4929b4;
`;

const Pagination = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-vertical: 10px;
`;

const PageNumber = styled.Text`
  font-size: 18px;
  color: #4929b4;
`;

const StyledTouchableOpacity = styled(TouchableOpacity)`
  flex: 1;
  text-align: center;
  color: #4929b4;
`;
export {
  Container,
  PickerContainer,
  Label,
  PickerWrapper,
  StyledPicker,
  SearchContainer,
  SearchInput,
  ClearButton,
  TableHeader,
  TableHeaderText,
  TableRow,
  TableCell,
  Pagination,
  PageNumber,
  StyledTouchableOpacity,
};
