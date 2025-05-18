
import React from 'react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  imgSrc: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, role, imgSrc }) => {
  return (
    <div className="neo-blur p-6 rounded-xl shadow-sm border border-white/10">
      <div className="mb-4">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}
        </div>
      </div>

      <p className="text-muted-foreground mb-6">"{quote}"</p>

      <div className="flex items-center">
        <img src={imgSrc} alt={name} className="w-10 h-10 rounded-full mr-4" />
        <div>
          <h4 className="font-bold text-white">{name}</h4>
          <p className="text-muted-foreground text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            O que nossos <span className="text-invoko-purple">usuários dizem</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Desenvolvedores como você já estão simplificando seu processo de faturamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="O Invoko me economizou horas de trabalho. Agora consigo criar invoices profissionais em minutos enquanto foco no que realmente importa: codar."
            name="Ana Silva"
            role="Desenvolvedora Frontend"
            imgSrc="https://randomuser.me/api/portraits/women/44.jpg"
          />

          <TestimonialCard
            quote="Como freelancer, eu odiava a parte burocrática. O Invoko simplificou todo o processo e ainda me ajuda a acompanhar os pagamentos."
            name="Pedro Santos"
            role="Desenvolvedor Full Stack"
            imgSrc="https://randomuser.me/api/portraits/men/32.jpg"
          />

          <TestimonialCard
            quote="A integração com pix facilitou demais o recebimento dos meus pagamentos. Meus clientes também elogiam a praticidade."
            name="Carolina Mendes"
            role="UX Designer & Dev"
            imgSrc="https://randomuser.me/api/portraits/women/68.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
