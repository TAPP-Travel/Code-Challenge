import React from 'react';
import AppContext from './context';

const MapContextToProps = Component =>
  React.forwardRef((props, ref) => (
    <AppContext.Consumer>
      {context => <Component {...props} context={context} ref={ref} />}
    </AppContext.Consumer>
  ));

export default MapContextToProps;
