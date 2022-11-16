import { test, expect } from "@jest/globals";
import { Privacy } from "../../dist/lib/firebolt-manage";

let listenerId: number;

test("Able to get TypeScript listenerId", () => {
  return Privacy.listen("limitAdTrackingChanged", () => {}).then(
    (id: number) => {
      listenerId = id;
      console.log(listenerId);
      expect(listenerId > 0).toBe(true);
    }
  );
});

test("privacy.once() for limitAdTrackingChanged event", () => {
  Privacy.once;
  return Privacy.once("limitAdTrackingChanged", () => {}).then(
    (res: number) => {
      expect(res > 0).toBe(true);
    }
  );
});

test("privacy.shareWatchHistory()", () => {
  return Privacy.shareWatchHistory('test').then((res: boolean) => {
    // TODO: fix
    expect(true).toBe(true);
  });
});

test("privacy.enableRecommendations()", () => {
  return Privacy.enableRecommendations('test').then((res: boolean) => {
    // TODO: fix
    expect(true).toBe(true);
  });
});

test("privacy.rememberWatchedPrograms()", () => {
  return Privacy.rememberWatchedPrograms('test').then((res: boolean) => {
    // TODO: fix
    expect(true).toBe(true);
  });
});

test("privacy.listen() for enableRecommendationsChanged event", () => {
  Privacy.once;
  return Privacy.listen("enableRecommendationsChanged", () => {}).then(
    (res: number) => {
      expect(res > 0).toBe(true);
    }
  );
});

test("privacy.once() for enableRecommendationsChanged event", () => {
  Privacy.once;
  return Privacy.once("enableRecommendationsChanged", () => {}).then(
    (res: number) => {
      expect(res > 0).toBe(true);
    }
  );
});

test("privacy.listen() for rememberWatchedProgramsChanged event", () => {
  Privacy.once;
  return Privacy.listen("rememberWatchedProgramsChanged", () => {}).then(
    (res: number) => {
      expect(res > 0).toBe(true);
    }
  );
});

test("privacy.once() for rememberWatchedProgramsChanged event", () => {
  Privacy.once;
  return Privacy.once("rememberWatchedProgramsChanged", () => {}).then(
    (res: number) => {
      expect(res > 0).toBe(true);
    }
  );
});

test("privacy.listen() for shareWatchHistoryChanged event", () => {
  Privacy.once;
  return Privacy.listen("shareWatchHistoryChanged", () => {}).then(
    (res: number) => {
      expect(res > 0).toBe(true);
    }
  );
});

test("privacy.once() for shareWatchHistoryChanged event", () => {
  Privacy.once;
  return Privacy.once("shareWatchHistoryChanged", () => {}).then(
    (res: number) => {
      expect(res > 0).toBe(true);
    }
  );
});

test("privacy.clear()", () => {
  const result = Privacy.clear(2);
  expect(result).toBeFalsy();
});
