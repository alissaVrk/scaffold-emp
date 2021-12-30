import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

export const sentryInit = () => {
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    integrations: [new Integrations.BrowserTracing()],
    environment: __DEV__ ? "dev" : "release",

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0
  });
};
