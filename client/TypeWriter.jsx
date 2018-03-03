import React, { Component } from 'react';
import PropTypes            from 'prop-types';

import './TypeWriter.less';

export default class MainLayout extends Component {
    static propTypes = {
        style  : PropTypes.object.isRequired,
        phrase  : PropTypes.string.isRequired,
        velocity: PropTypes.string.isRequired
    }

    state = {
        typePhrase: ''
    }

    updatePhrase() {
        const typePhraseLength = this.state.typePhrase.length;
        const { phrase } = this.props;
        const phraseEnd = typePhraseLength === phrase.length ? 0 : typePhraseLength + 1;

        this.setState({
            typePhrase: phrase.slice(0, phraseEnd)
        })
    }

    componentDidMount() {
        const { velocity } = this.props;

        setInterval(this.updatePhrase.bind(this), velocity);
    }

    render() {
        const { style } = this.props;
        const { typePhrase } = this.state;

        return (
            <div className='Typist'>
                <div style={style}> { typePhrase.toString() } </div>
            </div>

        );
    }
}
