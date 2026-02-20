import { useDhikrStore } from "@/hooks/useDhikrStore";
import { reminderMessages, dailyReflections } from "@/data/dhikr";
import { Bell, Moon, Sun, CloudMoon } from "lucide-react";

interface SettingsProps {
  store: ReturnType<typeof useDhikrStore>;
}

const reminderOptions = [
  { value: "after-fajr", label: "After Fajr", icon: Sun },
  { value: "after-maghrib", label: "After Maghrib", icon: CloudMoon },
  { value: "before-sleeping", label: "Before Sleeping", icon: Moon },
];

export default function Settings({ store }: SettingsProps) {
  const { store: storeData, setReminderTime, markDayCompleted } = store;

  return (
    <div className="space-y-5">
      {/* Reminder time */}
      <div className="bg-card rounded-xl p-5 border border-border card-glow">
        <div className="flex items-center gap-2 mb-4">
          <Bell className="w-4 h-4 text-primary" />
          <h3 className="font-serif text-lg text-foreground">Daily Reminder</h3>
        </div>
        <div className="space-y-2">
          {reminderOptions.map((opt) => {
            const Icon = opt.icon;
            const selected = storeData.reminderTime === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => setReminderTime(opt.value)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300
                  ${selected ? "bg-lilac-soft border border-primary/40 shadow-sm" : "border border-border hover:border-primary/20"}
                `}
              >
                <Icon className={`w-4 h-4 ${selected ? "text-primary" : "text-muted-foreground"}`} />
                <span className={`text-sm ${selected ? "text-foreground font-medium" : "text-muted-foreground font-light"}`}>
                  {opt.label}
                </span>
              </button>
            );
          })}
        </div>
        <p className="text-xs text-muted-foreground mt-3 font-light">
          Gentle reminder notifications will be sent at your chosen time.
        </p>
      </div>

      {/* Sample reminders */}
      <div className="bg-card rounded-xl p-5 border border-border">
        <h3 className="font-serif text-lg text-foreground mb-3">Sample Reminders</h3>
        <div className="space-y-2">
          {reminderMessages.slice(0, 4).map((msg, i) => (
            <div key={i} className="bg-muted rounded-xl p-3">
              <p className="text-xs text-foreground/70 italic font-light">"{msg}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mark day complete */}
      <button
        onClick={markDayCompleted}
        className="w-full py-3 rounded-xl bg-completed-soft border border-completed/30 text-completed font-medium text-sm
                   hover:bg-completed/15 transition-all duration-300 active:scale-[0.98]"
      >
        ✅ Mark Day {storeData.currentDay} as Completed
      </button>

      {/* Daily reflection */}
      <div className="bg-card rounded-xl p-5 border border-border text-center">
        <p className="font-serif text-primary text-lg mb-2">Today's Reflection</p>
        <p className="text-sm text-foreground/70 italic font-light">
          "{dailyReflections[storeData.currentDay - 1]}"
        </p>
      </div>
    </div>
  );
}
