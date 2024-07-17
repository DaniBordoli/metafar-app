import React, { useState, useEffect } from "react";
import { FlatList, Button } from "react-native";
import axios from "axios";
import LoadingIndicator from "../components/LoadingIndicator";
import { HomeScreenProps } from "../types/navigation";
import { Stock } from "../types/stocks";
import { Container, PageNumber, Pagination } from "./HomeScreenStyles";
import SearchFilter from "../components/SearchFilter";
import StockListHeader from "../components/StockListHeader";
import StockListItem from "../components/StockListItem";
import { fetchStocks } from "../services/api";

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [filteredStocks, setFilteredStocks] = useState<Stock[]>([]);
  const [search, setSearch] = useState<string>("");
  const [searchBy, setSearchBy] = useState<string>("name");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const itemsPerPage = 100;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetchStocks();
      setStocks(data);
      setFilteredStocks(data.slice(0, itemsPerPage));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const searchFilter = (data: Stock[]) => {
    const filteredData = data.filter((item) => {
      if (searchBy === "name") {
        return item.name.toUpperCase().includes(search.toUpperCase());
      } else {
        return item.symbol.toUpperCase().includes(search.toUpperCase());
      }
    });
    return filteredData;
  };

  useEffect(() => {
    const filteredData = searchFilter(stocks);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setFilteredStocks(filteredData.slice(startIndex, endIndex));
  }, [stocks, search, searchBy, page]);

  const changePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleSearchChange = (text: string) => {
    setSearch(text);
    setPage(1);
  };

  const handlePickerChange = (value: string) => {
    setSearchBy(value);
    setSearch("");
    setPage(1);
  };

  const clearSearch = () => {
    setSearch("");
    setPage(1);
  };

  return (
    <Container>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <>
          <SearchFilter
            searchBy={searchBy}
            search={search}
            handlePickerChange={handlePickerChange}
            handleSearchChange={handleSearchChange}
            clearSearch={clearSearch}
          />
          <FlatList
            data={filteredStocks}
            keyExtractor={(item) => item.symbol}
            ListHeaderComponent={StockListHeader}
            renderItem={({ item }) => (
              <StockListItem item={item} navigation={navigation} />
            )}
          />
          <Pagination>
            {page > 1 && (
              <Button
                title="Anterior"
                onPress={() => changePage(page - 1)}
                color="#6D54C3"
              />
            )}
            <PageNumber>Página {page}</PageNumber>
            {filteredStocks.length === itemsPerPage && (
              <Button
                title="Siguiente"
                onPress={() => changePage(page + 1)}
                color="#6D54C3"
              />
            )}
          </Pagination>
        </>
      )}
    </Container>
  );
};

export default HomeScreen;
