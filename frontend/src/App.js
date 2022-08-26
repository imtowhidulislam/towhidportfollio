import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login, Signup, Navbar } from "./components/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
