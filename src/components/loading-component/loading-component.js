import React from 'react';
import { LoaderTheme } from './style';

const LoadingComponent = () => (
  <LoaderTheme>
    <div className='container'>
      <div className='loader'>
        <div className='loader--dot'></div>
        <div className='loader--dot'></div>
        <div className='loader--dot'></div>
        <div className='loader--dot'></div>
        <div className='loader--dot'></div>
        <div className='loader--dot'></div>
        <div className='loader--text'></div>
      </div>
    </div>
  </LoaderTheme>
);

export default LoadingComponent;
