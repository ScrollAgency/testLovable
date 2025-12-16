import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const ConfirmationScreen = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="text-center">
        <Image
          src="/cng-logo.png"
          alt="Logo CNG"
          width={64}
          height={64}
          className="mx-auto mb-8 h-16 w-auto"
        />
        <div className="mb-6 flex justify-center">
          <CheckCircle2 className="h-20 w-20 text-success" />
        </div>
        <h1 className="mb-4 text-2xl font-semibold text-foreground">
          Formulaire envoyé
        </h1>
        <p className="text-lg text-muted-foreground">
          Votre formulaire a bien été envoyé au Centre National de Gestion.
        </p>
      </div>
    </div>
  );
};

export default ConfirmationScreen;
