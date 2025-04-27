class Timemap {
  private store: Map<string, Array<{ timestamp: number; value: string }>>;

  constructor() {
    this.store = new Map();
  }

  set(key: string, value: string, timestamp: number) {
    if (!this.store.get(key)) {
      this.store.set(key, []);
    }
    this.store.get(key)!.push({ timestamp, value });
  }

  get(key: string, timestamp: number) {
    const entries = this.store.get(key);

    if (!entries || entries.length === 0) return "";
    let left = 0;
    let right = entries?.length - 1;
    let result = "";

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const entry = entries[mid];

      if (entry.timestamp === timestamp) {
        return entry.value;
      } else if (entry.timestamp <= timestamp) {
        result = entry.value;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  }
}
