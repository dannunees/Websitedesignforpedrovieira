import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ShoppingBag,
  Truck,
  Wrench,
  Store,
  PhoneCall,
  CheckCircle,
  MapPin,
  Clock,
  Refrigerator,
  Coffee,
  Tv,
  Wind,
} from 'lucide-react';

export function HomePage() {
  const brands = [
    'Miele',
    'Bosch',
    'Siemens',
    'Balay',
    'AEG',
    'LG',
    'Denon',
    'Whirlpool',
    'Teka',
    'Bertazzoni',
    'Optoma',
  ];

  const categories = [
    {
      icon: Refrigerator,
      title: 'Grandes Eletrodomésticos',
      description: 'Frigoríficos, fornos, fogões, máquinas de lavar',
      image: 'https://images.unsplash.com/photo-1758488438758-5e2eedf769ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZWZyaWdlcmF0b3J8ZW58MXx8fHwxNzY5MDQwNTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Coffee,
      title: 'Pequenos Eletrodomésticos',
      description: 'Cozinha e cuidado pessoal',
      image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwxfHx8fDE3NjkwMzIzNjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Tv,
      title: 'Eletrónica & Áudio',
      description: 'Televisores, sistemas de som, home cinema',
      image: 'https://images.unsplash.com/photo-1520444451380-ebe0f7b9cfd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njg5NDgxNzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Wind,
      title: 'Climatização',
      description: 'Soluções para conforto térmico',
      image: 'https://images.unsplash.com/photo-1756737042708-e8864961f93e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwYXBwbGlhbmNlcyUyMHNob3dyb29tfGVufDF8fHx8MTc2OTA0MDUxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const services = [
    { icon: ShoppingBag, title: 'Aconselhamento personalizado' },
    { icon: Truck, title: 'Entrega ao domicílio' },
    { icon: Wrench, title: 'Instalação especializada' },
    { icon: Store, title: 'Levantamento em loja' },
    { icon: PhoneCall, title: 'Apoio pós-venda' },
  ];

  const newsItems = [
    {
      title: 'Nova gama de frigoríficos Miele',
      category: 'Novidades de Marca',
      date: '20 Jan 2026',
      image: 'https://images.unsplash.com/photo-1758488438758-5e2eedf769ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZWZyaWdlcmF0b3J8ZW58MXx8fHwxNzY5MDQwNTEzfDA&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      title: 'Como escolher a máquina de lavar ideal',
      category: 'Dicas para Casa',
      date: '18 Jan 2026',
      image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwxfHx8fDE3NjkwMzIzNjl8MA&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      title: 'Eficiência energética: poupe na fatura',
      category: 'Eficiência Energética',
      date: '15 Jan 2026',
      image: 'https://images.unsplash.com/photo-1761795084688-bb007bc51697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlbGVjdHJvbmljcyUyMHN0b3JlfGVufDF8fHx8MTc2OTA0MDUxMnww&ixlib=rb-4.1.0&q=80&w=400',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1761795084688-bb007bc51697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlbGVjdHJvbmljcyUyMHN0b3JlfGVufDF8fHx8MTc2OTA0MDUxMnww&ixlib=rb-4.1.0&q=80&w=1920"
            alt="Loja Pedro Vieira"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              A sua loja de confiança em eletrodomésticos e eletrónica em Ílhavo
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/90 mb-8"
            >
              Aconselhamento especializado, marcas premium e serviço de proximidade
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contactos"
                className="px-8 py-4 bg-[#1F4FD8] text-white rounded-lg hover:bg-[#1845b8] transition-colors text-lg font-medium text-center"
              >
                Visitar Loja
              </Link>
              <Link
                to="/contactos"
                className="px-8 py-4 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors text-lg font-medium text-center"
              >
                Falar com um Especialista
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-8 flex items-center gap-6 text-white"
            >
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>Ílhavo – Centro da cidade</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>Seg-Sex: 09:00-19:00</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Marcas */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trabalhamos com marcas líderes mundiais</h2>
            <p className="text-lg text-gray-600">em qualidade e inovação</p>
          </motion.div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {brands.map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center p-4"
              >
                <div className="text-2xl font-bold text-gray-800">{brand}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* O que encontra */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">O que encontra na nossa loja</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative overflow-hidden rounded-2xl h-[400px] cursor-pointer"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <category.icon className="w-12 h-12 mb-4 text-[#1F4FD8]" />
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-sm text-gray-300">{category.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/produtos"
              className="inline-block px-8 py-4 bg-[#1F4FD8] text-white rounded-lg hover:bg-[#1845b8] transition-colors"
            >
              Ver Todos os Produtos
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Aconselhamento & Serviços</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aqui, não vendemos apenas produtos. Ajudamos a escolher a melhor solução para si.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <service.icon className="w-10 h-10 text-[#1F4FD8]" />
                </div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/contactos"
              className="inline-block px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors"
            >
              Falar com a Nossa Equipa
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Loja Física */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Visite a nossa loja em Ílhavo</h2>
              <p className="text-lg text-gray-600 mb-8">
                A nossa loja, localizada no centro de Ílhavo, é um espaço pensado para receber, aconselhar e apoiar cada cliente na escolha dos seus equipamentos.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#1F4FD8] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Avenida 25 de Abril</p>
                    <p className="text-gray-600">Centro Cultural de Ílhavo – Loja C/D</p>
                    <p className="text-gray-600">3830-044 Ílhavo</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[#1F4FD8] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-2">Horário de Funcionamento</p>
                    <p className="text-gray-600">Segunda a Sexta: 09:00 – 12:30 | 14:00 – 19:00</p>
                    <p className="text-gray-600">Sábado: 09:00 – 13:00</p>
                    <p className="text-gray-600">Domingo: Encerrado</p>
                  </div>
                </div>
              </div>
              <Link
                to="/contactos"
                className="inline-block px-8 py-4 bg-[#1F4FD8] text-white rounded-lg hover:bg-[#1845b8] transition-colors"
              >
                Ver Como Chegar
              </Link>
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

      {/* Novidades */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Novidades & Dicas</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-[#1F4FD8] uppercase">{item.category}</span>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <Link
                    to="/novidades"
                    className="text-[#1F4FD8] font-semibold hover:underline"
                  >
                    Ler Artigo →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/novidades"
              className="inline-block px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors"
            >
              Ver Todas as Novidades
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Precisa de ajuda a escolher o equipamento certo?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              A nossa equipa está pronta para o ajudar a encontrar a solução perfeita para a sua casa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
