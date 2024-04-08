import "./App.css";
import { Header } from "./header.js";
import { Lists } from "./components/lists.js";
import { Routes, Route } from "react-router-dom";
import { Article } from "./pages/articlePage.js";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Lists />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
