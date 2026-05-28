import { Mail, Download, PlayCircle } from "lucide-react";

const steps = [
  { Icon: Mail,        label: "Receba seu acesso por email" },
  { Icon: Download,    label: "Baixe os materiais"          },
  { Icon: PlayCircle,  label: "Agora é só assistir a aula!" },
];

export function DeliverySteps() {
  return (
    <section className="bg-secondary px-4 py-16 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Compre agora e você vai receber tudo no seu email
        </h2>

        <div className="mt-10 grid grid-cols-3 gap-4">
          {steps.map(({ Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-2xl bg-white px-4 py-6 text-center"
            >
              <Icon className="h-8 w-8 text-accent" />
              <p className="text-sm font-semibold leading-snug text-foreground">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
