import { useState, useEffect, useCallback } from "react";

interface DayProgress {
  counts: Record<string, number>;
  completed: boolean;
}

interface DhikrStore {
  days: Record<number, DayProgress>;
  currentDay: number;
  reminderTime: string;
  startDate: string;
}

const STORAGE_KEY = "lantern-of-dhikr";

const getDefaultStore = (): DhikrStore => ({
  days: {},
  currentDay: 1,
  reminderTime: "after-maghrib",
  startDate: new Date().toISOString().split("T")[0],
});

const loadStore = (): DhikrStore => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return getDefaultStore();
};

const saveStore = (store: DhikrStore) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
};

export function useDhikrStore() {
  const [store, setStore] = useState<DhikrStore>(loadStore);

  useEffect(() => {
    saveStore(store);
  }, [store]);

  const getCount = useCallback(
    (dhikrId: string): number => {
      return store.days[store.currentDay]?.counts[dhikrId] ?? 0;
    },
    [store]
  );

  const increment = useCallback((dhikrId: string) => {
    setStore((prev) => {
      const day = prev.currentDay;
      const dayData = prev.days[day] ?? { counts: {}, completed: false };
      const current = dayData.counts[dhikrId] ?? 0;
      return {
        ...prev,
        days: {
          ...prev.days,
          [day]: {
            ...dayData,
            counts: { ...dayData.counts, [dhikrId]: current + 1 },
          },
        },
      };
    });
  }, []);

  const resetCount = useCallback((dhikrId: string) => {
    setStore((prev) => {
      const day = prev.currentDay;
      const dayData = prev.days[day] ?? { counts: {}, completed: false };
      return {
        ...prev,
        days: {
          ...prev.days,
          [day]: {
            ...dayData,
            counts: { ...dayData.counts, [dhikrId]: 0 },
          },
        },
      };
    });
  }, []);

  const markDayCompleted = useCallback(() => {
    setStore((prev) => {
      const day = prev.currentDay;
      const dayData = prev.days[day] ?? { counts: {}, completed: false };
      return {
        ...prev,
        days: {
          ...prev.days,
          [day]: { ...dayData, completed: true },
        },
      };
    });
  }, []);

  const setCurrentDay = useCallback((day: number) => {
    setStore((prev) => ({ ...prev, currentDay: day }));
  }, []);

  const setReminderTime = useCallback((time: string) => {
    setStore((prev) => ({ ...prev, reminderTime: time }));
  }, []);

  const isDayCompleted = useCallback(
    (day: number): boolean => {
      return store.days[day]?.completed ?? false;
    },
    [store]
  );

  const getDayCounts = useCallback(
    (day: number): Record<string, number> => {
      return store.days[day]?.counts ?? {};
    },
    [store]
  );

  return {
    store,
    getCount,
    increment,
    resetCount,
    markDayCompleted,
    setCurrentDay,
    setReminderTime,
    isDayCompleted,
    getDayCounts,
  };
}
