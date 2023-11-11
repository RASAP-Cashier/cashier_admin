import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RootStoreProvider } from '@/providers/RootStoreProvider.tsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RootStoreProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RootStoreProvider>,
);
