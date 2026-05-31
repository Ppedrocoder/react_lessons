import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout';
import Home from '../pages/home';
import Item from '../pages/item';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'pokemon/:nome', element: <Item /> },
    ],
  },
]);