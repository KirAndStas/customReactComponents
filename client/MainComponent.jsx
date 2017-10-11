import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Slider from './Slider.jsx';

import './MainComponent.less';

export default class MainComponent extends Component {
    render() {
        return (
            <div className='MainComponent'>
                <Slider />
            </div>
        );
    }
}
