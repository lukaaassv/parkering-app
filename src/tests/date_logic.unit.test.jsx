import { describe, it, expect} from "vitest";

import { getWeekNumber, isWithinParkingTime, getCurrentTimeAsString } from "../utils/date_logic.jsx";


describe ("date_logic.getWeekNumber", () => {

    it("Returns the correct week number for a given date", () => {
        const date = new Date("2026-01-01T10:00:00");
        expect(getWeekNumber(date)).toBe(1);
    })

    it("Returns the correct week number for a given date", () => {
        const date = new Date("2023-01-01T10:00:00");
        expect(getWeekNumber(date)).toBe(52);
    })

    it("Returns the correct week number for a given date", () => {
        const date = new Date("2026-12-31T10:00:00");
        expect(getWeekNumber(date)).toBe(53);
    })

});

describe ("date_logic.isWithinParkingTime", () => {

    it("One minute after parking time, should be false", () => {
        const date = new Date("2026-01-01T17:01:00");
        expect(isWithinParkingTime(date)).toBe(false);
    })

    it("Last second before parking time, should be false", () => {
        const date = new Date("2026-01-01T23:59:59");
        expect(isWithinParkingTime(date)).toBe(false);
    })
    it("Last day of week 18, should be true", () => {
        const date = new Date("2026-05-03T12:00:00");
        expect(isWithinParkingTime(date)).toBe(true);
    })
    it("First day of week 42, should be true", () => {
        const date = new Date("2026-10-12T12:00:00");
        expect(isWithinParkingTime(date)).toBe(true);
    })
});

describe ("date_logic.getCurrentTimeAsString", () => {

    it("Returns the current time as a string in the format HH:MM:SS", () => {
        const date = new Date("2026-01-01T10:05:00");
        expect(getCurrentTimeAsString(date)).toBe("10:05:00");
    })

    it("Returns the current time as a string in the format HH:MM", () => {
        const date = new Date("2026-01-01T23:59:59");
        expect(getCurrentTimeAsString(date)).toBe("23:59:59");
    })

});