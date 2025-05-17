
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PlanProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

const PlanCard: React.FC<PlanProps> = ({ name, price, description, features, isPopular, buttonText }) => {
  return (
    <div className={`neo-blur rounded-xl p-6 shadow-md ${isPopular ? 'border border-invoko-purple' : 'border border-white/10'} relative`}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-invoko-purple text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
          Mais Popular
        </div>
      )}
      
      <h3 className="text-xl font-bold mb-2 text-white">{name}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold text-white">{price}</span>
        {price !== 'Grátis' && <span className="text-muted-foreground">/mês</span>}
      </div>
      
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <Check size={18} className="text-green-500 mr-2 flex-shrink-0" />
            <span className={`${isPopular ? 'text-white' : 'text-muted-foreground'}`}>{feature}</span>
          </div>
        ))}
      </div>
      
      <Button 
        className={`w-full ${isPopular ? 'bg-invoko-purple hover:bg-opacity-90' : 'bg-secondary hover:bg-secondary/80 text-white'}`}
      >
        {buttonText}
      </Button>
    </div>
  );
};

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Preços <span className="text-invoko-purple">transparentes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Escolha o plano que melhor se adapta ao seu negócio. Sem taxas ocultas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PlanCard 
            name="Gratuito"
            price="Grátis"
            description="Perfeito para freelancers começando agora."
            features={[
              "Até 3 clientes",
              "Até 5 faturas por mês",
              "Modelos básicos",
              "Exportação em PDF",
              "Suporte por email"
            ]}
            buttonText="Começar Grátis"
          />
          
          <PlanCard 
            name="Pro"
            price="R$29"
            description="Para freelancers em crescimento."
            features={[
              "Clientes ilimitados",
              "Faturas ilimitadas",
              "Modelos premium personalizáveis",
              "Integração com PIX",
              "Relatórios de pagamento",
              "Suporte prioritário"
            ]}
            isPopular={true}
            buttonText="Assinar Agora"
          />
          
          <PlanCard 
            name="Equipe"
            price="R$79"
            description="Para pequenas equipes e agências."
            features={[
              "Tudo do plano Pro",
              "Múltiplos usuários",
              "Controle de permissões",
              "Integrações avançadas",
              "API completa",
              "Suporte por telefone"
            ]}
            buttonText="Fale Conosco"
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
