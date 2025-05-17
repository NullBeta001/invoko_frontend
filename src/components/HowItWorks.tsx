
import React from 'react';

interface StepProps {
  number: number;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, title, description }) => {
  return (
    <div className="flex items-start">
      <div className="w-10 h-10 rounded-full bg-invoko-purple flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Emita faturas em <span className="text-invoko-purple">3 passos simples</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transformamos um processo burocrático em algo que você pode concluir em minutos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-10">
            <Step
              number={1}
              title="Cadastre seus clientes"
              description="Adicione os dados do cliente uma única vez e os reutilize em todas as suas faturas."
            />
            <Step
              number={2}
              title="Crie sua fatura"
              description="Selecione um modelo, adicione seus serviços e valores e personalize conforme necessário."
            />
            <Step
              number={3}
              title="Envie e acompanhe"
              description="Envie a fatura por e-mail e acompanhe seu status até o pagamento."
            />
          </div>

          <div className="neo-blur rounded-xl p-6 shadow-md border border-white/10">
            <div className="mb-4 flex justify-between items-center">
              <h3 className="font-bold text-white">Nova Fatura</h3>
              <div className="text-sm bg-invoko-light-purple/30 text-invoko-purple px-3 py-1 rounded-full">
                Rascunho
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">Cliente</label>
                <div className="h-10 bg-secondary/60 rounded-lg w-full"></div>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">Serviços</label>
                <div className="space-y-2">
                  <div className="h-12 bg-secondary/60 rounded-lg w-full"></div>
                  <div className="h-12 bg-secondary/60 rounded-lg w-full"></div>
                  <button className="text-sm text-invoko-purple font-medium">+ Adicionar serviço</button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">Método de pagamento</label>
                <div className="h-10 bg-secondary/60 rounded-lg w-full"></div>
              </div>

              <div className="flex justify-between pt-4 border-t border-white/10">
                <span className="font-bold text-white">Total:</span>
                <span className="font-bold text-invoko-purple">R$ 5.000,00</span>
              </div>

              <button className="w-full bg-invoko-purple text-white py-2 rounded-lg font-medium">
                Enviar Fatura
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
