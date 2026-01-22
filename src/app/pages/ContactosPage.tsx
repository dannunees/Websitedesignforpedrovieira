import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

export function ContactosPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contactos</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Estamos disponíveis para o ajudar a escolher a melhor solução
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contactos Diretos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[#F5F5F5] p-8 rounded-2xl text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-[#1F4FD8] rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3">Telefone</h3>
              <a href="tel:234410312" className="text-2xl font-semibold text-[#1F4FD8] hover:underline">
                234 410 312
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#F5F5F5] p-8 rounded-2xl text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-[#1F4FD8] rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3">Email</h3>
              <div className="space-y-2">
                <a
                  href="mailto:geral@pedrovieiralda.com"
                  className="block text-sm text-gray-700 hover:text-[#1F4FD8] hover:underline"
                >
                  geral@pedrovieiralda.com
                </a>
                <a
                  href="mailto:gerencia.pedrovieira@gmail.com"
                  className="block text-sm text-gray-700 hover:text-[#1F4FD8] hover:underline"
                >
                  gerencia.pedrovieira@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-[#F5F5F5] p-8 rounded-2xl text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-[#1F4FD8] rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3">Morada</h3>
              <p className="text-sm text-gray-700">
                Avenida 25 de Abril<br />
                Centro Cultural de Ílhavo – Loja C/D<br />
                3830-044 Ílhavo
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-[#F5F5F5] p-8 rounded-2xl text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-[#1F4FD8] rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3">Horário</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <p>Seg-Sex: 09:00-12:30</p>
                <p>14:00-19:00</p>
                <p>Sábado: 09:00-13:00</p>
                <p className="text-gray-500">Domingo: Encerrado</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Prefere falar connosco diretamente? Estamos sempre disponíveis durante o horário de funcionamento.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mapa e Formulário */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mapa */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-[500px] rounded-2xl overflow-hidden shadow-xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.1234567890123!2d-8.6708!3d40.5972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDM1JzUwLjAiTiA4wrA0MCcxNC45Ilc!5e0!3m2!1spt-PT!2spt!4v1234567890123!5m2!1spt-PT!2spt"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Pedro Vieira Lda"
              />
            </motion.div>

            {/* Formulário */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <h2 className="text-3xl font-bold mb-6">Envie-nos uma mensagem</h2>
              <p className="text-gray-600 mb-8">
                Para informações sobre preços, promoções ou disponibilidade, recomendamos também a visita à loja.
              </p>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1F4FD8]"
                    placeholder="O seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1F4FD8]"
                    placeholder="seuemail@exemplo.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1F4FD8]"
                    placeholder="Opcional"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#1F4FD8] resize-none"
                    placeholder="Como podemos ajudar?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#1F4FD8] text-white rounded-lg hover:bg-[#1845b8] transition-colors font-medium"
                >
                  Enviar Mensagem
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Redes Sociais */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Acompanhe-nos nas redes sociais</h2>
            <p className="text-lg text-gray-600 mb-8">
              Fique a par das nossas novidades e promoções
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="#"
                className="w-14 h-14 bg-[#1F4FD8] rounded-full flex items-center justify-center text-white hover:bg-[#1845b8] transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="w-14 h-14 bg-[#1F4FD8] rounded-full flex items-center justify-center text-white hover:bg-[#1845b8] transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
