// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'; // Wrap with BrowserRouter here
import reportWebVitals from './reportWebVitals';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Import QueryClient and Provider
import App from './App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient(); // Create queryClient instance

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>  
      <Provider store={store}>  
        <BrowserRouter>  
          <App />
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
