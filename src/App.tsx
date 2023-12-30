import { Outlet } from "react-router-dom";

import { Header } from "@/components/header";
import { TodosProvider } from "@/providers/providers";

import "@/App.css";

function App() {
  return (
    <TodosProvider>
      <Header />
      <Outlet />
    </TodosProvider>
  );
}

export default App;
