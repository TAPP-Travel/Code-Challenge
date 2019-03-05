import React from 'react';
import Context from './context';

class AppProvider extends React.Component {
  state = {
    bookmarks: [],
    selectedPlace: {},
  };

  selectPlace = async selectedPlace => await this.setState({ selectedPlace });

  addBookmark = place => {
    const bookmarks = this.state.bookmarks.concat(place);
    this.setState({ bookmarks });
  };
  render() {
    return (
      <Context.Provider
        value={{ ...this.state, selectPlace: this.selectPlace, addBookmark: this.addBookmark  }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default AppProvider;
