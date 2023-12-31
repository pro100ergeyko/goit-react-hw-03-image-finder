import React from 'react';
import { LoaderBackdrop } from './Loader.styled';
import { RotatingLines } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <LoaderBackdrop>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </LoaderBackdrop>
  );
};
