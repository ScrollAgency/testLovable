import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Pencil, Check } from "lucide-react";

const initialUserInfo = {
  nom: "Dupont Marie",
  dateEntretien: "15/03/2026",
  age: "42 ans",
  corpsGrade: "Attachée d'administration hospitalière",
  fonction: "Responsable des ressources humaines",
  etablissement: "CHU de Lyon",
  telephone: "06 12 34 56 78",
  courriel: "marie.dupont@exemple.fr",
  commune: "Lyon",
};

const fields = [
  { key: "nom", label: "Nom, prénom" },
  { key: "dateEntretien", label: "Date de l'entretien" },
  { key: "age", label: "Âge" },
  { key: "corpsGrade", label: "Corps et grade actuels" },
  { key: "fonction", label: "Fonction actuelle" },
  { key: "etablissement", label: "Établissement / Administration d'exercice" },
  { key: "telephone", label: "Téléphone" },
  { key: "courriel", label: "Courriel" },
  { key: "commune", label: "Commune de résidence" },
] as const;

type UserInfoKey = keyof typeof initialUserInfo;

const PersonalInfoCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState(initialUserInfo);

  const handleChange = (key: UserInfoKey, value: string) => {
    setUserInfo((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="rounded-lg border border-info-border bg-info-bg p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-primary">
          Informations personnelles
        </h2>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => setIsEditing(!isEditing)}
          className="gap-2"
        >
          {isEditing ? (
            <>
              <Check className="h-4 w-4" />
              Terminer la modification
            </>
          ) : (
            <>
              <Pencil className="h-4 w-4" />
              Modifier mes informations
            </>
          )}
        </Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {fields.map(({ key, label }) => (
          <div key={key} className="space-y-1">
            <Label className="text-muted-foreground text-sm">{label}</Label>
            {isEditing ? (
              <Input
                value={userInfo[key]}
                onChange={(e) => handleChange(key, e.target.value)}
                className="bg-card"
              />
            ) : (
              <p className="text-foreground font-medium py-2">{userInfo[key]}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalInfoCard;
