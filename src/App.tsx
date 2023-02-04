import { Route } from 'react-router-dom';
import AppWrapper from './AppWrapper.css';
import { lazy, Suspense } from 'react';
import { RoutesWithNotFound } from './utilities';
import { Footer, Nav } from './components';
import { Provider } from 'react-redux';
import { MY__STORE } from './redux/store';
import { publicRoutes } from './models';

const Home = lazy(() => import('./pages/home/home'));
const History = lazy(() => import('./pages/history/History'));

function App() {
  return (
    <AppWrapper>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Provider store={MY__STORE}>
          <Nav />
          <RoutesWithNotFound>
            <Route path={`/${publicRoutes.HOME}`} element={<Home />} />
            <Route path={`/${publicRoutes.HISTORY}`} element={<History />} />
          </RoutesWithNotFound>
          <Footer />
        </Provider>
      </Suspense>
    </AppWrapper>
  );
}

export default App;
