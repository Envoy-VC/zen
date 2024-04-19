import { HashRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import '~/assets/index.css';

import Home from '~/pages';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
