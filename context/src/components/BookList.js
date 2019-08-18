import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext'

export default class BookList extends Component {
    static contextType = ThemeContext;
  render() {
      const { isLightTheme, light, dark } = this.context;
      const theme = isLightTheme ? light : dark;
    return (
      <div className='book-list' style={{ color: theme.syntax, background: theme.bg }}>
          <ul>
            <li style={{ background: theme.ui }}> war and peace </li>
            <li style={{ background: theme.ui }}> gone with the wind </li>
            <li style={{ background: theme.ui }}> watership down </li>
          </ul>


      </div>
    );
  }
}
