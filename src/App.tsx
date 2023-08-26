import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DemoPage from "./demo";

const router = createBrowserRouter([{ path: "/", element: <DemoPage /> }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
