import React from "react"
import "./App.css"
import "./style.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/home-page/home-page"
import UserPage from "./pages/user-page/user-page"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/user/:module" element={<UserPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
