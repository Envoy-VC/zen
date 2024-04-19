import { RouterProvider, createHashRouter } from 'react-router-dom';

import Home from '~/pages';
import '~/styles/index.css';

import { withLayout } from './components/layout';

function App() {
  const router = createHashRouter([
    {
      path: '/',
      element: withLayout(<Home />),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
