
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Perguntas <span className="text-invoko-purple">Frequentes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tire suas dúvidas sobre o Invoko e como ele pode ajudar no seu negócio.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="neo-blur rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-black/20">
                <span className="text-left font-medium text-white">O Invoko emite notas fiscais?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                Não, o Invoko é focado na geração de faturas (invoices) para cobrança. Para emissão de notas fiscais, 
                você precisa utilizar o sistema da prefeitura da sua cidade ou estado. No entanto, 
                o Invoko facilita o controle das suas faturas para posteriormente emitir as notas fiscais.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="neo-blur rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-black/20">
                <span className="text-left font-medium text-white">Posso personalizar os modelos de fatura?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                Sim! O plano gratuito oferece modelos básicos, enquanto o plano Pro permite personalização 
                completa com seu logotipo, cores da sua marca e campos personalizados.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="neo-blur rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-black/20">
                <span className="text-left font-medium text-white">Como funciona a integração com métodos de pagamento?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                O Invoko permite adicionar instruções de pagamento para transferências bancárias, 
                dados PIX, ou até mesmo integrar com gateways de pagamento como Stripe para aceitar 
                cartões de crédito diretamente nas faturas (disponível no plano Pro).
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="neo-blur rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-black/20">
                <span className="text-left font-medium text-white">Posso usar o Invoko para cobrar clientes internacionais?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                Absolutamente! O Invoko suporta múltiplas moedas e formatos de fatura adaptados para clientes 
                internacionais. Você pode configurar idiomas diferentes e incluir informações específicas 
                exigidas por outros países.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="neo-blur rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-black/20">
                <span className="text-left font-medium text-white">É possível criar faturas recorrentes?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                Sim, no plano Pro você pode configurar faturas recorrentes para clientes com contratos 
                mensais ou outros períodos. O sistema enviará automaticamente as faturas nas datas programadas.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
