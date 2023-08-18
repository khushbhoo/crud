import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PersonHome } from "./components/PersonHome"
import { PersonList } from "./components/PersonList"
import { PersonAdd } from "./components/PersonAdd";
import { PersonProvider } from "./context/PersonContext";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <PersonProvider>
          <Header />
          <Routes>
            <Route path="/" element={<PersonHome />} />
            <Route path="/add" element={<PersonAdd />} />
            <Route path="/list" element={<PersonList />} />
          </Routes>
        </PersonProvider>
      </BrowserRouter>
    </>
  )
}

export default App
