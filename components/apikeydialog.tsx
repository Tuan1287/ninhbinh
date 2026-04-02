import { useState } from "react";
import { Key, Trash2, CheckCircle, AlertCircle, ExternalLink } from "lucide-react";
import { type Translations } from "@/hooks/useLanguage";

interface ApiKeyDialogProps {
  isOpen: boolean;
  onClose: () => void;
  apiKey: string;
  onSave: (key: string) => void;
  onRemove: () => void;
  t: Translations;
}

export function ApiKeyDialog({ isOpen, onClose, apiKey, onSave, onRemove, t }: ApiKeyDialogProps) {
  const [value, setValue] = useState(apiKey);
  const [saved, setSaved] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    if (value.trim()) {
      onSave(value.trim());
      setSaved(true);
      setTimeout(() => {
        setSaved(false);
        onClose();
      }, 1000);
    }
  };

  const handleRemove = () => {
    onRemove();
    setValue("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-card border border-border rounded-2xl shadow-xl w-full max-w-md p-6 z-10 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Key className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h2 className="font-semibold text-foreground">{t.apiKeyTitle}</h2>
            <p className="text-xs text-muted-foreground">Google Gemini AI</p>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {t.apiKeyDescription}
        </p>

        <a
          href="https://aistudio.google.com/app/apikey"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline mb-4"
        >
          <ExternalLink className="w-3 h-3" />
          Google AI Studio → Get API Key
        </a>

        <div className="mb-4">
          <label className="block text-sm font-medium text-foreground mb-1.5">
            {t.apiKeyLabel}
          </label>
          <input
            type="password"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={t.apiKeyPlaceholder}
            className="w-full px-3 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
            onKeyDown={e => e.key === "Enter" && handleSave()}
            data-testid="input-api-key"
          />
        </div>

        <div className="flex items-center gap-2 mb-4">
          {apiKey ? (
            <div className="flex items-center gap-1.5 text-xs text-green-600 dark:text-green-400">
              <CheckCircle className="w-3.5 h-3.5" />
              {t.apiKeyActive}
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <AlertCircle className="w-3.5 h-3.5" />
              {t.apiKeyNone}
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleSave}
            disabled={!value.trim()}
            className="flex-1 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
            data-testid="button-save-api-key"
          >
            {saved ? (
              <>
                <CheckCircle className="w-4 h-4" />
                Saved!
              </>
            ) : (
              t.apiKeySave
            )}
          </button>
          {apiKey && (
            <button
              onClick={handleRemove}
              className="px-4 py-2.5 rounded-xl border border-destructive/30 text-destructive text-sm font-medium hover:bg-destructive/10 transition flex items-center gap-2"
              data-testid="button-remove-api-key"
            >
              <Trash2 className="w-4 h-4" />
              {t.apiKeyRemove}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
