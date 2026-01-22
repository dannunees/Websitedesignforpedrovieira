import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Award, Users, MapPin } from 'lucide-react';

export function SobrePage() {
  const values = [
    { icon: Heart, title: 'Proximidade', description: 'Uma relação próxima e de confiança com cada cliente' },
    { icon: Shield, title: 'Confiança', description: 'Transparência e honestidade em cada interação' },
    { icon: Award, title: 'Qualidade', description: 'Apenas as melhores marcas e produtos' },
    { icon: Users, title: 'Aconselhamento especializado', description: 'Equipa dedicada e experiente' },
  ];

  const differentials = [
    'Empresa familiar com forte presença local',
    'Aconselhamento humano e especializado',
    'Marcas de referência internacional',
    'Serviço de entrega e instalação',
    'Apoio pós-venda',
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Sobre Nós</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Uma empresa familiar com raízes em Ílhavo
            </p>
          </motion.div>
        </div>
      </section>

      {/* A Nossa História */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">A Nossa História</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  A <strong>Pedro Vieira, Lda</strong> é uma empresa familiar de comércio a retalho de eletrodomésticos e eletrónica, localizada no centro de Ílhavo.
                </p>
                <p>
                  Com uma longa história no comércio local, a empresa cresceu sempre com base na proximidade com os clientes, no aconselhamento honesto e na aposta em marcas de qualidade.
                </p>
                <p>
                  Ao longo dos anos, a Pedro Vieira, Lda consolidou-se como uma referência local, mantendo uma relação de confiança com gerações de clientes.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1761795084688-bb007bc51697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlbGVjdHJvbmljcyUyMHN0b3JlfGVufDF8fHx8MTc2OTA0MDUxMnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Loja Pedro Vieira"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Os Nossos Valores */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Os Nossos Valores</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Acreditamos que cada cliente é único e que a escolha do equipamento certo começa com ouvir, aconselhar e acompanhar.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-[#1F4FD8] rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* A Nossa Loja */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1756737042708-e8864961f93e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwYXBwbGlhbmNlcyUyMHNob3dyb29tfGVufDF8fHx8MTc2OTA0MDUxMnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Showroom"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">A Nossa Loja</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A nossa loja, localizada no centro de Ílhavo, é um espaço pensado para receber, aconselhar e apoiar cada cliente na escolha dos seus equipamentos.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Visite-nos e descubra um ambiente acolhedor onde pode explorar produtos de qualidade e receber orientação personalizada da nossa equipa.
              </p>
              <div className="space-y-4">
                <Link
                  to="/contactos"
                  className="inline-block px-8 py-4 bg-[#1F4FD8] text-white rounded-lg hover:bg-[#1845b8] transition-colors mr-4"
                >
                  Visitar Loja
                </Link>
                <Link
                  to="/contactos"
                  className="inline-block px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors"
                >
                  Ver Localização
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* O que nos diferencia */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">O Que Nos Diferencia</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            {differentials.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 py-4"
              >
                <div className="w-6 h-6 bg-[#1F4FD8] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Presença Local & Comunidade */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <MapPin className="w-16 h-16 mx-auto mb-6 text-[#1F4FD8]" />
              <h2 className="text-4xl font-bold mb-6">Presença Local & Comunidade</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                A Pedro Vieira, Lda orgulha-se de fazer parte da comunidade de Ílhavo, contribuindo para o comércio local e mantendo uma relação próxima com clientes e parceiros.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Procura confiança, experiência e aconselhamento especializado?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/contactos"
                className="px-8 py-4 bg-[#1F4FD8] text-white rounded-lg hover:bg-[#1845b8] transition-colors text-lg font-medium"
              >
                Visitar Loja
              </Link>
              <Link
                to="/contactos"
                className="px-8 py-4 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium"
              >
                Contactar
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
