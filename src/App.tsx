import { Route } from 'react-router-dom';
import AppWrapper from './AppWrapper.css';
import { lazy } from 'react';
import { RoutesWithNotFound } from './utilities';

const Home = lazy(() => import('./pages/home/home'));

function App() {
  return (
    <AppWrapper>
      <RoutesWithNotFound>
        <Route path='/' element={<Home />} />
      </RoutesWithNotFound>
    </AppWrapper>
  );
}

export default App;
