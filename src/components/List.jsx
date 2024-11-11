import { useEffect, useState } from "react";
import { getData } from "../api/tmdb"
import { Link } from "react-router-dom";
import star from '../assets/star.svg'
import { BarLoader } from "react-spinners";

export default function({categoria}){

    const [items, setItens] = useState([]);
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);

    // getData(categoria);

    // não existe uma função 'awayt' sem que esteja dentro de uma função 'asyncrona'
    async function loadItems(){
      setLoading(true);
        try{
          const data = await getData(categoria, page); // aciona a API
          setItens(data); //Guarda os dados da API em um estado
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }
        catch(error){
          console.log('Erro ao buscar dados: ',  error);
        }

    }

    // Função especial que é executada ao fim da renderização do componemte
    useEffect(() => {
        loadItems();
    }, [page]);

    if(loading){
      return (
        <BarLoader width={'100%'} color="#00B1E9" />
      )
    }

    return(
            <div className="max-w-container-site mx-auto">
               <button onClick={() => setPage(page - 1)}> Voltar  </button>
              <button onClick={() => setPage(page + 1)}> Avançar </button>
              <p>Página: {page}</p>
            <div className="flex flex-wrap justify-center gap-5 my-16">
              {
                items.map(item => (
                    <Link to={`../detalhes/${categoria}/${item.id}`} className="w-[270px] h-[300px] relative" key={item.id}>
                      
                      <img className="w-full h-full object-cover opacity-40 hover:opacity-100 transition-all rounded-md"
                      src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />

                      <div className="absolute bottom-2 left-2 pointer-events-none">
                        <h2 className="font-bold text-lg">{item.title || item.name}</h2>
                        <h3 className="font-bold">Ano: {item.first_air_date?.substring(0, 4) || item.release_date?.substring(0, 4)}</h3>

                        <div className="flex gap-1 items-center">
                          <img src={star} alt="" />
                          <span className="font-bold  text-brand-yellow">{item.vote_average?.toFixed(1)}</span>
                        </div>

                      </div>

                    </Link>
                ))
              }
            </div>
          </div>
    )
}