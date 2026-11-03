import React from 'react'
import { Link } from 'react-router-dom'

function MovieList() {
  return (
    <div>
        <ul className='flex items-center gap-12.5 overflow-x-auto'>
            <li><Link to="./latest" className='cabin-sketch-bold'>Latest</Link></li>
            <li><Link to="./action" className='cabin-sketch-bold'>Action</Link></li>
            <li><Link to="./family" className='cabin-sketch-bold'>Family</Link></li>
            <li><Link to="./fantasy" className='cabin-sketch-bold'>Fantasy</Link></li>
            <li><Link to="./classics" className='cabin-sketch-bold'>Classics</Link></li>
            <li><Link to="./crime" className='cabin-sketch-bold'>Crime</Link></li>
            <li><Link to="./thriller" className='cabin-sketch-bold'>Thriller</Link></li>
            <li><Link to="./comedy" className='cabin-sketch-bold'>Comedy</Link></li>
            <li><Link to="./wildlife" className='cabin-sketch-bold'>Wildlife</Link></li>
        </ul>
    </div>
  )
}

export default MovieList