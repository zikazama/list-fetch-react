import "./App.css";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
  },
   {
    path: "/home",
    element: <HomePage/>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
