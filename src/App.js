import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import HowItWorks from "./pages/how-it-works";
import Landing from "./pages/landing";
import Subscriptions from "./pages/subscriptions";
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
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
}

export default App;
