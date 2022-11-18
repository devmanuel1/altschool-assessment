import HomePage from "./Pages/Home";
import ReposPage from "./Pages/ReposPage";
import RepoPage from "./Pages/Repo";
import NotFoundPage from "./Pages/NotFound";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import { createContext } from "react";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

// createing navigation context
export const NavigateContext = createContext();
function App() {
  // acive route state
  const [activeRoute, setActiveRoute] = useState("");
  return (
    <>
      <NavigateContext.Provider value={{ activeRoute, setActiveRoute }}>
        {/* common components */}
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/repos" element={<ReposPage />} />
          <Route path="/repos/:id" element={<RepoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </NavigateContext.Provider>
      <Toaster />
    </>
  );
}

export default App;
