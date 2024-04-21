import { RouterProvider, createHashRouter } from 'react-router-dom';

import { userProfileLoader } from '~/lib/helpers/loaders';

import Home from '~/pages';
import '~/styles/index.css';

import { withLayout } from './components/layout';
import UserProfile from './pages/[...user]';

function App() {
  const router = createHashRouter([
    {
      path: '/',
      element: withLayout(<Home />),
    },
    {
      path: '/u/:userId',
      loader: userProfileLoader,
      element: <UserProfile />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
