import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import ROUTES from "./routes/routes";

const router = createBrowserRouter(ROUTES);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
