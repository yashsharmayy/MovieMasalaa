import React, { useEffect } from 'react'
import Searchbar from '../component/Searchbar'
import DataFetch from '../component/dataFetch'


const Home = () => {
    return (
        <div className='flex flex-col justify-center items-center p-4'>
            <Searchbar />
            <DataFetch />
        </div>
    )
}

export default Home