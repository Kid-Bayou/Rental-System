import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout"
import Home from "./components/pages/Home"

import './App.css'
import "./styles/Layout.css"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
