import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useContext, useEffect, useState } from 'react';
import { favcontext } from '../context/favmoviecontext';
const MovieCard = ({ movie }) => {

    const { Fav, setFav, } = useContext(favcontext)
    const [Liked, setLiked] = useState("#1c273b")
    const [Showlike, setShowlike] = useState(false)

    const isFav = Fav.some(
        item => item["#IMDB_ID"] === movie["#IMDB_ID"]
    )



    const likebtn = () => {

        if (isFav) {
            // remove on second click
            setFav(prev =>
                prev.filter(item => item["#IMDB_ID"] !== movie["#IMDB_ID"])
            )
        } else {
            // add on first click
            setFav(prev => [...prev, movie])
            showlike()
        }
    }

    function showlike() {
        setShowlike(true)

        setTimeout(() => {
            setShowlike(false)
        }, 900);
    }

    return (

        <div className='relative overflow-hidden'>
            <i onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                likebtn()
            }} style={{ color: isFav ? "red" : "#1c273b" }} className={`ri-heart-fill cursor-pointer text-[#1c273b] absolute z-10 right-4 top-4   text-3xl hover:text-red-600`}></i>
            {
                Showlike &&
                <div className=' absolute z-10 -right-7 top-1 w-75 ' >
                    <DotLottieReact
                        src="https://lottie.host/5e91ca7b-eb1b-4b62-9a28-602593ebda87/5CLU0nFZX3.lottie"
                        autoplay
                    />
                </div>
            }
            <a target='_blank' href={movie["#IMDB_URL"]}>
                <div
                    aria-label="card-overlay-v2"
                    className="relative z-8 w-63 h-75 overflow-hidden rounded-lg"
                >
                    <img
                        src={movie["#IMG_POSTER"]}
                        alt=""
                        className="object-cover w-full h-full rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 flex flex-col p-5 text-white gap-y-1 bg-linear-to-t from-black">
                        <h3 className="text-base font-bold">{movie["#TITLE"]}</h3>
                        <span className="text-sm">{movie["#YEAR"]}</span>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default MovieCard