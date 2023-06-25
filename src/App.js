import "./App.css";
import Header from "./components/Header";
import BookDetails from "./components/BookDetails";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import BookList from "./components/BookList";
import Cart from "./components/Cart";
import UserContext from "./Utils/UserContext";

import { Provider } from "react-redux";
import store from "./Utils/store";
import Checkout from "./components/Checkout";

const HeaderLayout = () => {
  return (
    <Provider store={store}>
      <UserContext.Provider value={{}}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        element: <BookList />,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <Error />,
      },
      {
        path: "/books/:id",
        element: <BookDetails />,
      },
      {
        path:'/checkout',
        element:<Checkout/>
      }
    
    ],
  },
]);

const App = () => {
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
