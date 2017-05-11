'use strict';

var React = require('react');

var PlanResultState = React.createClass({
    displayName: 'PlanResultState',

    render: function render() {
        var stateClasses = 'bamboo__plan-results__result__state bamboo__plan-results__result__state--',
            iconClasses = 'fa fa-';

        if (this.props.state.toLowerCase() === 'successful') {
            stateClasses += 'success';
            iconClasses += 'check-square';
        } else if (this.props.state.toLowerCase() === 'failed') {
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

module.exports = PlanResultState;