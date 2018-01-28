// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyBtID3nTKRrV9hGPr0Xb-MjP3lkehiY3ao",
    authDomain: "ortopedistadb.firebaseapp.com",
    databaseURL: "https://ortopedistadb.firebaseio.com",
    projectId: "ortopedistadb",
    storageBucket: "ortopedistadb.appspot.com",
    messagingSenderId: "717488552802"
  }
};
