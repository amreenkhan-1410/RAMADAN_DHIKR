import { useDhikrStore } from "@/hooks/useDhikrStore";
import { dailyReflections } from "@/data/dhikr";
import { Check, Clock } from "lucide-react";

interface RamadanTrackerProps {
  store: ReturnType<typeof useDhikrStore>;
}

export default function RamadanTracker({ store }: RamadanTrackerProps) {
  const { isDayCompleted, setCurrentDay, store: storeData } = store;
  const currentDay = storeData.currentDay;

  const motivations = [
    "You are building a habit loved by Allah.",
    "Consistency is more beloved than quantity.",
    "Keep going — every day brings you closer to Jannah.",
    "Small deeds, done consistently, transform souls.",
  ];

  return (
    <div className="space-y-5">
      {/* Current day highlight */}
      <div className="bg-card rounded-xl p-5 border border-primary/20 card-glow text-center">
        <p className="text-muted-foreground text-sm font-light mb-1">Current Day</p>
        <p className="font-serif text-4xl text-primary" style={{ textShadow: '0 0 24px hsl(270 60% 78% / 0.4)' }}>{currentDay}</p>
        <p className="text-muted-foreground text-xs mt-1 font-light">of 30 days of Ramadan</p>
        <p className="text-sm text-foreground/70 mt-3 italic font-serif">
          "{dailyReflections[currentDay - 1]}"
        </p>
      </div>

      {/* Day grid */}
      <div className="grid grid-cols-6 gap-2">
        {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
          const completed = isDayCompleted(day);
          const isCurrent = day === currentDay;

          return (
            <button
              key={day}
              onClick={() => setCurrentDay(day)}
              className={`relative flex flex-col items-center justify-center p-2 rounded-xl text-sm font-medium transition-all duration-300
                ${isCurrent ? "border-2 border-primary bg-lilac-soft shadow-sm" : "border border-border bg-card/50"}
                ${completed ? "bg-completed-soft border-completed/30" : ""}
                hover:scale-105 active:scale-95
              `}
            >
              {completed ? (
                <Check className="w-4 h-4 text-completed mb-0.5" />
              ) : (
                <Clock className="w-3.5 h-3.5 text-muted-foreground mb-0.5" />
              )}
              <span className={completed ? "text-completed" : isCurrent ? "text-primary" : "text-muted-foreground"}>
                {day}
              </span>
            </button>
          );
        })}
      </div>

      {/* Motivation */}
      <div className="bg-card rounded-xl p-4 border border-border">
        <p className="text-sm text-foreground/70 text-center italic font-serif">
          "{motivations[currentDay % motivations.length]}"
        </p>
      </div>

      {/* End of day */}
      <div className="text-center py-4">
        <p className="text-xs text-muted-foreground italic font-light">
          May Allah accept your Dhikr and grant you Laylatul Qadr.
        </p>
      </div>
    </div>
  );
}
