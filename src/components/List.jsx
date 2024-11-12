import { useEffect, useState } from "react";
import { getData } from "../api/tmdb";
import { Link } from "react-router-dom";
import star from "../assets/star.svg";
import { BarLoader } from "react-spinners";
import { Pagination } from "./Pagination";
import { TypeList } from "./typeList";

export default function ({ categoria }) {
  const [items, setItens] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [tipo, setTipo] = useState("popular");

  // getData(categoria);

  // não existe uma função 'awayt' sem que esteja dentro de uma função 'asyncrona'
  async function loadItems() {
    setLoading(true);
    try {
      const data = await getData(categoria, page, tipo); // aciona a API
      setItens(data); //Guarda os dados da API em um estado
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log("Erro ao buscar dados: ", error);
    }
  }

  // Função especial que é executada ao fim da renderização do componemte
  useEffect(() => {
    loadItems();
  }, [page, tipo]);

  if (loading) {
    return <BarLoader width={"100%"} color="#00B1E9" />;
  }

  function changeType(e) {
    setTipo(e.target.value);
    console.log(e.target.value);
    let selecao = document.getElementById("selectTipo");
    let selecaoValue = document.getElementById("selectTipo").value;
    // alert(selecao, e.target.value);

    setPage(1);

    // document.getElementsByTagName("option")[2].selected = "selected";

    // if (selecaoValue === e.target.value) {
    //   selecaoValue.selected = "selected";
    //   tipo;
    //   document.getElementById("selectTipo").value = tipo;
    // }
  }

  return (
    <div className="max-w-container-site mx-auto">
      <div className="flex flex-wrap gap-5 my-6 max-w-full justify-between px-6">
        {/* <Pagination /> */}
        <div className="flex flex-wrap justify-center gap-5 my-0">
          <div className="flex items-center gap-8">
            <button
              // disabled
              className="rounded-md border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              onClick={() => setPage(page - 1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" />
              </svg>
            </button>

            <p className="text-slate-100">
              Page <strong className="text-slate-400">{page}</strong>
            </p>

            <button
              className="rounded-md border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              onClick={() => setPage(page + 1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" />
              </svg>
            </button>
          </div>
        </div>

        {/* <TypelIst /> */}
        <form>
          <select
            onChange={changeType}
            id="selectTipo"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Select</option>
            <option value="popular">Popular</option>
            <option value="top_rated">Mais bem avaliados</option>
          </select>
        </form>
      </div>

      <div className="flex flex-wrap justify-center gap-5 my-16">
        {items.map((item) => (
          <Link
            to={`../detalhes/${categoria}/${item.id}`}
            className="w-[270px] h-[300px] relative"
            key={item.id}
          >
            <img
              className="w-full h-full object-cover opacity-40 hover:opacity-100 transition-all rounded-md"
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt=""
            />

            <div className="absolute bottom-2 left-2 pointer-events-none">
              <h2 className="font-bold text-lg">{item.title || item.name}</h2>
              <h3 className="font-bold">
                Ano:{" "}
                {item.first_air_date?.substring(0, 4) ||
                  item.release_date?.substring(0, 4)}
              </h3>

              <div className="flex gap-1 items-center">
                <img src={star} alt="" />
                <span className="font-bold  text-brand-yellow">
                  {item.vote_average?.toFixed(1)}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
