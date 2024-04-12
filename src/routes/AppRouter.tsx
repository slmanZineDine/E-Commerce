// Third-Party => Router
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// My-Components => Layouts / Pages
import { MainLayout } from "@layouts/index";
import Home from "@pages/Home";
import AboutUs from "@pages/AboutUs";
import Categories from "@pages/Categories";
import Products from "@pages/Products";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      children: [
         {
            index: true,
            element: <Home />,
         },
         {
            path: "about-us",
            element: <AboutUs />,
         },
         {
            path: "categories",
            element: <Categories />,
         },
         {
            path: "products/:userID",
            element: <Products />,
         },
      ],
   },
]);

const AppRouter = () => {
   return <RouterProvider router={router} />;
};

export default AppRouter;
