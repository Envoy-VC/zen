import { RouterProvider, createHashRouter } from 'react-router-dom';

import { postPageLoader, userProfileLoader } from '~/lib/helpers/loaders';

import { AuthPage, Home, PostPage, UserProfile } from '~/pages';
import '~/styles/index.css';

import { withLayout } from './components/layout';

function App() {
  const router = createHashRouter([
    {
      path: '/',
      element: withLayout(<Home />),
    },
    {
      path: '/auth',
      element: withLayout(<AuthPage />),
    },
    {
      path: '/u/:userId',
      loader: userProfileLoader,
      element: withLayout(<UserProfile />),
    },
    {
      path: '/p/:postId',
      loader: postPageLoader,
      element: withLayout(<PostPage />),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
