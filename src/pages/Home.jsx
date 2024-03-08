import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import Table from '../components/Table'
import axios from 'axios'

const Home = () => {

  
  return (
    <>
        <Search />
        <Table />
    </>
  )
}

export default Home