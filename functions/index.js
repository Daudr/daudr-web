"use strict";
/*import 'zone.js/dist/zone-node';
import * as functions from 'firebase-functions';
import * as express from 'express';
import { renderModuleFactory } from '@angular/platform-server'
import * as fs from 'fs';

const document = fs.readFileSync(__dirname + '/index.html', 'utf8');
const AppServerModuleNgFactory = require(__dirname + '/dist-server/main.bundle').AppServerModuleNgFactory;

const app = express();

app.get('**', (req, res, next) => {
  const url = req.path;
  renderModuleFactory(AppServerModuleNgFactory, { document, url })
    .then((html) => {
      res.set('Cache-Control', 'public, max-age=1200, s-max-age=2400');
      res.send(html);
    });
});

export let ssrapp = functions.https.onRequest(app);
Object.defineProperty(exports, "__esModule", { value: true });
const angularUniversal = require("angular-universal-express-firebase");
exports.ssrapp = angularUniversal.trigger({
    index: __dirname + '/dist-server/index.html',
    main: __dirname + '/dist-server/main.bundle',
    enableProdMode: true,
    cdnCacheExpiry: 2400,
    browserCacheExpiry: 1200
});
*/


const functions = require('firebase-functions');
const express = require('express');
const fetch = require('node-fetch');
const url = require('url');
const cors = require('cors');
const app = express();

app.use(cors());

// You might instead set these as environment varibles
// I just want to make this example explicitly clear
const appUrl = 'www.daudr.me';
const renderUrl = 'https://render-tron.appspot.com/render';

// Generates the URL
function generateUrl(request) {
  return url.format({
    protocol: request.protocol,
    host: appUrl,
    pathname: request.originalUrl
  });
}

function detectBot(userAgent) {
  // List of bots to target, add more if you'd like

  const bots = [
    // crawler bots
    'googlebot',
    'bingbot',
    'yandexbot',
    'duckduckbot',
    'slurp',
    // link bots
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
    // If Bot, fetch url via rendertron

    fetch(`${renderUrl}/https://${botUrl}`)
      .then(res => res.text() )
      .then(body => {

        // Set the Vary header to cache the user agent, based on code from:
        // https://github.com/justinribeiro/pwa-firebase-functions-botrender
        res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
        res.set('Vary', 'User-Agent');

        res.send(body.toString())
    });
  } else {
    // Not a bot, fetch the regular Angular app
    // Possibly faster to serve directly from from the functions directory?
    fetch(`https://${appUrl}`)
      .then(res => res.text())
      .then(body => {
        res.send(body.toString());
      })
  }

});

exports.app = functions.https.onRequest(app);
