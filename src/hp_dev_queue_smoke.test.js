const { getHpDevQueueId, runHpDevQueueSmoke } = require("./hp_dev_queue_smoke.js");

describe("TC-HP-3291000 HP dev queue smoke", () => {
  it("exposes stable HP dev queue id", () => {
    expect(getHpDevQueueId()).toBe("hp-dev");
  });

  it("runHpDevQueueSmoke returns healthy smoke result", () => {
    const result = runHpDevQueueSmoke();
    expect(result.ok).toBe(true);
    expect(result.queue).toBe("hp-dev");
    expect(result.checkedAt).toMatch(/^\d{4}-\d{2}-\d{2}T/);
  });
});
