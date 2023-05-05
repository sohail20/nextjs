// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever middleware or an Edge route handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;
//  SENTRY_DSN || 'https://aeeeb67e7b7e4a1f8cbe8e670db94003@o4504891795767296.ingest.sentry.io/4504891795832832',
Sentry.init({
  dsn: "https://b13f328799224087b39226af598bbeca@o4504891795767296.ingest.sentry.io/4504891861630976",
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
