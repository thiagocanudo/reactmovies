import { Link } from 'react-router-dom'
import capaFilmes from '../assets/capa-filmes.jpg'
import capaSeries from '../assets/capa-series.jpg'

export function Home(){
    return (
            <div>
                <div className='flex flex-col md:flex-row h-screen'>
                    <div className='md:w-1/2 relative'>
                        <h3 className='absolute bottom-28 text-center font-bold w-full z-10 pointer-events-none'>Filmes</h3>
                        <Link to="/filmes"><img src={capaFilmes} alt="" className='w-full h-full object-cover opacity-60 hover:opacity-100 transition-all' /></Link>
                    </div>
                    <div className='md:w-1/2 relative'>
                        {/* font-responsiva: <h3 className="md:text-5xl text-2xl" */}
                        <h3 className='absolute bottom-28 text-center font-bold w-full z-10 pointer-events-none'>Séries</h3>
                        <Link to="/series"><img src={capaSeries} alt="" className='w-full h-full object-cover opacity-60 hover:opacity-100 transition-all' /></Link>
                    </div>
                </div>
            </div>
        )
}