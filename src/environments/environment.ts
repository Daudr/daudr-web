// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCy9MU_gk-uh2y6r0BLVuWK_auGoorrB2w",
    authDomain: "daudr-web.firebaseapp.com",
    databaseURL: "https://daudr-web.firebaseio.com",
    projectId: "daudr-web",
    storageBucket: "daudr-web.appspot.com",
    messagingSenderId: "303682429487"
  }
};
