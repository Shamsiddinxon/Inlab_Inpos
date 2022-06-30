import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import { StyledEngineProvider } from "@mui/material";

function App() {
  return (
    <div className="App bg-btnBg">
      <StyledEngineProvider injectFirst>
        <Routes>
          <Route path="/*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
