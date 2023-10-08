import "./App.css";
import Routers from "./routes";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Routers />
      <Analytics />
    </>
  );
}

export default App;
