import { createBrowserRouter } from "react-router-dom";
import { DetailView } from "../features/detail-view/DetailView/DetailView";
import App from "../App";
import { Dashboard } from "../features/dashboard/Dashboard/Dashboard";

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
