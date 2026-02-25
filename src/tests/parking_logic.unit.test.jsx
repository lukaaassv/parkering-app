import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock ("../utils/date_logic.jsx", () => ({
    getWeekNumber: vi.fn(),
    isWithinParkingTime: vi.fn(),
}));

import { getForbiddenSide, getAllowedSide, isDateParkingActive, parkingTimeLeftAsString } from "../utils/parking_logic.jsx";
import { getWeekNumber, isWithinParkingTime } from "../utils/date_logic.jsx";


beforeEach(() => {
  vi.clearAllMocks();
});

describe ("parking_logic.isWithinParkingTime", () => {
    it("Returns true if the the date parkings is active (week 42-18) and the in the timeframe (00-17)", () => {
        getWeekNumber.mockReturnValue(42);
        isWithinParkingTime.mockReturnValue(true)
        const date = new Date("2026-11-10T10:00:00");
        expect(isDateParkingActive(date)).toBe(true);
    })

    it("Is false when it is out of season", () => {
    getWeekNumber.mockReturnValue(30); 
    isWithinParkingTime.mockReturnValue(true);

    const date = new Date("2026-06-02T10:00:00");
    expect(isDateParkingActive(date)).toBe(false);
    })

    it("Is false when it's in season but out of the timeframe", () => {
    getWeekNumber.mockReturnValue(10); 
    isWithinParkingTime.mockReturnValue(false);

    const date = new Date("2026-03-02T23:59:59");
    expect(isDateParkingActive(date)).toBe(false);
    })
});

describe("isDateParkingActive", () => {
    it("Returns true when it is season and the parking time is active", () => {
    getWeekNumber.mockReturnValue(45);       
    isWithinParkingTime.mockReturnValue(true);

    const date = new Date("2026-11-10T10:00:00");
    expect(isDateParkingActive(date)).toBe(true);
    })
});

describe ("parking_logic.getAllowedSide", () => {
    it("Returns the side that is allowed to park on", () => {
        const date = new Date("2026-02-12T12:00:00");
        expect(getAllowedSide(date)).toBe("udda")
    })

    it("Returns the side that is allowed to park on", () => {
        const date = new Date("2026-12-03T12:00:00");
        expect(getAllowedSide(date)).toBe("jämna")
    })
});

describe ("parking_logic.getForbiddenSide", () => {
    it("Returns the side that is forbidden to park on", () => {
        const date = new Date("2026-02-13T12:00:00");
        expect(getForbiddenSide(date)).toBe("udda")
    })
      it("Returns the side that is forbidden to park on", () => {
        const date = new Date("2026-01-20T12:00:00");
        expect(getForbiddenSide(date)).toBe("jämna")
    })
});

describe ("parking_logic.parkingTimeLeftAsString", () => {
    it("Returns the time left before the side switches (00)", () => {
        const date = new Date("2026-02-13T23:59:59");
        expect(parkingTimeLeftAsString(date)).toBe("0h 0min")
    })
     it("Returns the time left before the side switches (00)", () => {
        const date = new Date("2026-02-13T00:00:00");
        expect(parkingTimeLeftAsString(date)).toBe("23h 59min")
    })
});

