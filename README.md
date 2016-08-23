# [Webtask](https://webtask.io/) for Slack [web hooks](https://api.slack.com/incoming-webhooks)

## Usage
- Create new [Incomming WebHook](https://slack.com/apps/build/custom-integration) on Slack
- run `wt create slack-hook.js --secret SLACK_HOOK=<Slack hook URL>`
- execute task `GET https://webtask.it.auth0.com/api/run/<some webtask username>/slack-hook?webtask_no_cache=1&message=<message>`

