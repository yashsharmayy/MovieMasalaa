import React, { createContext, useEffect, useState } from 'react'
export const favcontext = createContext()
const Favmoviecontext = ({ children }) => {

    const [Fav, setFav] = useState(() => {
        const stored = localStorage.getItem("favData")
        return stored ? JSON.parse(stored) : []
    })


    useEffect(() => {
        console.log("Fav updated:", Fav)
        localStorage.setItem("favData", JSON.stringify(Fav))
    }, [Fav])


    return (
        <favcontext.Provider value={{ Fav, setFav }}>
            {children}
        </favcontext.Provider>
    )
}

export default Favmoviecontext