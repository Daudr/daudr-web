"use strict";
const functions = require('firebase-functions');
const app = require('express')();
const fetch = require('node-fetch');
const url = require('url');
const cors = require('cors');

app.use(cors());

app.set('Cache-Control', 'public, max-age=31557600');

const appUrl = 'www.daudr.me';
const renderUrl = 'https://render-tron.appspot.com/render';

function generateUrl(request) {
  return url.format({
    protocol: request.protocol,
    host: appUrl,
    pathname: request.originalUrl
  });
}

function detectBot(userAgent) {
  const bots = [
    'googlebot',
    'bingbot',
    'yandexbot',
    'duckduckbot',
    'slurp',
    'twitterbot',
    'facebookexternalhit',
    'linkedinbot',
    'embedly',
    'baiduspider',
    'pinterest',
    'slackbot',
    'vkShare',
    'facebot',
    'outbrain',
    'W3C_Validator'
  ]

  const agent = userAgent.toLowerCase()

  for (const bot of bots) {
    if (agent.indexOf(bot) > -1) {
      console.log('bot detected', bot, agent)
      return true
    }
  }
  console.log('no bots found')
  return false
}

app.get('*', (req, res) => {
  const isBot = detectBot(req.headers['user-agent']);

  if (isBot) {
    const botUrl = generateUrl(req);

    fetch(`${renderUrl}/https://${botUrl}`)
      .then(res => res.text() )
      .then(body => {
        res.set('Cache-Control', 'public, max-age=1200, s-maxage=2400');
        res.set('Vary', 'User-Agent');

        res.send(body.toString())
    });
  } else {
    fetch(`https://${appUrl}`)
      .then(res => res.text())
      .then(body => {
        res.send(body.toString());
      })
  }
});

exports.app = functions.https.onRequest(app);
