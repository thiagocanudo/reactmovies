import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Filmes } from "./pages/Filmes"
import { Series } from "./pages/Series"
import { NotFound } from "./pages/NotFound"

export function Router(){

    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/filmes" element={<Filmes/>} />
            <Route path="/series" element={<Series/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )

}