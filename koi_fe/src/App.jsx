import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
