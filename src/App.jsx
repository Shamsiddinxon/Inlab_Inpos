import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import LogIn from "./Pages/LogIn";
import LogOut from "./Pages/LogOut";
import NotFound from "./Pages/NotFound";
import { StyledEngineProvider } from "@mui/material";
// import Header from "./Components/Hewader/Header";

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        {/* <Header/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
