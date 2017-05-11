'use strict';

var React = require('react');
var Reflux = require('reflux');
var ApiConsumerMixin = require('mozaik/browser').Mixin.ApiConsumer;
var PlanResultsList = require('./PlanResultsList');

var PlanResults = React.createClass({
    displayName: 'PlanResults',

    mixins: [Reflux.ListenerMixin, ApiConsumerMixin],

    propTypes: {
        planIds: React.PropTypes.array.isRequired
    },

    getInitialState: function getInitialState() {
        return {
            planResults: null
        };
    },

    getApiRequest: function getApiRequest() {
        return {
            id: 'bamboo.plan_results',
            params: {
                planIds: this.props.planIds
            }
        };
    },

    onApiData: function onApiData(planResults) {
        this.setState({
            planResults: planResults.results,
            baseUrl: planResults.baseUrl
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
                'Build Plans'
            )
        );
        if (this.props.title) {
            titleNode = this.props.title;
        }

        var planResultsListNode = null;
        if (this.state.planResults) {
            planResultsListNode = React.createElement(PlanResultsList, { planResults: this.state.planResults, baseUrl: this.state.baseUrl });
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
                planResultsListNode
            )
        );
    }
});

module.exports = PlanResults;