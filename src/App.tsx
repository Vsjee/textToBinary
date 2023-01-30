import { Routes, Route } from 'react-router-dom';
import AppWrapper from './AppWrapper.css';
import { lazy } from 'react';

const Home = lazy(() => import('./pages/home/home'));

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
