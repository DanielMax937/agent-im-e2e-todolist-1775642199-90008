const { createBlockingGate } = require("./blocking_gate");

describe("createBlockingGate", () => {
  test("starts unblocked", () => {
    const gate = createBlockingGate();
    expect(gate.isBlocked()).toBe(false);
  });

  test("block sets blocked state", () => {
    const gate = createBlockingGate();
    gate.block();
    expect(gate.isBlocked()).toBe(true);
  });

  test("unblock clears blocked state", () => {
    const gate = createBlockingGate();
    gate.block();
    gate.unblock();
    expect(gate.isBlocked()).toBe(false);
  });
});
