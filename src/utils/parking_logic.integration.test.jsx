import { describe, it, expect, vi } from "vitest";
import { isDateParkingActive } from "./parking_logic";


describe ("parking_logic.isDateParkingActive.jsx", () => {
    it("Should be active at start of season (week 42)", () => {
      const date = new Date("2026-10-12T10:00:00");
      expect(isDateParkingActive(date)).toBe(true);
    })
    it("Should be active at end of season (week 18)", () => {
      const date = new Date("2026-04-30T10:00:00");
      expect(isDateParkingActive(date)).toBe(true);
    })
    it("Should be false as the time has just passed", () => {
      const date = new Date("2026-02-02T17:00:00");
      expect(isDateParkingActive(date)).toBe(false);
    })
    it("Should be false as there is still 1 second left", () => {
      const date = new Date("2026-03-02T23:59:59");
      expect(isDateParkingActive(date)).toBe(false);
    })
    it("Should be true as its in new year", () => {
      const date = new Date("2026-01-01T00:00:00");
      expect(isDateParkingActive(date)).toBe(true);
    })
    it("Should be false as it's out of season", () => {
      const date = new Date("2026-06-02T10:00:00");
      expect(isDateParkingActive(date)).toBe(false);
    })

});
