import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Refrigerator, Coffee, Tv, Wind } from 'lucide-react';

export function ProdutosPage() {
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
      id: 'grandes',
      icon: Refrigerator,
      title: 'Grandes Eletrodomésticos',
      description: 'Equipamentos essenciais para o dia a dia, com eficiência, fiabilidade e design.',
      examples: ['Frigoríficos', 'Máquinas de lavar roupa e loiça', 'Fornos', 'Fogões'],
      image: 'https://images.unsplash.com/photo-1758488438758-5e2eedf769ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZWZyaWdlcmF0b3J8ZW58MXx8fHwxNzY5MDQwNTEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'pequenos',
      icon: Coffee,
      title: 'Pequenos Eletrodomésticos',
      description: 'Soluções práticas que fazem a diferença no quotidiano.',
      examples: ['Cafeteiras', 'Torradeiras', 'Varinhas mágicas', 'Cuidado pessoal'],
      image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwxfHx8fDE3NjkwMzIzNjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'eletronica',
      icon: Tv,
      title: 'Eletrónica & Áudio',
      description: 'Experiência sonora e visual de alta qualidade para a sua casa.',
      examples: ['Televisores', 'Sistemas de som', 'Home cinema', 'Hi-Fi'],
      image: 'https://images.unsplash.com/photo-1520444451380-ebe0f7b9cfd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njg5NDgxNzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'climatizacao',
      icon: Wind,
      title: 'Climatização',
      description: 'Conforto, eficiência energética e bem-estar ao longo de todo o ano.',
      examples: ['Aquecimento', 'Arrefecimento', 'Soluções de conforto térmico'],
      image: 'https://images.unsplash.com/photo-1756737042708-e8864961f93e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwYXBwbGlhbmNlcyUyMHNob3dyb29tfGVufDF8fHx8MTc2OTA0MDUxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const services = [
    'Aconselhamento personalizado',
    'Entrega ao domicílio',
    'Instalação especializada',
    'Levantamento em loja',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Produtos</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Eletrodomésticos e eletrónica com aconselhamento especializado
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 mb-6 bg-[#1F4FD8] rounded-full flex items-center justify-center">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold mb-4">{category.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{category.description}</p>
                  <div className="mb-8">
                    <h3 className="font-semibold mb-3 text-lg">Exemplos:</h3>
                    <ul className="space-y-2">
                      {category.examples.map((example) => (
                        <li key={example} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-[#1F4FD8] rounded-full" />
                          <span className="text-gray-700">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/contactos"
                    className="inline-block px-8 py-4 bg-[#1F4FD8] text-white rounded-lg hover:bg-[#1845b8] transition-colors"
                  >
                    Consulte Disponibilidade na Loja
                  </Link>
                </div>
                <div className={`relative h-[500px] rounded-2xl overflow-hidden shadow-xl ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marcas */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Marcas em Destaque</h2>
            <p className="text-lg text-gray-600">Trabalhamos com as melhores marcas do mercado</p>
          </motion.div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {brands.map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-center p-4"
              >
                <div className="text-2xl font-bold text-gray-800">{brand}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apoio ao Cliente */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Apoio ao Cliente</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#F5F5F5] p-6 rounded-xl text-center"
              >
                <div className="w-3 h-3 bg-[#1F4FD8] rounded-full mx-auto mb-3" />
                <p className="font-semibold">{service}</p>
              </motion.div>
            ))}
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
              Quer saber preços, promoções ou disponibilidade?
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
