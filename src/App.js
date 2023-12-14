import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Greetings from './components/Greetings';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greetings />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
