/**
 * Minimal synchronous gate for blocking / unblocking (test-task utility).
 * @returns {{ isBlocked: () => boolean, block: () => void, unblock: () => void }}
 */
function createBlockingGate() {
  let blocked = false;
  return {
    isBlocked() {
      return blocked;
    },
    block() {
      blocked = true;
    },
    unblock() {
      blocked = false;
    },
  };
}

module.exports = { createBlockingGate };
