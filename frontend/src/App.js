import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Register from "./pages/Register"
import Organic from "./pages/Organic"
import Inorganic from "./pages/Inorganic"
import ErrorPage from "./pages/ErrorPage";
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/organic-topics" element={<Organic />} />
      <Route path="/inorganic-topics" element={<Inorganic />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App;
