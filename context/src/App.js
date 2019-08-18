import React, { Component } from 'react';

import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeContextProvider>
          <Navbar />
          <BookList />

        </ThemeContextProvider>

      </div>
    );
  }
}

export default App;
