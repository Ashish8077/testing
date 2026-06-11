import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import WorkPage from "../pages/WorkPage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";


export const routes = [
    {
        element: <MainLayout />,
        children: [
            {  path: "/", element: <HomePage /> },
            {  path: "/about", element: <AboutPage /> },
            {  path: "/services", element: <ServicesPage /> },
            {  path: "/work", element: <WorkPage /> },
            {  path: "/blog", element: <BlogPage /> },
            {  path: "/contact", element: <ContactPage /> }
        ]
    },
    { path: "*", element: <div>404 Not Found</div> }
]