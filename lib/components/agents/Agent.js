'use strict';

var React = require('react');
var AgentState = require('./AgentState');

var Agent = React.createClass({
    displayName: 'Agent',

    render: function render() {
        return React.createElement(
            'tr',
            { className: 'table__row' },
            React.createElement(
                'td',
                { className: 'table__cell' },
                React.createElement(AgentState, { state: this.props.agent.state })
            ),
            React.createElement(
                'td',
                { className: 'table__cell' },
                this.props.agent.name
            )
        );
    }
});

module.exports = Agent;