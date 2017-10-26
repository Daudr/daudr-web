import * as angularUniversal from 'angular-universal-express-firebase';

let ssrapp = angularUniversal.trigger({
  index: __dirname + '/index.html',
  main: __dirname + '/main.bundle',
  enableProdMode: true,
  cdnCacheExpiry: 2400,
  browserCacheExpiry: 1200
});
