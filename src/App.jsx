import { HashRouter, Routes, Route } from 'react-router-dom';
import { MyCollection } from './pages/mycollection';
import { DashboardPage } from './pages/dashboard';
import { Details } from './pages/Details';
import { Layout } from './pages/Layout';
import { AboutPage } from './pages/about';

import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="my-collection" element={<MyCollection />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="details/:pokeid" element={<Details />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}


/**
  Functional Component
  Statefull Components
 */

export default App
