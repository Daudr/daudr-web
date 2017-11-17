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

export let ssrapp = functions.https.onRequest(app);*/


import * as angularUniversal from 'angular-universal-express-firebase';

export let ssrapp = angularUniversal.trigger({
  index: __dirname + '/dist-server/index.html',
  main: __dirname + '/dist-server/main.bundle',
  enableProdMode: true,
  cdnCacheExpiry: 2400,
  browserCacheExpiry: 1200
});
