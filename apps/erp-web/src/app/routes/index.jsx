import ExampleScreen from "../../modules/_example/screens/ExampleScreen.jsx";
import Dashboard from "../pages/Dashboard";

export const routes = [
  {
    path: "/hr/dashboard",
    element: <Dashboard />,
  },
  {
    path: "example",
    element: <ExampleScreen />,
  },
];