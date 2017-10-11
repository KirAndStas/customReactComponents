import React, { Component } from 'react';

import './Slider.less';


// import PropTypes from 'prop-types';

export default class Slider extends Component {
    handleMouseDownEvent(e) {
        document.addEventListener('mousemove', this.handleMouseMoveEvent, true);
    }

    handleMouseMoveEvent(e) {
        const { clientX }     = e;
        const { innerWidth }  = window;

        const sideMargin  = (innerWidth - 300) / 2;
        const leftMargin  = sideMargin + 10;
        const rightMargin = innerWidth - sideMargin - 10;

        const newPosition = clientX - sideMargin - 12.5;

        if (clientX < leftMargin) {
            document.getElementById('slideButton').style.left = 0 + 'px';
        } else if (clientX > rightMargin) {
            document.getElementById('slideButton').style.left = 275 + 'px';
        } else {
            document.getElementById('slideButton').style.left = newPosition + 'px';
        }
    }

    handleMouseUpEvent() {
        document.removeEventListener('mousemove', this.handleMouseMoveEvent, true);

    }

    componentDidMount() {
        document.getElementById('slideButton').addEventListener('mousedown', this.handleMouseDownEvent.bind(this));
        document.addEventListener('mouseup', this.handleMouseUpEvent.bind(this));
    }

    render() {

        return (
            <div className='MainSlider'>
                <div className='slider'>
                    <button id='slideButton' className='button' />
                    <div className='line' />
                </div>
            </div>
        );
    }
}
