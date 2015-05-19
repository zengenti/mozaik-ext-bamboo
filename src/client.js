var request = require('superagent');
var config  = require('./config');
var Promise = require('bluebird');
var chalk   = require('chalk');
var bluebird = require('bluebird');
require('superagent-bluebird-promise');


/**
 * @param {Mozaik} mozaik
 */
var client = function (mozaik) {

    mozaik.loadApiConfig(config);

    function buildRequest(path) {
        var url = config.get('bamboo.baseUrl') + path;

        mozaik.logger.info(chalk.yellow(`[bamboo] fetching from ${ url }`));

        return request.get(url)
            .auth(
                config.get('bamboo.auth.user'),
                config.get('bamboo.auth.password')
            )
            .promise()
        ;
    }

    return {
        planResultOverview(planIds) {
            var requests = planIds.map(function(planId) {
                return buildRequest('/rest/api/latest/result/' + planId + '.json')
            });

            return bluebird.all(requests)
                .then(function (responses) {
                    console.log(responses);
                    return responses;
                });
        }
    };
};




module.exports = client;