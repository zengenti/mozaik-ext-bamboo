'use strict';

var React = require('react');
var Reflux = require('reflux');
var ApiConsumerMixin = require('mozaik/browser').Mixin.ApiConsumer;
var AgentsList = require('./AgentsList');

var Agents = React.createClass({
    displayName: 'Agents',

    mixins: [Reflux.ListenerMixin, ApiConsumerMixin],

    propTypes: {
        agentIds: React.PropTypes.array.isRequired
    },

    getInitialState: function getInitialState() {
        return {
            agents: null
        };
    },

    getApiRequest: function getApiRequest() {
        return {
            id: 'bamboo.agents',
            params: {
                agentIds: this.props.agentIds
            }
        };
    },

    onApiData: function onApiData(agents) {
        this.setState({
            agents: agents
        });
    },

    render: function render() {
        var titleNode = React.createElement(
            'span',
            null,
            'Bamboo ',
            React.createElement(
                'span',
                { className: 'widget__header__subject' },
                'Agents'
            )
        );
        if (this.props.title) {
            titleNode = this.props.title;
        }

        var agentsListNode = null;
        if (this.state.agents) {
            agentsListNode = React.createElement(AgentsList, { agents: this.state.agents });
        }

        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                { className: 'widget__header' },
                titleNode,
                React.createElement('i', { className: 'fa fa-eye' })
            ),
            React.createElement(
                'div',
                { className: 'widget__body' },
                agentsListNode
            )
        );
    }
});

module.exports = Agents;