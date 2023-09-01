import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import HowItWorks from "./pages/how-it-works";
import Landing from "./pages/landing";
import theme from "./theme";

function App() {
  return <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Landing />} />
        </Route>
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about-us" element={<About />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
}

export default App;
