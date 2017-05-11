'use strict';

var React = require('react');
var PlanResultState = require('./PlanResultState');

var PlanResult = React.createClass({
    displayName: 'PlanResult',

    render: function render() {
        var viewBaseUrl = this.props.baseUrl + '/browse/';
        var viewPlanResultUrl = viewBaseUrl + this.props.planResult.buildResultKey;
        return React.createElement(
            'tr',
            { className: 'table__row' },
            React.createElement(
                'td',
                { className: 'table__cell' },
                React.createElement(PlanResultState, { state: this.props.planResult.state })
            ),
            React.createElement(
                'td',
                { className: 'table__cell' },
                React.createElement(
                    'a',
                    { href: viewPlanResultUrl },
                    this.props.planResult.plan.shortName
                )
            )
        );
    }
});

module.exports = PlanResult;