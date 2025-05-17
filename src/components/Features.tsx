
import React from 'react';
import { FileText, CreditCard, ClipboardCheck, ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="neo-blur rounded-xl p-6 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-invoko-purple/20 rounded-lg flex items-center justify-center mb-4 text-invoko-purple">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Emissão de faturas <span className="text-invoko-purple">sem complicação</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sabemos que você prefere focar no código do que em tarefas administrativas.
            Por isso criamos uma solução simples e eficiente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<FileText size={24} />}
            title="Modelos Prontos"
            description="Use modelos de fatura profissionais personalizáveis para diferentes tipos de serviços."
          />
          <FeatureCard 
            icon={<CreditCard size={24} />}
            title="Múltiplos Pagamentos"
            description="Aceite pagamentos via PIX, cartão de crédito, transferência bancária ou boleto."
          />
          <FeatureCard 
            icon={<ClipboardCheck size={24} />}
            title="Controle Automático"
            description="Acompanhe o status de cada fatura e receba notificações quando forem pagas."
          />
        </div>

        <div className="mt-12 text-center">
          <a href="#how-it-works" className="inline-flex items-center text-invoko-purple font-medium hover:underline">
            Saiba como funciona
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
