import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import TabNavigator from './screens/TabNavigator';
import Meteor from 'react-native-meteor';

const SERVER_URL = 'ws://localhost:3000/websocket';

class App extends Component {
    componentWillMount() {
        Meteor.connect("ws://localhost:3000/websocket");
    }
};

EStyleSheet.build({
    $primaryWhite: '#f5f5f5',
    $black: '000000',
    $plainWhite: 'FFFFFF',
});

export default () => <TabNavigator />;
