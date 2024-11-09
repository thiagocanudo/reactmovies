import { useEffect, useState } from 'react';
import { getDados } from '../api/tmdb';

export default function ({ categoria }) {
  const [items, setItens] = useState([]);
  // getDados(categoria);

  // não existe uma função 'awayt' sem que esteja dentro de uma função 'asyncrona'
  async function loadItems() {
    const data = await getDados(categoria); // aciona a API
    console.log('categoria: ', categoria);
    setItens(data); //Guarda os dados da API em um estado
  }

  // Função especial que é executada ao fim da renderização do componemte
  useEffect(() => {
    loadItems();
  }, []);

  return (
    <>
      {/* <h4 className="text-center">Lista de {categoria}</h4> */}
      {/* {console.log(items)} LISTAGEM DE CAPAS SERIES OU FILMES */}

      <div className="container max-w-5xl mx-auto pt-14 pb-20">
        <div className="grid grid-cols-4 gap-4 cursor-pointer">
          {items.map((item) => (
            <div
              className="rounded-md overflow-hidden bg-blue-950 relative"
              key={item.id}
            >
              <div className="absolute w-full bg-blue-950/55 bg-gradient-to-bl p-2 pt-3 bottom-0 text-left z-10 pointer-events-none">
                <h2 className="font-bold text-base">
                  {item.title || item.name}
                </h2>
                <h3 className="font-bold text-sm">
                  Ano: {item.first_air_date || item.release_date}
                </h3>
                <h4 className="font-bold text-xs text-brand-yellow">
                  {item.vote_average}
                </h4>
              </div>
              <img
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all"
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                width="100"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
