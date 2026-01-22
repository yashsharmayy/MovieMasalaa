import axios from 'axios'
import React, { useContext, useState } from 'react'
import { createContext } from 'react'

export const ProdiveMovieContext = createContext()

const Moviecontext = ({ children }) => {

    const [Loading, setLoading] = useState(false)
    const [Moivedata, setMoivedata] = useState([])
    const [Search, setSearch] = useState("spider man")


    const fetchMovie = async () => {
        setLoading(true)
        const URL = `https://imdb.iamidiotareyoutoo.com/search?q=${Search}`
        let res = await axios.get(URL)
        setMoivedata(res.data.description || [])
        setLoading(false)
    }


    return (
        <ProdiveMovieContext.Provider value={{ fetchMovie, Loading, Moivedata, Search, setSearch }} >
            {children}
        </ProdiveMovieContext.Provider>
    )
}

export default Moviecontext