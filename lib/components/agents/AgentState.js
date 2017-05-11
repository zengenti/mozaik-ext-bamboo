'use strict';

var React = require('react');

var AgentState = React.createClass({
    displayName: 'AgentState',

    render: function render() {
        var stateClasses = 'bamboo__plan-results__result__state bamboo__plan-results__result__state--',
            iconClasses = 'fa fa-',
            state = this.props.state.toLowerCase();

        if (state === 'idle' || state === 'building') {
            stateClasses += 'success';
            iconClasses += 'check-square';
        } else if (state === 'offline' || state === 'disabled') {
            stateClasses += 'error';
            iconClasses += 'warning';
        } else {
            stateClasses += 'unknown';
            iconClasses += 'question-circle';
        }

        return React.createElement(
            'span',
            { className: stateClasses },
            React.createElement('i', { className: iconClasses })
        );
    }
});

module.exports = AgentState;