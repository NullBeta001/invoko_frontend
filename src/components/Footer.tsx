
import React from 'react';
import { Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <a href="/" className="text-2xl font-bold text-invoko-purple mb-4 inline-block">
              Invoko
            </a>
            <p className="text-muted-foreground mb-4">
              Simplifique sua emissão de invoices e foque no que realmente importa: seu desenvolvimento.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-invoko-purple">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-invoko-purple">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-invoko-purple">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-invoko-purple">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Produto</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-muted-foreground hover:text-invoko-purple">Recursos</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-invoko-purple">Preços</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-invoko-purple">API</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-invoko-purple">Integrações</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Suporte</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-invoko-purple">Documentação</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-invoko-purple">Tutoriais</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-invoko-purple">Base de conhecimento</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-invoko-purple">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-invoko-purple">Sobre nós</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-invoko-purple">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-invoko-purple">Trabalhe conosco</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-invoko-purple">Termos de serviço</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-invoko-purple">Política de privacidade</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Invoko. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
