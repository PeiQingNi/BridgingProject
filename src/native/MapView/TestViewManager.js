import React from 'react';
import PropTypes from 'prop-types';
import { requireNativeComponent } from 'react-native';

const RNTMap = requireNativeComponent('RNTMap', MapView);

class MapView extends React.Component {
    dd(prop) {
        console.log('prop =>', prop)
    }

    render() {
        return <RNTMap {...this.props}>
            { this.dd(this.props) }
        </RNTMap>
    }
}

MapView.propTypes = {
  zoomEnabled: PropTypes.bool,
};

export default MapView;
