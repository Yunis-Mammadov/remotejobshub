import About from "../pages/About"
import Home from "../pages/Home"
import Jobs from "../pages/Jobs"
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