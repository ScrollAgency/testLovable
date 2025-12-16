import * as React from "react";

type ToastActionElement = React.ReactElement<any>;

export interface ToastProps {
  title?: string;
  description?: string;
  action?: ToastActionElement;
  variant?: "default" | "destructive";
}

export interface ToastContextValue {
  toast: (props: ToastProps) => void;
  toasts: (ToastProps & { id: string })[];
  dismiss: (id: string) => void;
}

const ToastContext = React.createContext<ToastContextValue | undefined>(undefined);

export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
};

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = React.useState<(ToastProps & { id: string })[]>([]);

  const toast = React.useCallback((props: ToastProps) => {
    const id = Math.random().toString(36).substring(7);
    setToasts((prev) => [...prev, { ...props, id }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  const dismiss = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toast, toasts, dismiss }}>
      {children}
      <div className="fixed bottom-0 right-0 z-50 p-4 space-y-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="bg-card border border-border rounded-lg p-4 shadow-lg max-w-sm"
          >
            {t.title && <div className="font-semibold text-foreground">{t.title}</div>}
            {t.description && (
              <div className="text-sm text-muted-foreground mt-1">{t.description}</div>
            )}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
