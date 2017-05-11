'use strict';

var React = require('react');
var PlanResult = require('./PlanResult');

var PlanResultsList = React.createClass({
    displayName: 'PlanResultsList',

    render: function render() {
        var _this = this;

        var planResultNodes = this.props.planResults.map(function (planResult) {
            return React.createElement(PlanResult, { planResult: planResult, key: planResult.id, baseUrl: _this.props.baseUrl });
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
                        'Plan'
                    )
                )
            ),
            planResultNodes
        );
    }
});

module.exports = PlanResultsList;