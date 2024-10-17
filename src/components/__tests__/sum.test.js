import { sum } from "../../../sum";

test("Check sum of two positive number.", () => {
  expect(sum(12, 3)).toBe(15);
  expect(sum(12, -3)).toBe(9);
});
