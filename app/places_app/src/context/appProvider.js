import React from 'react';
import Context from './context';

class AppProvider extends React.Component {
  state = {
    bookmarks: [],
    selectedPlace: {},
  };

  selectPlace = async selectedPlace => await this.setState({ selectedPlace });
  render() {
    return (
      <Context.Provider value={{ ...this.state, selectPlace: this.selectPlace }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default AppProvider;
