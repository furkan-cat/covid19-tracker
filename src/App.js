import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home, Detail, ErrorBoundary } from "./pages";
import { routes } from "./utils/constants";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index path={routes.home} element={<Home />} />
        <Route
          path={routes.detail}
          element={<Detail />}
          errorElement={<ErrorBoundary />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
