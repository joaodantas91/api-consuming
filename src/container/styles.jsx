import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px 10px;
  h1 {
    color: #333;
    text-align: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const Card = styled.div`
  box-shadow: 0 0 6px rgba(0,0,0,.2);      
  width: calc(33.33% - 20px);
  margin: 0 10px 20px;  
  height: 200px;
`;