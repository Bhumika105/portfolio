"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "bv:profile_views";
const DISMISS_KEY = "bv:profile_views:dismissed";
const BASELINE = 12437; // initial value requested

export function ProfileViews() {
  const [count, setCount] = useState<number | null>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    try {
      // Respect dismissed state
      const dismissed = localStorage.getItem(DISMISS_KEY);
      if (dismissed === "1") {
        setHidden(true);
        return;
      }

      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        // First load on this device: show baseline now, persist next value for future visits.
        setCount(BASELINE);
        localStorage.setItem(STORAGE_KEY, String(BASELINE + 1));
      } else {
        const n = Number(raw);
        const valid = Number.isFinite(n) && n > 0 ? n : BASELINE;
        setCount(valid);
        // Increment for the next visit only (avoid number jumping during current session)
        localStorage.setItem(STORAGE_KEY, String(valid + 1));
      }
    } catch {
      setCount(BASELINE);
    }
  }, []);

  if (hidden || count == null) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative rounded-xl border bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm dark:border-white/10 dark:bg-zinc-900/95">
        <button
          aria-label="Dismiss profile views"
          className="absolute -right-2 -top-2 inline-flex h-6 w-6 items-center justify-center rounded-full border bg-background text-foreground shadow hover:opacity-90"
          onClick={() => {
            try {
              localStorage.setItem(DISMISS_KEY, "1");
            } catch {}
            setHidden(true);
          }}
        >
          <X className="h-3.5 w-3.5" />
        </button>
        <div className="text-center">
          <div className="text-sm font-semibold tracking-tight text-foreground">Profile Views</div>
          <div className="mt-1 text-2xl font-semibold tabular-nums">{count.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}
