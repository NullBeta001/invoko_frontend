
import React from 'react';
import { Button } from '@/components/ui/button';

const CTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="glass-card rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-invoko-purple/40 to-invoko-blue/40 z-0"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para simplificar suas faturas?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
              Comece a usar o Invoko gratuitamente hoje e foque no que você faz de melhor: criar soluções incríveis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-invoko-purple text-white hover:bg-opacity-90 text-lg py-6 px-8">
                Experimentar Grátis
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-invoko-purple text-lg py-6 px-8">
                Ver demonstração
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
