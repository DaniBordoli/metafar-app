import React from 'react';
import { ActivityIndicator } from 'react-native';
import {Container, LoadingText} from './style';



const LoadingIndicator = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color="#6D54C3" />
      <LoadingText>Cargando...</LoadingText>
    </Container>
  );
};

export default LoadingIndicator;
