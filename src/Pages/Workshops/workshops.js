import reforco1 from './ReforçoMatemática/reforço.jpg'
import reforco2 from './ReforçoMatemática/reforço2.jpg'
import reforco3 from './ReforçoMatemática/reforço3.jpg'
import arte1 from './ReforçoMatemática/reforço.jpg'
import arte2 from './ReforçoMatemática/reforço2.jpg'
import arte3 from './ReforçoMatemática/reforço3.jpg'

const workshops = [
  {
    id: 'reforco-escolar',
    title: 'Reforço Escolar',
    icon: 'Book',
    images: [reforco1, reforco2, reforco3],
    description:
      'Oferecemos aulas de reforço escolar para crianças e adolescentes, auxiliando no aprendizado de disciplinas fundamentais. Com um ambiente acolhedor e professores dedicados, buscamos fortalecer o desempenho acadêmico e estimular a confiança dos alunos, proporcionando melhores oportunidades para o futuro!',
    infoText: `Nossa oficina oferece aulas focadas para crianças e adolescentes que desejam melhorar seu desempenho escolar. Com turmas reduzidas e professores capacitados, estimulamos o aprendizado através de métodos dinâmicos e interativos.

Nossa oficina de reforço escolar oferece uma experiência completa, abordando diversas matérias para garantir o sucesso acadêmico dos alunos.`,
    schedule:
      'Terças e Quartas, Grupo 1: 17:30h às 19h, e Grupo 2: 19h às 20:30',
    studentsInfo: '30+ alunos estudando',
  },
  {
    id: 'artes',
    title: 'Arte Cênica e Audiovisual',
    icon: 'Drama',
    images: [arte1, arte2, arte3],
    description:
      'Nossa oficina de Arte Cênica e Audiovisual oferece aos participantes...',
    infoText: `A oficina visa desenvolver a expressão artística, criatividade e habilidades técnicas em teatro e audiovisual, preparando os alunos para várias áreas artísticas.

Explore sua criatividade através das artes cênicas e audiovisuais com projetos práticos e apresentações.`,
    schedule: 'Segundas e Quintas, 17h às 19h',
    studentsInfo: '40+ crianças participando',
  },
]

export default workshops
