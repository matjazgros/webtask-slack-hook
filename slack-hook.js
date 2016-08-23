/**
 * Usage:
 * wt create slack-hook.js --secret SLACK_HOOK=<Slack hook URL>
 *
 * then GET https://webtask.it.auth0.com/api/run/<webhook username>/slack-hook?webtask_no_cache=1&message=Hi,%20someone%20triggered%20your%20task
 */

var request = require('request');

module.exports = function(ctx, cb) {

  if (ctx.data.SLACK_HOOK === undefined || !ctx.data.SLACK_HOOK) {
    return cb('SLACK_HOOK is missing', null);
  }

  request({
    url: ctx.data.SLACK_HOOK,
    method: 'POST',
    body: JSON.stringify({
      text: ctx.data.message || 'Webtask Hook'
    })
  }, function (error, res, body) {
      cb(error, body);
  });

}
