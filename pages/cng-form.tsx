"use client";

import { useState, useEffect } from "react";
import PersonalInfoCard from "@/components/cng/PersonalInfoCard";
import CNGForm, { FormData } from "@/components/cng/CNGForm";
import StickyFooter from "@/components/cng/StickyFooter";
import ConfirmationScreen from "@/components/cng/ConfirmationScreen";
import { ToastProvider, useToast } from "@/components/ui/toast";
import Image from "next/image";

const STORAGE_KEY = "cng-form-data";

const initialFormData: FormData = {
  mobilite: "",
  sujetPrincipal: "",
  priorites: "",
  souhaits: "",
  formation: "",
  immersion: "",
  commentCNG: "",
};

const CNGFormContent = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setFormData(JSON.parse(saved));
      } catch (e) {
        console.error("Error loading saved form data:", e);
      }
    }
  }, []);

  const isFormValid =
    formData.mobilite !== "" &&
    formData.sujetPrincipal.trim() !== "" &&
    formData.priorites.trim() !== "" &&
    formData.souhaits.trim() !== "" &&
    formData.formation.trim() !== "" &&
    formData.immersion.trim() !== "";

  const handleSave = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    toast({
      title: "Enregistrement effectué",
      description: "Vos réponses ont été sauvegardées. N'oubliez pas de les envoyer une fois que vous avez terminé.",
    });
  };

  const handleSubmit = () => {
    if (isFormValid) {
      localStorage.removeItem(STORAGE_KEY);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return <ConfirmationScreen />;
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="bg-card border-b border-border px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Image src="/cng-logo.png" alt="CNG Logo" width={64} height={64} className="h-16 w-auto" />
          <div>
            <h1 className="text-xl font-semibold text-foreground">Centre National de Gestion</h1>
            <p className="text-sm text-muted-foreground">Préparation à l'entretien</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8 space-y-8">
        {/* Informative text */}
        <p className="text-sm text-muted-foreground">
          Vous pouvez compléter ce formulaire en plusieurs fois. Le bouton « Enregistrer » vous permet de sauvegarder
          votre saisie et de reprendre ultérieurement la complétion du formulaire avant son envoi définitif.
        </p>
        <PersonalInfoCard />
        <CNGForm formData={formData} onFormChange={setFormData} />
      </main>

      {/* Sticky Footer */}
      <StickyFooter onSave={handleSave} onSubmit={handleSubmit} isFormValid={isFormValid} />
    </div>
  );
};

const CNGFormPage = () => {
  return (
    <ToastProvider>
      <CNGFormContent />
    </ToastProvider>
  );
};

export default CNGFormPage;
