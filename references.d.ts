/* eslint-disable spaced-comment */
/// <reference path="./node_modules/tns-platform-declarations/ios.d.ts" />
/// <reference path="./node_modules/tns-platform-declarations/android-28.d.ts" />

declare const TNS_ENV: string;
declare const LOG_LEVEL: string;
declare const TEST_LOGS: boolean;
declare const PRODUCTION: boolean;
declare const SENTRY_DSN: string;
declare const SENTRY_PREFIX: string;
declare const OWM_KEY: string;
// declare const process: { env: any };

// Augment the NodeJS global type with our own extensions

declare const gVars: {
    sentry: boolean;
    isIOS: boolean;
    isAndroid: boolean;
    platform: string;
};

interface LatLonKeys {
    lat: number;
    lon: number;
    altitude?: number;
}


declare module '*.scss';
