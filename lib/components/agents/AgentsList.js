'use strict';

var React = require('react');
var Agent = require('./Agent');

var AgentsList = React.createClass({
    displayName: 'AgentsList',

    render: function render() {
        var agentNodes = this.props.agents.map(function (agent) {
            return React.createElement(Agent, { agent: agent, key: agent.id });
        });

        return React.createElement(
            'table',
            { className: 'table' },
            React.createElement(
                'thead',
                null,
                React.createElement(
                    'tr',
                    { className: 'table__row table__row--head' },
                    React.createElement('th', { className: 'table__cell table__cell--head' }),
                    React.createElement(
                        'th',
                        { className: 'table__cell table__cell--head' },
                        'Agent'
                    )
                )
            ),
            agentNodes
        );
    }
});

module.exports = AgentsList;