import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, Tag } from 'lucide-react';

export function NovidadesPage() {
  const articles = [
    {
      id: 1,
      title: 'Nova gama de frigoríficos Miele',
      category: 'Novidades de Marca',
      date: '20 Jan 2026',
      image: 'https://images.unsplash.com/photo-1758488438758-5e2eedf769ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZWZyaWdlcmF0b3J8ZW58MXx8fHwxNzY5MDQwNTEzfDA&ixlib=rb-4.1.0&q=80&w=400',
      excerpt: 'Descubra a mais recente gama de frigoríficos Miele, com tecnologia de ponta e eficiência energética superior.',
    },
    {
      id: 2,
      title: 'Como escolher a máquina de lavar ideal',
      category: 'Dicas para Casa',
      date: '18 Jan 2026',
      image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwxfHx8fDE3NjkwMzIzNjl8MA&ixlib=rb-4.1.0&q=80&w=400',
      excerpt: 'Guia completo para escolher a máquina de lavar perfeita para as necessidades da sua família.',
    },
    {
      id: 3,
      title: 'Eficiência energética: poupe na fatura',
      category: 'Eficiência Energética',
      date: '15 Jan 2026',
      image: 'https://images.unsplash.com/photo-1761795084688-bb007bc51697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlbGVjdHJvbmljcyUyMHN0b3JlfGVufDF8fHx8MTc2OTA0MDUxMnww&ixlib=rb-4.1.0&q=80&w=400',
      excerpt: 'Saiba como escolher eletrodomésticos eficientes e reduzir o consumo de energia em casa.',
    },
    {
      id: 4,
      title: 'Promoções de inverno em climatização',
      category: 'Promoções',
      date: '12 Jan 2026',
      image: 'https://images.unsplash.com/photo-1756737042708-e8864961f93e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwYXBwbGlhbmNlcyUyMHNob3dyb29tfGVufDF8fHx8MTc2OTA0MDUxMnww&ixlib=rb-4.1.0&q=80&w=400',
      excerpt: 'Aproveite as nossas promoções de inverno em sistemas de climatização e aquecimento.',
    },
    {
      id: 5,
      title: 'Novos sistemas de áudio Denon',
      category: 'Tecnologia & Áudio',
      date: '10 Jan 2026',
      image: 'https://images.unsplash.com/photo-1520444451380-ebe0f7b9cfd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpbyUyMGVxdWlwbWVudHxlbnwxfHx8fDE3Njg5NDgxNzl8MA&ixlib=rb-4.1.0&q=80&w=400',
      excerpt: 'Conheça os novos sistemas de áudio Denon, para uma experiência sonora incomparável.',
    },
    {
      id: 6,
      title: 'Pequenos eletrodomésticos que facilitam a vida',
      category: 'Dicas para Casa',
      date: '08 Jan 2026',
      image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwYXBwbGlhbmNlc3xlbnwxfHx8fDE3NjkwMzIzNjl8MA&ixlib=rb-4.1.0&q=80&w=400',
      excerpt: 'Descubra pequenos eletrodomésticos que tornam o seu dia a dia mais prático e eficiente.',
    },
  ];

  const categories = [
    'Todos',
    'Promoções',
    'Novidades de Marca',
    'Dicas para Casa',
    'Eficiência Energética',
    'Tecnologia & Áudio',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Novidades</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dicas, promoções e novidades da Pedro Vieira
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filtros de Categoria */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2.5 rounded-full transition-colors ${
                  category === 'Todos'
                    ? 'bg-[#1F4FD8] text-white'
                    : 'bg-[#F5F5F5] text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Listagem de Artigos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1F4FD8] uppercase">
                      <Tag size={14} />
                      {article.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-gray-500">
                      <Calendar size={14} />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#1F4FD8] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                  <button className="text-[#1F4FD8] font-semibold hover:underline flex items-center gap-2">
                    Ler Artigo
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Receba novidades e promoções da Pedro Vieira</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscreva a nossa newsletter e fique a par das últimas novidades, dicas e promoções exclusivas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="O seu email"
                className="flex-1 px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:border-[#1F4FD8]"
              />
              <button className="px-8 py-4 bg-[#1F4FD8] text-white rounded-lg hover:bg-[#1845b8] transition-colors whitespace-nowrap">
                Subscrever
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Ao subscrever, concorda com a nossa{' '}
              <Link to="/privacidade" className="text-[#1F4FD8] hover:underline">
                Política de Privacidade
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Visite-nos no centro de Ílhavo
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              e descubra as melhores soluções para a sua casa
            </p>
            <Link
              to="/contactos"
              className="inline-block px-8 py-4 bg-[#1F4FD8] text-white rounded-lg hover:bg-[#1845b8] transition-colors text-lg font-medium"
            >
              Ver Localização
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
