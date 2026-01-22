import { useContext, useEffect } from 'react'
import FavMoviecard from '../component/FavMoviecard'
import { favcontext } from '../context/favmoviecontext'

const FavSec = () => {
    const { Fav, setFav } = useContext(favcontext)
    useEffect(() => {
        localStorage.setItem('favData', JSON.stringify(Fav))

    }, [])
    return (

        <div className="flex flex-wrap my-10  gap-10 justify-center">

            {
                Fav.length === 0 &&
                <h1 className='text-4xl my-20'>NO Movie Added Yet!</h1>
            }

            {Fav.map((Movie, idx) => (
                <FavMoviecard key={idx} Movie={Movie} />
            ))}
        </div>
    )
}

export default FavSec
