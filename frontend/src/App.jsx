import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout"
import Home from "./components/pages/Home"
import SignUp from "./components/authentication/SignUp"
import SignIn from "./components/authentication/SignIn"

import './App.css'
import "./styles/Layout.css"
import "./styles/Authentication.css"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
