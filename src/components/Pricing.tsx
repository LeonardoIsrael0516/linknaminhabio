import { TrendingDown, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <section id="precos" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Plano Start */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Start</h3>
              <div className="mb-8">
                <div className="text-5xl md:text-6xl font-bold text-green-600 mb-4">R$ 97,90</div>
                <div className="text-lg text-gray-700 mb-4">Anual</div>
              </div>
              
              <div className="border-t border-b border-gray-100 py-6 mb-8">
                <div className="flex items-center text-left text-gray-700 mb-4">
                  <span>🔗 1 BioLink</span>
                </div>
                <div className="flex items-center text-left text-gray-700 mb-4">
                  <span>🌐 Domínio personalizado</span>
                </div>
                <div className="flex items-center text-left text-gray-700 mb-4">
                  <span>💼 Perfeito para uso pessoal</span>
                </div>
                <div className="flex items-center text-left text-gray-700 mb-4">
                  <span>♾️ Acesso vitalício — pague uma única vez</span>
                </div>
                <div className="flex items-center text-left text-gray-700 mb-4">
                  <span>🚀 Sem precisar de hospedagem</span>
                </div>
                <div className="flex items-center text-left text-gray-700 mb-4">
                  <span>❌ Não precisa ter domínio</span>
                </div>
                <div className="flex items-center text-left text-gray-700 mb-4">
                  <span>🔒 Plataforma 100% segura e estável</span>
                </div>
                <div className="flex items-center text-left text-gray-700 mb-4">
                  <span>💜 Todas as atualizações inclusas, sem custo extra</span>
                </div>
              </div>
              
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-6 py-6 text-xs md:text-sm font-bold mb-6 w-full" asChild>
                <a href="https://pay.cakto.com.br/paxy995_534843" target="_blank" rel="noopener noreferrer">
                  🔥 QUERO MEU ACESSO
                </a>
              </Button>
              
              <div className="flex items-center justify-center text-gray-600">
                <Shield size={20} className="mr-2" />
                <span>Compra segura PIX e cartão</span>
              </div>
            </div>
          </div>

          {/* Plano Agência */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative">
            <div className="absolute -top-4 left-0 right-0 text-center">
              <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">MAIS POPULAR</span>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Agência</h3>
              <div className="mb-8">
                <div className="text-5xl md:text-6xl font-bold text-green-600 mb-4">R$ 167,90</div>
                <div className="text-lg text-gray-700 mb-4">Anual</div>
              </div>
              
              <div className="border-t border-b border-gray-100 py-6 mb-8">
                <div className="flex items-center text-left text-gray-700 mb-4">
                  <span>🔗 Crie até 3 BioLinks profissionais</span>
                </div>
                <div className="flex items-center text-left text-gray-700 mb-4">
                  <span>🌐 Domínios personalizados ilimitados</span>
                </div>
                <div className="flex items-center text-left text-gray-700 mb-4">
                  <span>💼 Perfeito para agências e prestadores de serviço</span>
                </div>
                <div className="flex items-center text-left text-gray-700 mb-4">
                  <span>🚀 Sem precisar de hospedagem</span>
                </div>
                <div className="flex items-center text-left text-gray-700 mb-4">
                  <span>❌ Não precisa ter domínio</span>
                </div>
                <div className="flex items-center text-left text-gray-700 mb-4">
                  <span>🔒 Plataforma 100% segura e estável</span>
                </div>
                <div className="flex items-center text-left text-gray-700 mb-4">
                  <span>💜 Acesso a todas as atualizações e melhorias, sem custo extra</span>
                </div>
                <div className="flex items-center text-left text-gray-700 mb-4">
                  <span>🎨 Novos templates toda semana</span>
                </div>
                <div className="flex items-center text-left text-gray-700 mb-4">
                  <span>💰 Modelo perfeito pra quem vive do digital: mais credibilidade, mais vendas e mais resultados</span>
                </div>
              </div>
              
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-6 py-6 text-xs md:text-sm font-bold mb-6 w-full" asChild>
                <a href="https://pay.cakto.com.br/3eyce5c" target="_blank" rel="noopener noreferrer">
                  ⭐ COMEÇAR AGORA
                </a>
              </Button>
              
              <div className="flex items-center justify-center text-gray-600">
                <Shield size={20} className="mr-2" />
                <span>Compra segura PIX e cartão</span>
              </div>
            </div>
          </div>

          {/* Plano Full */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Full</h3>
              <div className="mb-8">
                <div className="text-5xl md:text-6xl font-bold text-green-600 mb-4">R$ 297,90</div>
                <div className="text-lg text-gray-700 mb-4">Anual</div>
              </div>
              
              <div className="border-t border-b border-gray-100 py-6 mb-8">
                <div className="flex items-center text-left text-gray-700 mb-4">
                  <span>🔗 Crie BioLinks ilimitados</span>
                </div>
                <div className="flex items-center text-left text-gray-700 mb-4">
                  <span>🌐 Domínios personalizados ilimitados</span>
                </div>
                <div className="flex items-center text-left text-gray-700 mb-4">
                  <span>💼 Perfeito para agências e prestadores de serviço</span>
                </div>
                <div className="flex items-center text-left text-gray-700 mb-4">
                  <span>🚀 Sem precisar de hospedagem</span>
                </div>
                <div className="flex items-center text-left text-gray-700 mb-4">
                  <span>❌ Não precisa ter domínio</span>
                </div>
                <div className="flex items-center text-left text-gray-700 mb-4">
                  <span>🔒 Plataforma 100% segura e estável</span>
                </div>
                <div className="flex items-center text-left text-gray-700 mb-4">
                  <span>💜 Acesso a todas as atualizações e melhorias, sem custo extra</span>
                </div>
                <div className="flex items-center text-left text-gray-700 mb-4">
                  <span>🎨 Novos templates toda semana</span>
                </div>
                <div className="flex items-center text-left text-gray-700 mb-4">
                  <span>💰 Modelo perfeito pra quem vive do digital: mais credibilidade, mais vendas e mais resultados</span>
                </div>
              </div>
              
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-6 py-6 text-sm md:text-base font-bold mb-6 w-full" asChild>
                <a href="https://pay.cakto.com.br/c7h75kd" target="_blank" rel="noopener noreferrer">
                  🚀 COMEÇAR AGORA
                </a>
              </Button>
              
              <div className="flex items-center justify-center text-gray-600">
                <Shield size={20} className="mr-2" />
                <span>Compra segura PIX e cartão</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
