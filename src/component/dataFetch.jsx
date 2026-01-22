import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Moviecontext, { ProdiveMovieContext } from '../context/Moviecontext'
import MovieCard from './MovieCard'

const DataFetch = () => {

    const { Loading, fetchMovie, Moivedata, } = useContext(ProdiveMovieContext)

    useEffect(() => {
        fetchMovie()
    }, [])

    return (
        <div className=' flex flex-col justify-center items-center'>
            {
                Loading && <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            }
            <div className='m-8 flex flex-wrap gap-10 justify-center items-center'>

                {
                    !Loading &&
                    Moivedata.map((movie, idx) => {
                        return (
                            <div key={idx} className='flex flex-wrap'>
                                <MovieCard movie={movie} />
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default DataFetch