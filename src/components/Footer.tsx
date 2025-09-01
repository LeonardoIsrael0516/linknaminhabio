import { MessageCircle, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <img
              src="/lovable-uploads/logo.png"
              alt="Logo MeuLink"
              className="w-14 h-14 object-contain"
            />
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Mail size={20} className="text-purple-400" />
              <span>Email de suporte: contato@linkaki.com.br</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Link Aki. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
