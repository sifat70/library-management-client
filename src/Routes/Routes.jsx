import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AddBooks from "../pages/AddBooks/AddBooks";
import AllBooks from "../pages/AllBooks/AllBooks";
import BorrowedBooks from "../pages/BorrowedBooks/BorrowedBooks";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "addBook",
            element: <PrivateRoute><AddBooks></AddBooks></PrivateRoute>
        },
        {
            path: "allBooks",
            element: <AllBooks></AllBooks>
        },
        {
            path: "borrowedBooks",
            element: <BorrowedBooks></BorrowedBooks>
        },
        {
            path: "login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        }
      ]
    },
  ]);

  export default router
  