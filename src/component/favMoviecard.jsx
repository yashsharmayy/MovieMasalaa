import React, { useContext, useState } from 'react'
import { favcontext } from '../context/favmoviecontext'

const FavMoviecard = ({ Movie }) => {
    const { Fav, setFav } = useContext(favcontext)


    const removefav = (idx) => {
        const newfav = [...Fav]
        newfav.splice(idx, 1)
        setFav(newfav)
        console.log(Fav);

    }
    return (
        <div className='relative overflow-hidden'>
            <i onClick={() => { removefav() }} className={`ri-heart-fill cursor-pointer text-red-600 absolute z-10 right-4 top-4   text-3xl hover:text-red-600`}></i>
            <a target='_blank' href={Movie["#IMDB_URL"]}>
                <div
                    aria-label="card-overlay-v2"
                    className="relative z-8 w-63 h-75 overflow-hidden rounded-lg"
                >
                    <img
                        src={Movie["#IMG_POSTER"]}
                        alt=""
                        className="object-cover w-full h-full rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 flex flex-col p-5 text-white gap-y-1 bg-linear-to-t from-black">
                        <h3 className="text-base font-bold">{Movie["#TITLE"]}</h3>
                        <span className="text-sm">{Movie["#YEAR"]}</span>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default FavMoviecard