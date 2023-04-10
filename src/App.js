import React, { lazy, Suspense } from "react"
import "./styles/style.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useDispatch } from "react-redux"
// import HomePage from "./pages/home-page/home-page"
// import UserPage from "./pages/user-page/user-page"
import { fetchUsers, fetchVideos } from "./modules/userdata"

const UserPage = lazy(() => import("./pages/user-page/user-page"))
const HomePage = lazy(() => import("./pages/home-page/home-page"))

function Users() {
  return (
    <Suspense>
      <UserPage />
    </Suspense>
  )
}

function Home() {
  return (
    <Suspense>
      <HomePage />
    </Suspense>
  )
}

export default function App() {
  const dispatch = useDispatch()
  dispatch(fetchUsers())
  dispatch(fetchVideos())
  return (
    <div className="App">
      <BrowserRouter basename="/videonova">
        <Routes>
          <Route path="/videonova/user/:module" element={<Users />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
