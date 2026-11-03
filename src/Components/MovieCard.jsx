import { FaRegCirclePlay } from "react-icons/fa6";
import { MovieList } from "../data";
import { useState } from "react";
import { IoMdHeart } from "react-icons/io";
import { IoPricetagSharp } from "react-icons/io5";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";





function MovieCard() {
    const [currentIndex, setCurrentIndex] = useState(3)

    const r = MovieList[currentIndex]

    const nextMovie = () => {
        setCurrentIndex((r) => r === MovieList.length -1? 0 : r + 1)
    }
    const prevMoie = () => {
        setCurrentIndex((x) => x === MovieList.length +1? 0 : x - 1)
    } 
    return (
        <section>

            <div className="flex justify-center">
                {MovieList.map((movie, index) => {
                    const isActive = index === currentIndex
                    return (
                        <div key={movie.id}
                            onClick={() => setCurrentIndex(index)} className={`relative flex-shrink-0 cursor-pointer
                            rounded-lg transition-all duration-500 ease-in-out
                        ${isActive ? `h-72 w-66 scale-110 px-5` : `h-68 w-50 opacity-55 hover:opacity-100`}`}>
                            <img src={movie.img} alt={movie.title}
                                className="h-full w-full object-cover" />
                            {isActive && (
                                <div className="absolute bottom-0 top-60 left-0 right-0 
                                bg-opacity-70 p-3 flex items-center justify-center ">
                                    <div className="bg-black rounded-4xl p-1.5">
                                        <button className="bg-amber-300 hover:bg-amber-500
                                         p-3 rounded-3xl">
                                            <FaRegCirclePlay size={20} />
                                        </button>

                                    </div>

                                </div>
                            )}
                        </div>

                    )
                })}

            </div>
            <div className="">
                <div className="text-white text-center mt-10">
                    <h2 className="text-3xl">{r.title}</h2>
                    <span className="text-lg ">{r.description}</span>
                    <div className="text-lg">
                        <span>{r.year}🦴</span>
                        <span>{r.hours}🦴</span>
                        <span>{r.movieType}</span>
                    </div>
                    <div className="space-x-5 items-center ">
                        <span className="roundex-2xl bg-mist-500 p-0.5">Trailer</span>
                        <button className="roundex-2xl bg-mist-500 p-0.5 text-amber-300"><IoMdHeart /></button>
                        <button className="roundex-2xl bg-mist-500 p-0.5 "> <IoPricetagSharp /> </button>
                        <span className="roundex-2xl bg-mist-500 0-0.5">Details</span>


                    </div>
                </div>

            </div>
            <div className="flex items-center justify-end gap-3">
                <button onClick={prevMoie} className="bg-gray-200 rounded-full p-1"><MdKeyboardArrowLeft size={30}/></button>
                <button onClick={nextMovie} className="bg-amber-400 rounded-full p-1"><MdKeyboardArrowRight size={30} /></button>

                
                
            </div>
            

    
        </section>
    )
}

export default MovieCard