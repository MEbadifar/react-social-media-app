import Login from "./pages/login/login";
import Register from "./pages/register/register";
import {
  createBrowserRouter,
  RouterProvider,
  Router,
  Outlet,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/navBar/navBar.jsx";
import LeftBar from "./components/leftBar/leftBar.jsx";
import RightBar from "./components/rightBar/rightBar.jsx";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";

function App() {
  const currentUser = true;

  const Layout = () => {
    return (
      <div>
        <NavBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{flex:6}}>
          <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };
  const ProtectedRouter = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRouter>
          <Layout />
        </ProtectedRouter>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
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
