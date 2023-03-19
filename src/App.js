import productApi from 'api/productApi';
import Header from 'components/Header';
import React, { useEffect } from 'react';
import './App.css';

function App() {
  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const params = {
  //       _limit: 10
  //     }
  //     const productList = await productApi.getAll(params)
  //     console.log(productList)
  //       }

  //       fetchProduct()
  // }, [])
  return (
    <div className='App'>
      <Header />

    </div>
  )
}

export default App;
