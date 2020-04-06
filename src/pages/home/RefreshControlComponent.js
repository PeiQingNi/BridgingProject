import React from 'react';
import {ScrollView, RefreshControl} from 'react-native';

export default class RefreshControlComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  _onRefresh = () => {
    setTimeout(() => {
      this.setState({
        refreshing: true,
      });
    }, 1000);
  };

  render() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
          />
        }
      />
    );
  }
}
