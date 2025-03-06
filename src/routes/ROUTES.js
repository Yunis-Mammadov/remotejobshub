import About from "../pages/about"
import Home from "../pages/home"
import Jobs from "../pages/jobs"
import MainRoot from "../pages/MainRoot"

export const ROUTES = [
    {
        path: "",
        element: <MainRoot />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/jobs",
                element: <Jobs />
            },
        ]
    }
]