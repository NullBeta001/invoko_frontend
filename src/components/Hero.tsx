import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const usersRef = useRef<HTMLDivElement>(null);
  const invoiceCardRef = useRef<HTMLDivElement>(null);
  const bgBlobsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(bgBlobsRef.current?.children,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, stagger: 0.2 }
    )

      .fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '-=1'
      )

      .fromTo(descriptionRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.6'
      )

      .fromTo(buttonsRef.current?.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.2 },
        '-=0.4'
      )

      .fromTo(usersRef.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 },
        '-=0.2'
      )

      .fromTo(invoiceCardRef.current,
        {
          y: 100,
          opacity: 0,
          rotation: -5,
        },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 1,
          ease: 'back.out(1.2)'
        },
        '-=0.8'
      )

      .then(() => {
        gsap.to(invoiceCardRef.current, {
          y: '-15px',
          rotation: 1,
          duration: 1.5,
          ease: 'power1.inOut',
          yoyo: true,
          repeat: -1,
          repeatDelay: 0.2
        });
      });

    return () => {
      gsap.killTweensOf(invoiceCardRef.current);
    };
  }, []);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div ref={bgBlobsRef} className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-invoko-purple/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-invoko-blue/20 rounded-full filter blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 mt-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div ref={contentRef} className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Invoices simples para <span className="text-invoko-purple">desenvolvedores</span>
            </h1>
            <p ref={descriptionRef} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              Gere invoices profissionais sem complicação. Crie, envie e acompanhe seus pagamentos
              com uma plataforma feita para quem cria código.
            </p>
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-invoko-purple hover:bg-opacity-90 text-lg py-6 px-8">
                Experimentar Grátis
              </Button>
              <Button variant="outline" className="border-invoko-purple text-invoko-purple hover:bg-invoko-purple hover:text-white text-lg py-6 px-8">
                Ver demonstração
              </Button>
            </div>
            {/* <div ref={usersRef} className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Usuário"
                  className="w-10 h-10 rounded-full border-2 border-background"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Usuário"
                  className="w-10 h-10 rounded-full border-2 border-background"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="Usuário"
                  className="w-10 h-10 rounded-full border-2 border-background"
                />
              </div>
              <p className="ml-4 text-sm text-muted-foreground">
                <span className="font-bold text-white">500+</span> desenvolvedores já estão usando o Invoko
              </p>
            </div> */}
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div ref={invoiceCardRef} className="glass-card rounded-2xl p-6 relative z-10">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-xl font-bold">Invoice #0042</h3>
                    <p className="text-muted-foreground">Para: Invoko LTDA</p>
                  </div>
                  <div className="bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-sm font-medium border border-green-500/20">
                    Pago
                  </div>
                </div>
                <div className="mb-6">
                  <div className="h-2 bg-white/10 rounded-full mb-3 w-full"></div>
                  <div className="h-2 bg-white/10 rounded-full mb-3 w-3/4"></div>
                  <div className="h-2 bg-white/10 rounded-full mb-3 w-5/6"></div>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">R$ 4.500,00</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Impostos</span>
                    <span className="font-medium">R$ 500,00</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-invoko-purple">R$ 5.000,00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
