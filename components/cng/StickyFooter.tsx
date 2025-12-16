import { Button } from "@/components/ui/button";
import { Save, Send } from "lucide-react";

interface StickyFooterProps {
  onSave: () => void;
  onSubmit: () => void;
  isFormValid: boolean;
}

const StickyFooter = ({ onSave, onSubmit, isFormValid }: StickyFooterProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card shadow-lg">
      <div className="mx-auto flex max-w-4xl items-center justify-end gap-4 px-6 py-4">
        <Button
          type="button"
          variant="outline"
          onClick={onSave}
          className="gap-2"
        >
          <Save className="h-4 w-4" />
          Enregistrer
        </Button>
        <Button
          type="button"
          onClick={onSubmit}
          disabled={!isFormValid}
          className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
        >
          <Send className="h-4 w-4" />
          Envoyer
        </Button>
      </div>
    </div>
  );
};

export default StickyFooter;
