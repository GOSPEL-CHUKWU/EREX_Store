import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Store from '../pages/Store';
import WomenProductCategory from '../pages/WomenProductCategory';
import AccessoriesProductCategory from '../pages/AccessoriesProductCategory';
import MenProductCategory from '../pages/MenProductCategory';

function ReactRouterSetup() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="fullcloset/store" element={<Store />} />
        <Route path="fullcloset/product-category/women" element={<WomenProductCategory/> } />
        <Route path="fullcloset/product-category/men" element={<MenProductCategory/> } />
        <Route path="fullcloset/product-category/accessories" element={<AccessoriesProductCategory/> } />
        <Route path="about" element={<About />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

const Root = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default ReactRouterSetup;
