import { Route } from 'react-router-dom';
import AppWrapper from './AppWrapper.css';
import { lazy } from 'react';
import { RoutesWithNotFound } from './utilities';
import { Footer, Nav } from './components';
import { Provider } from 'react-redux';
import { MY__STORE } from './redux/store';

const Home = lazy(() => import('./pages/home/home'));

function App() {
  return (
    <AppWrapper>
      <Provider store={MY__STORE}>
        <Nav />
        <RoutesWithNotFound>
          <Route path='/' element={<Home />} />
        </RoutesWithNotFound>
        <Footer />
      </Provider>
    </AppWrapper>
  );
}

export default App;
