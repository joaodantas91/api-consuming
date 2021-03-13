import React from 'react';

async function Api(props) {
  const baseURL = 'https://jsonplaceholder.typicode.com'
  const response = await fetch(baseURL + '/posts');
  const data = await response.json();
  return data;
} 

export default Api();