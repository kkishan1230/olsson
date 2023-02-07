import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FrontPage from "./components/pages/FrontPage";
import "./fonts/clash_Display/ClashDisplay-Bold.otf";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
