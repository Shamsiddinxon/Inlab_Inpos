import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import LogIn from "./Pages/LogIn";
import LogOut from "./Pages/LogOut";
import NotFound from "./Pages/NotFound";
import { StyledEngineProvider } from "@mui/material";
import Public from "./Routes/Public";
import Private from "./Routes/Privates";

function App() {
  return (
    <div className="App">
      <StyledEngineProvider injectFirst>
        {/* <Header/> */}
        <Routes>
          <Route path="/" element={<Public />}>
            <Route path="/login" element={<LogIn />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
          </Route>

          <Route path="/" element={<Private />}>
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
