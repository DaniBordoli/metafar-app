import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  ClearButton,
  PickerContainer,
  PickerWrapper,
  SearchContainer,
  SearchInput,
  StyledPicker,
  Label,
} from "../../screens/HomeScreenStyles";
import { Picker } from "@react-native-picker/picker";

interface SearchFilterProps {
  searchBy: string;
  search: string;
  handlePickerChange: (value: string) => void;
  handleSearchChange: (text: string) => void;
  clearSearch: () => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  searchBy,
  search,
  handlePickerChange,
  handleSearchChange,
  clearSearch,
}) => (
  <>
    <PickerContainer>
      <Label>Buscar por:</Label>
      <PickerWrapper>
        <StyledPicker
          selectedValue={searchBy}
          onValueChange={(itemValue: string) => handlePickerChange(itemValue)}
        >
          <Picker.Item label="Nombre" value="name" />
          <Picker.Item label="Símbolo" value="symbol" />
        </StyledPicker>
      </PickerWrapper>
    </PickerContainer>
    <SearchContainer>
      <SearchInput
        placeholder={`Buscar por ${searchBy === "name" ? "nombre" : "símbolo"}`}
        onChangeText={handleSearchChange}
        value={search}
      />
      {search.length > 0 && (
        <ClearButton onPress={clearSearch}>
          <Ionicons name="close-circle" size={24} color="#6D54C3" />
        </ClearButton>
      )}
    </SearchContainer>
  </>
);

export default SearchFilter;
