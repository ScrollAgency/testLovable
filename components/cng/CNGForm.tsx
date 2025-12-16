import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CNGFormProps {
  formData: FormData;
  onFormChange: (data: FormData) => void;
}

export interface FormData {
  mobilite: string;
  sujetPrincipal: string;
  priorites: string;
  souhaits: string;
  formation: string;
  immersion: string;
  commentCNG: string;
}

const mobiliteOptions = [
  "Aucunement",
  "Dans mon département",
  "Dans un département limitrophe",
  "Dans ma région",
  "Dans une région limitrophe",
  "Dans tout l'hexagone",
  "Jusque dans les Outre-mer",
];

const CNGForm = ({ formData, onFormChange }: CNGFormProps) => {
  const handleChange = (field: keyof FormData, value: string) => {
    onFormChange({ ...formData, [field]: value });
  };

  return (
    <div className="space-y-6">
      {/* Mobilité - Select */}
      <div className="space-y-2">
        <Label htmlFor="mobilite" className="text-foreground font-medium">
          À ce jour, dans quelle mesure diriez-vous que vous êtes mobile ? <span className="text-destructive">*</span>
        </Label>
        <Select value={formData.mobilite} onValueChange={(value) => handleChange("mobilite", value)}>
          <SelectTrigger id="mobilite" className="bg-card">
            <SelectValue placeholder="Sélectionnez une option" />
          </SelectTrigger>
          <SelectContent className="bg-card border shadow-lg z-50">
            {mobiliteOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Sujet principal */}
      <div className="space-y-2">
        <Label htmlFor="sujetPrincipal" className="text-foreground font-medium">
          Quel est le sujet principal que vous souhaitez évoquer dans le cadre de cet entretien ?{" "}
          <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="sujetPrincipal"
          value={formData.sujetPrincipal}
          onChange={(e) => handleChange("sujetPrincipal", e.target.value)}
          className="bg-card min-h-[100px]"
          placeholder="Votre réponse..."
        />
      </div>

      {/* Priorités */}
      <div className="space-y-2">
        <Label htmlFor="priorites" className="text-foreground font-medium">
          Quelles sont les priorités ou contraintes à prendre en compte dans l'élaboration de votre projet professionnel
          ? <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="priorites"
          value={formData.priorites}
          onChange={(e) => handleChange("priorites", e.target.value)}
          className="bg-card min-h-[100px]"
          placeholder="Votre réponse..."
        />
      </div>

      {/* Souhaits */}
      <div className="space-y-2">
        <Label htmlFor="souhaits" className="text-foreground font-medium">
          Quels sont vos souhaits et/ou besoins que vous identifiez d'ores et déjà en matière de projet professionnel ?{" "}
          <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="souhaits"
          value={formData.souhaits}
          onChange={(e) => handleChange("souhaits", e.target.value)}
          className="bg-card min-h-[100px]"
          placeholder="Votre réponse..."
        />
      </div>

      {/* Formation */}
      <div className="space-y-2">
        <Label htmlFor="formation" className="text-foreground font-medium">
          Formation, coaching, concours/tour extérieur, maintien dans l'emploi, évolution professionnelle, reconversion
          ? <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="formation"
          value={formData.formation}
          onChange={(e) => handleChange("formation", e.target.value)}
          className="bg-card min-h-[100px]"
          placeholder="Votre réponse..."
        />
      </div>

      {/* Immersion */}
      <div className="space-y-2">
        <Label htmlFor="immersion" className="text-foreground font-medium">
          Avez-vous déjà participé à une période d'immersion professionnelle ?{" "}
          <span className="text-destructive">*</span>
        </Label>
        <Input
          id="immersion"
          value={formData.immersion}
          onChange={(e) => handleChange("immersion", e.target.value)}
          className="bg-card"
          placeholder="Votre réponse..."
        />
      </div>

      {/* Comment connu CNG - Facultatif */}
      <div className="space-y-2">
        <Label htmlFor="commentCNG" className="text-foreground font-medium">
          Pour les agents n'étant pas DH, D3S, DS : comment avez-vous connu le CNG ?
          <span className="ml-2 text-sm font-normal text-muted-foreground">(facultatif)</span>
        </Label>
        <p className="text-sm text-muted-foreground">
          Site internet du CNG, site intranet de votre administration, plaquette, supérieur hiérarchique, service RH,
          entretien professionnel, LinkedIn, délégation à l'encadrement supérieur…
        </p>
        <Input
          id="commentCNG"
          value={formData.commentCNG}
          onChange={(e) => handleChange("commentCNG", e.target.value)}
          className="bg-card"
          placeholder="Votre réponse (facultatif)..."
        />
      </div>
    </div>
  );
};

export default CNGForm;
