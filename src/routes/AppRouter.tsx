// Third-Party ====> Router
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// Pages
import Home from "@pages/Home";
import Error from "@pages/Error";
import AboutUs from "@pages/AboutUs";
import Login from "@pages/auth/Login";
import Products from "@pages/Products";
import Categories from "@pages/Categories";
import { MainLayout } from "@layouts/index";
import Register from "@pages/auth/Register";
import { paths } from "./paths";

export const router = createBrowserRouter([
   {
      path: paths.home,
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
         {
            index: true,
            element: <Home />,
         },
         { path: "about-us", element: <AboutUs /> },
         {
            path: paths.categories.root,
            children: [
               {
                  index: true,
                  element: <Categories />,
               },
               {
                  path: "products",
                  children: [
                     { index: true, element: <Products /> },
                     {
                        path: ":prefix",
                        element: <Products />,
                        loader: ({ params }) => {
                           if (
                              typeof params.prefix !== "string" ||
                              !/^[a-z]+$/i.test(params.prefix)
                           ) {
                              throw new Response("Bad Request", {
                                 statusText: "product not found",
                                 status: 400,
                              });
                           }
                           return true;
                        },
                     },
                  ],
               },
            ],
         },
         { path: "login", element: <Login /> },
         { path: "register", element: <Register /> },
      ],
   },
]);

const AppRouter = () => {
   return <RouterProvider router={router} />;
};

export default AppRouter;
