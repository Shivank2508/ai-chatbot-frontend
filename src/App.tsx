import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Chats from "./pages/Chats"
import NotFound from "./pages/NotFound"
import { UserContext } from "./context/AuthContext"



function App() {
  console.log(UserContext()?.isLoggedIn)
  return (
    <>
      <main>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/chat" element={<Chats />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
