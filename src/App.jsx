import LeftBar from "./components/leftBar/leftBar";
import NavBar from "./components/navBar/navBar";
import RightBar from "./components/rightBar/rightBar";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile";

import { 
  createBrowserRouter, 
  RouterProvider,
  Route,
  Outlet,
 } from "react-router-dom";

function App() {

  const Layout = ()=> {
    return(
      <div>
        <NavBar/>
        <div style={{display:"flex"}}>
          <LeftBar/>
          <Outlet />
          <RightBar />
        </div>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children: [
          {
            path:"/",
            element:<Home/>
          },
          {
            path:"/profile/:id",
            element:<Profile/>
          }
        ]
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}/>
    </div>);
}

export default App;
