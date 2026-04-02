import { useWeather } from "@/hooks/useWeather";
import { type Language } from "@/hooks/useLanguage";
import { type Translations } from "@/hooks/useLanguage";

interface WeatherBarProps {
  lang: Language;
  t: Translations;
}

export function WeatherBar({ lang, t }: WeatherBarProps) {
  const { weather, loading } = useWeather();

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground px-4 py-1">
        <span className="animate-pulse">{t.weatherLoading}</span>
      </div>
    );
  }

  const weatherItems = weather.map((day, i) => (
    <span key={i} className="flex items-center gap-1.5 px-3 text-sm whitespace-nowrap">
      <span className="text-base">{day.icon}</span>
      <span className="font-medium text-foreground">{lang === "vi" ? day.dayName : day.dayNameEn}</span>
      <span className="text-muted-foreground text-xs">{day.date}</span>
      <span className="font-semibold text-primary">{day.high}°</span>
      <span className="text-muted-foreground">/</span>
      <span className="text-muted-foreground">{day.low}°C</span>
      <span className="text-xs text-muted-foreground ml-1">{lang === "vi" ? day.condition : day.conditionEn}</span>
      <span className="text-muted-foreground/30 mx-1">•</span>
    </span>
  ));

  return (
    <div className="overflow-hidden bg-card/60 border-b border-border/50">
      <div className="marquee-inner py-1.5">
        {weatherItems}
        {weatherItems}
      </div>
    </div>
  );
}
