import { Link } from "react-router-dom";
import { Links } from "./Utils/Links";
import logo from '../assets/logo.svg'

export function Header(){

    return(
        <div className="bg-brand-dark flex flex-col md:flex-row pad-y-2 justify-between items-center top-0 p-4 z-10 fixed w-full bg-opacity-40 backdrop-blur-sm ">

            {/* {caso a image esteja em public não precisa de importação} */}
            {/* <Link to="/"><img src="/vite.svg" className="m-auto" /></Link> */}

            <Link to="/"><img src={logo} className="m-auto py-3" /></Link>

            <nav className="flex gap-14">

                <Link to="/" className="hover:text-brand-blue-light font-semibold">Home</Link>

                <Links to="/filmes" text="Filmes" title="Filmes" />
                <Links to="/series" text="Séries" title="Séries" />

            </nav>
            
        </div>
    )
}