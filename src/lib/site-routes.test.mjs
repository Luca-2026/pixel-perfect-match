import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { featuredServices, services, findRoute } from "./site-routes.ts";

describe("Claude service registration", () => {
  test("keeps Claude as the fifth of five featured services", () => {
    assert.equal(featuredServices.length, 5);
    assert.equal(featuredServices[4]?.path, "/leistungen/claude-einfuehrung");
  });
  test("keeps individual software first", () => {
    assert.equal(featuredServices[0]?.path, "/leistungen/individualsoftware");
  });
  test("retains the existing AI visibility service in the full registry", () => {
    assert.ok(services.some((service) => service.path === "/leistungen/ki-sichtbarkeit"));
    assert.equal(findRoute("/leistungen/claude-einfuehrung")?.path, "/leistungen/claude-einfuehrung");
  });
});