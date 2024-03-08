import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import Table from '../components/Table'
import axios from 'axios'

const Home = () => {
  const [coins, setCoins] = useState([])
  const getCoins = async () => {
    const url = `https://api.coinranking.com/v2/coins/`;

    const options = {
      headers: { "x-access-token": process.env.REACT_APP_API_KEY },
    };

    try {
      const {data} = await axios(url, options)
      setCoins(data.data.coins)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCoins()
  }, [])
  
  return (
    <>
        <h1 className='text-center mt-2 fw-bold'>Cyripto Coin App</h1>
        <Search />
        <Table coins={coins} />
    </>
  )
}

export default Home