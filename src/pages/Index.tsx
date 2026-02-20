import { useState } from "react";
import { useDhikrStore } from "@/hooks/useDhikrStore";
import DhikrList from "@/components/DhikrList";
import RamadanTracker from "@/components/RamadanTracker";
import Settings from "@/components/Settings";
import ramadanBg from "@/assets/ramadan-bg.jpg";
import { BookOpen, Calendar, Settings as SettingsIcon } from "lucide-react";
import noorAlFalakLogo from "@/assets/noor-al-falak-logo.png";

type Tab = "dhikr" | "journey" | "settings";

const Index = () => {
  const [activeTab, setActiveTab] = useState<Tab>("dhikr");
  const store = useDhikrStore();

  const tabs: { id: Tab; label: string; icon: typeof BookOpen }[] = [
    { id: "dhikr", label: "Dhikr", icon: BookOpen },
    { id: "journey", label: "Journey", icon: Calendar },
    { id: "settings", label: "Settings", icon: SettingsIcon },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto relative">
      {/* Hero header */}
      <div className="relative h-56 overflow-hidden shrink-0">
        <img
          src={ramadanBg}
          alt="Lavender Ramadan scene with mosque and lanterns"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          {/* Logo top-right */}
          <div className="absolute top-4 right-4 animate-fade-in-up">
            <div className="w-14 h-14 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center p-1.5 card-glow">
              <img src={noorAlFalakLogo} alt="Noor Al Falak logo" className="w-full h-full object-contain rounded-full" />
            </div>
          </div>
          <h1 className="font-serif text-4xl text-primary mb-1 tracking-wide" style={{ textShadow: '0 0 30px hsl(270 60% 78% / 0.5)' }}>
            Lantern of Dhikr
          </h1>
          <p className="text-foreground/60 text-sm font-light">
            Ramadan Day {store.store.currentDay} of 30
          </p>
          <p className="text-xs text-muted-foreground mt-1.5 italic max-w-[280px] font-light">
            "Verily, in the remembrance of Allah do hearts find rest."
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 pb-24 -mt-2 relative z-10 overflow-y-auto scrollbar-hide">
        {activeTab === "dhikr" && <DhikrList store={store} />}
        {activeTab === "journey" && <RamadanTracker store={store} />}
        {activeTab === "settings" && <Settings store={store} />}
      </div>

      {/* Bottom navigation */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-card/95 backdrop-blur-md border-t border-border z-50">
        <div className="flex">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex flex-col items-center py-3 gap-1 transition-all duration-300
                  ${active ? "text-primary" : "text-muted-foreground hover:text-foreground/60"}
                `}
                style={active ? { textShadow: '0 0 12px hsl(270 60% 78% / 0.4)' } : undefined}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Index;
