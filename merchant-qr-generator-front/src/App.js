import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {LoginPage, QrGeneratorPage} from "./pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <QrGeneratorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
