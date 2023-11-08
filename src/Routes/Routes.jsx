import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AddBooks from "../pages/AddBooks/AddBooks";
import AllBooks from "../pages/AllBooks/AllBooks";
import BorrowedBooks from "../pages/BorrowedBooks/BorrowedBooks";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import BookDetails from "../pages/BookDetails/BookDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('https://library-management-server-topaz.vercel.app/book')
        },
        {
            path: "addBook",
            element: <PrivateRoute><AddBooks></AddBooks></PrivateRoute>
        },
        {
            path:'/BookDetails/:id',
            element:  <PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
            loader:({params})=>fetch(`https://library-management-server-topaz.vercel.app/book/${params.id}`)
        },
        {
            path: "allBooks",
            element: <AllBooks></AllBooks>,
            loader: () => fetch('https://library-management-server-topaz.vercel.app/book')
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
  