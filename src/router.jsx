import { createHashRouter } from "react-router-dom";

import Home from "./pages/Home";
import CreateQuote from "./pages/CreateQuote";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create-quote",
    element: <CreateQuote />,
  },
]);

export default router;
