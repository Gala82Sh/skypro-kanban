import React from 'react';
import { LoaderWrapper, GradientText } from './GradientLoader.styled';

function GradientLoader() {
  return (
    <LoaderWrapper>
      <GradientText>Загрузка задач...</GradientText>
    </LoaderWrapper>
  );
}

export default GradientLoader;
