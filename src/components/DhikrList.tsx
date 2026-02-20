import { dhikrList, DhikrItem } from "@/data/dhikr";
import { useDhikrStore } from "@/hooks/useDhikrStore";
import { Check, RotateCcw } from "lucide-react";

interface DhikrCounterProps {
  item: DhikrItem;
  count: number;
  onTap: () => void;
  onReset: () => void;
}

function DhikrCounter({ item, count, onTap, onReset }: DhikrCounterProps) {
  const isComplete = count >= item.target;
  const progress = Math.min(count / item.target, 1);

  return (
    <div
      className={`relative rounded-xl p-4 transition-all duration-500 ${
        isComplete
          ? "bg-completed-soft card-glow border border-completed/30"
          : "bg-card border border-border hover:border-primary/30 hover:shadow-sm"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          {item.arabic && (
            <p className="font-serif text-lg text-right leading-relaxed mb-1 text-primary" dir="rtl"
               style={{ textShadow: '0 0 20px hsl(270 60% 78% / 0.3)' }}>
              {item.arabic}
            </p>
          )}
          <p className="text-sm text-muted-foreground truncate font-light">
            {item.transliteration}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {isComplete ? (
            <div className="w-14 h-14 rounded-full bg-completed flex items-center justify-center emerald-glow">
              <Check className="w-6 h-6 text-primary-foreground" />
            </div>
          ) : (
            <button
              onClick={onTap}
              className="w-14 h-14 rounded-full bg-lilac-soft border-2 border-primary/30 flex flex-col items-center justify-center
                         active:scale-95 transition-all duration-200 hover:border-primary/60 hover:shadow-md"
              style={{ boxShadow: '0 0 0 0 hsl(270 50% 65% / 0)' }}
              aria-label={`Tap to count ${item.transliteration}`}
            >
              <span className="text-lg font-semibold text-primary leading-none">{count}</span>
              <span className="text-[10px] text-muted-foreground">/{item.target}</span>
            </button>
          )}
          {count > 0 && (
            <button
              onClick={onReset}
              className="p-1.5 rounded-full text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Reset"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-3 h-1 rounded-full bg-muted overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            isComplete ? "bg-completed" : "bg-primary/50"
          }`}
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </div>
  );
}

interface DhikrListProps {
  store: ReturnType<typeof useDhikrStore>;
}

export default function DhikrList({ store }: DhikrListProps) {
  const { getCount, increment, resetCount } = store;

  const totalTarget = dhikrList.reduce((sum, d) => sum + d.target, 0);
  const totalDone = dhikrList.reduce(
    (sum, d) => sum + Math.min(getCount(d.id), d.target),
    0
  );
  const overallProgress = totalDone / totalTarget;
  const allComplete = totalDone >= totalTarget;

  return (
    <div className="space-y-4">
      {/* Overall progress */}
      <div className="bg-card rounded-xl p-4 border border-border card-glow">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground font-light">Today's Progress</span>
          <span className="text-sm font-semibold text-primary">
            {Math.round(overallProgress * 100)}%
          </span>
        </div>
        <div className="h-2.5 rounded-full bg-muted overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-700 ${
              allComplete
                ? "bg-completed emerald-glow"
                : "bg-gradient-to-r from-primary/40 to-primary"
            }`}
            style={{ width: `${overallProgress * 100}%` }}
          />
        </div>
        {allComplete && (
          <p className="text-completed text-center mt-3 font-serif text-lg animate-fade-in-up">
            Completed Today 🤍 Ma sha Allah!
          </p>
        )}
      </div>

      {/* Dhikr items */}
      <div className="space-y-3">
        {dhikrList.map((item) => (
          <DhikrCounter
            key={item.id}
            item={item}
            count={getCount(item.id)}
            onTap={() => increment(item.id)}
            onReset={() => resetCount(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
