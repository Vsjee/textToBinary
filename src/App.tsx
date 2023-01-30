import { Route } from 'react-router-dom';
import AppWrapper from './AppWrapper.css';
import { lazy } from 'react';
import { RoutesWithNotFound } from './utilities';
import { Footer, Nav } from './components';

const Home = lazy(() => import('./pages/home/home'));

function App() {
  return (
    <AppWrapper>
      <Nav />
      <RoutesWithNotFound>
        <Route path='/' element={<Home />} />
      </RoutesWithNotFound>
      <Footer />
    </AppWrapper>
  );
}

export default App;
