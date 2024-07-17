
import axios from 'axios';
import { Stock, StockData } from '../types/stocks';

const API_KEY = 'f7cde9861dde4994808e8f7b280da400';
const BASE_URL = 'https://api.twelvedata.com';

export const fetchStocks = async (): Promise<Stock[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/stocks?source=docs&exchange=NYSE`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching stocks:', error);
    throw error;
  }
};

export const fetchStockData = async (symbol: string, interval: string): Promise<StockData[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/time_series?symbol=${symbol}&interval=${interval}&apikey=${API_KEY}`);
    return response.data.values;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    throw error;
  }
};

export const fetchStockInfo = async (symbol: string): Promise<Stock | null> => {
  try {
    const response = await axios.get(`${BASE_URL}/stocks?symbol=${symbol}&source=docs`);
    return response.data.data[0];
  } catch (error) {
    console.error('Error fetching stock info:', error);
    throw error;
  }
};

export const fetchAnnualStockData = async (
    symbol: string,
    start_date: string,
    end_date: string
  ): Promise<StockData[]> => {
    try {
      const response = await axios.get(`${BASE_URL}/time_series?symbol=${symbol}&interval=1month&start_date=${start_date}&end_date=${end_date}&apikey=${API_KEY}`);
      return response.data.values;
    } catch (error) {
      console.error('Error fetching annual stock data:', error);
      throw error;
    }
  };
