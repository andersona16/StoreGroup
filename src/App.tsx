import { FC } from 'react';
import GlobalStyles from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/app.routes';

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
        <GlobalStyles />
      </BrowserRouter>
    </>
  );
};

export default App;
