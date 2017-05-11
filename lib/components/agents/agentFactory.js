'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var AgentFactory = (function () {
    function AgentFactory($tr) {
        _classCallCheck(this, AgentFactory);

        this.$tr = $tr;
        this.agentIdRegex = /\?agentId=(\d+)/i;
    }

    _createClass(AgentFactory, [{
        key: 'getAgentId',
        value: function getAgentId() {
            var href = this.$tr.find('td:first-child > a').attr('href'),
                matches = this.agentIdRegex.exec(href),
                agentId = null;

            if (matches != null) {
                agentId = matches[1];
            }

            return agentId;
        }
    }, {
        key: 'getAgentState',
        value: function getAgentState() {
            var stateText = this.$tr.find('td.agentStatus').text().toLowerCase(),
                state = 'offline';

            if (stateText.indexOf('building') !== -1) {
                state = 'building';
            } else if (stateText.indexOf('disabled') !== -1) {
                state = 'disabled';
            } else if (stateText.indexOf('idle') !== -1) {
                state = 'idle';
            }
            return state;
        }
    }, {
        key: 'getAgentName',
        value: function getAgentName() {
            return this.$tr.find('td:first-child > a').text();
        }
    }, {
        key: 'create',
        value: function create() {
            var id = this.getAgentId(),
                state = this.getAgentState(),
                name = this.getAgentName();

            return { id: id, state: state, name: name };
        }
    }], [{
        key: 'createFromRow',
        value: function createFromRow($tr) {
            return new AgentFactory($tr).create();
        }
    }]);

    return AgentFactory;
})();

exports['default'] = AgentFactory;
module.exports = exports['default'];