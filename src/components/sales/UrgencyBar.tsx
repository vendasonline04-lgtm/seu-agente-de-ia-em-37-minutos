import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

export function UrgencyBar() {
  const [time, setTime] = useState({ h: 0, m: 14, s: 59 });

  useEffect(() => {
    const t = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        s -= 1;
        if (s < 0) { s = 59; m -= 1; }
        if (m < 0) { m = 59; h -= 1; }
        if (h < 0) { h = 0; m = 0; s = 0; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="sticky top-0 z-50 w-full bg-alert text-alert-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2 text-sm font-semibold">
        <Clock className="h-4 w-4" />
        <span className="hidden sm:inline">Oferta por tempo limitado — encerra em</span>
        <span className="sm:hidden">Encerra em</span>
        <span className="font-mono tabular-nums tracking-wider">
          {pad(time.h)}:{pad(time.m)}:{pad(time.s)}
        </span>
      </div>
    </div>
  );
}
