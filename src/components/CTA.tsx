import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';

const CTA: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(cardRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
      .fromTo(contentRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(buttonsRef.current?.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.2 },
        '-=0.4'
      );
  }, []);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div ref={cardRef} className="glass-card rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-invoko-purple/40 to-invoko-blue/40 z-0"></div>
          <div ref={contentRef} className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para simplificar seus invoices?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
              Comece a usar o Invoko gratuitamente hoje e foque no que você faz de melhor: criar soluções incríveis.
            </p>
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-invoko-purple text-white hover:bg-opacity-90 text-lg py-6 px-8">
                Experimentar Grátis
              </Button>
              <Button variant="outline" className="border-invoko-purple text-invoko-purple hover:bg-invoko-purple hover:text-white text-lg py-6 px-8">
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
