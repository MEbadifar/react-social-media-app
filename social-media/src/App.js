import Login from "./pages/login/login";
import Register from "./pages/register/register";
import { ReactDOM, Link } from "react-router-dom";

import { createBrowserRouter, RouterProvider, Router } from "react-router-dom";

function App() {
  const Layout = () => {
    return <div></div>;
  };

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
