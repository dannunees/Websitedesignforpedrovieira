import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Coluna 1 - Marca */}
          <div>
            <div className="text-2xl font-bold mb-4">PEDRO VIEIRA</div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Eletrodomésticos & Eletrónica
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empresa familiar no centro de Ílhavo. Aconselhamento especializado, marcas de confiança e serviço de proximidade.
            </p>
          </div>

          {/* Coluna 2 - Navegação */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Início</Link></li>
              <li><Link to="/produtos" className="text-gray-400 hover:text-white transition-colors">Produtos</Link></li>
              <li><Link to="/sobre" className="text-gray-400 hover:text-white transition-colors">Sobre Nós</Link></li>
              <li><Link to="/novidades" className="text-gray-400 hover:text-white transition-colors">Novidades</Link></li>
              <li><Link to="/contactos" className="text-gray-400 hover:text-white transition-colors">Contactos</Link></li>
            </ul>
          </div>

          {/* Coluna 3 - Categorias */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categorias</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Grandes Eletrodomésticos</li>
              <li className="text-gray-400">Pequenos Eletrodomésticos</li>
              <li className="text-gray-400">Eletrónica & Áudio</li>
              <li className="text-gray-400">Climatização</li>
            </ul>
            <p className="text-sm text-gray-500 mt-4">
              Consulte disponibilidade diretamente na loja.
            </p>
          </div>

          {/* Coluna 4 - Contactos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contactos</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-[#1F4FD8] mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:234410312" className="text-gray-400 hover:text-white transition-colors">
                    234 410 312
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-[#1F4FD8] mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <a href="mailto:geral@pedrovieiralda.com" className="hover:text-white transition-colors block">
                    geral@pedrovieiralda.com
                  </a>
                  <a href="mailto:gerencia.pedrovieira@gmail.com" className="hover:text-white transition-colors block mt-1">
                    gerencia.pedrovieira@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#1F4FD8] mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  Avenida 25 de Abril<br />
                  Centro Cultural de Ílhavo – Loja C/D<br />
                  3830-044 Ílhavo
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-[#1F4FD8] mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  Seg–Sex: 09:00–12:30 | 14:00–19:00<br />
                  Sábado: 09:00–13:00
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 py-8 mb-8">
          <div className="max-w-2xl">
            <h3 className="text-lg font-semibold mb-2">Receba novidades, promoções e dicas da Pedro Vieira</h3>
            <div className="flex gap-4 mt-4">
              <input
                type="email"
                placeholder="O seu email"
                className="flex-1 px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#1F4FD8]"
              />
              <button className="px-8 py-3 bg-[#1F4FD8] text-white rounded-lg hover:bg-[#1845b8] transition-colors whitespace-nowrap">
                Subscrever
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Ao subscrever, concorda com a nossa Política de Privacidade
            </p>
          </div>
        </div>

        {/* PRR Logo Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-white px-8 py-4 rounded-lg">
              <div className="text-[#003366] font-bold text-sm">
                PRR
                <div className="text-xs">Plano de Recuperação e Resiliência</div>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Projeto apoiado pelo Plano de Recuperação e Resiliência (PRR)
            </p>
          </div>
        </div>

        {/* Redes Sociais e Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Pedro Vieira, Lda. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
          </div>
          <div className="flex gap-6 text-sm">
            <Link to="/privacidade" className="text-gray-500 hover:text-white transition-colors">Política de Privacidade</Link>
            <Link to="/termos" className="text-gray-500 hover:text-white transition-colors">Termos e Condições</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
