// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBWMlFmRyJl8Wtgvd084vn8R4MwdFR6YFY",
    authDomain: "trippin-7c934.firebaseapp.com",
    databaseURL: "https://trippin-7c934.firebaseio.com",
    projectId: "trippin-7c934",
    storageBucket: "",
    messagingSenderId: "803067450941"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.