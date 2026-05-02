import { createBrowserRouter } from "react-router-dom";
import { DetailView } from "../features/detail-view/detail-view/detail-view";
import App from "../App";
import { Dashboard } from "../features/dashboard/dashboard/dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "invoice",
        element: <DetailView />,
      },
    ],
  },
]);
