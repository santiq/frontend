import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layout/MainLayout/MainLayout";
import { Dashboard, Settings } from "@/pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "/settings",
                children: [
                    {
                        path: "/settings/users",
                        element: <Settings.Users />,
                    },
                    {
                        path: "/settings/system",
                        element: <Settings.System />,
                    },
                ],
            },
        ],
    },
]);

export default router;
