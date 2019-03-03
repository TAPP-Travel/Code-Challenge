import React from 'react';
import Context from './context';

class AppProvider extends React.Component {
  state = {
    bookmarks: [],
    selectedPlace: null,
  };

  render() {
    return <Context.Provider value={{ ...this.state }}>{this.props.children}</Context.Provider>;
  }
}

export default AppProvider;
