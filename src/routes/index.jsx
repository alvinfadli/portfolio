import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Routers;
