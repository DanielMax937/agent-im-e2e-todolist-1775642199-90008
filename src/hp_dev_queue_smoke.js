/**
 * TC-HP-3291000 — [HP] 开发队列烟雾
 * Minimal smoke signal that the HP development queue pipeline is wired.
 */

const HP_DEV_QUEUE_ID = "hp-dev";

function getHpDevQueueId() {
  return HP_DEV_QUEUE_ID;
}

/**
 * @returns {{ ok: boolean, queue: string, checkedAt: string }}
 */
function runHpDevQueueSmoke() {
  return {
    ok: true,
    queue: HP_DEV_QUEUE_ID,
    checkedAt: new Date().toISOString(),
  };
}

module.exports = {
  getHpDevQueueId,
  runHpDevQueueSmoke,
};
