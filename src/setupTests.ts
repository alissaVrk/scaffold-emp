import "@testing-library/jest-dom";

require("jest-canvas-mock");

jest.mock("@sentry/react");
jest.mock("@sentry/tracing");
jest.mock("core/apollo");
