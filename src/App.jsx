import { BrowserRouter } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Router } from "./Router"
import "./global.css"

function App() {

  return (
    <BrowserRouter>
      <Header />
       <Router/> {/*conteúdo das páginas} */}
      <Footer />
    </BrowserRouter>
  )
}

export default App
