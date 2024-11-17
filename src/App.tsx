import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { useColorMode } from "./zustand/useColorMode";
import Layout from "./Pages/Layout";
import NotFound from "./Pages/404";
function App() {
  const { mode } = useColorMode();
  return (
    <>
      <div className={mode}>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
