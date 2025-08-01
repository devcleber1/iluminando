import Educação from '../../../assets/educacao.jpg';
import Capoeira from '../../../assets/capoeira.jpg';
import Futebol from '../../../assets/futebol.jpg';

const workshops = [
  {
    id: 'reforco-escolar', // Adicionado para corresponder ao workshops.js
    title: 'Reforço Escolar',
    img: Educação,
    alt: 'Oficina de Reforço Escolar',
    desc: 'Apoio educacional para crianças e jovens, promovendo aprendizado e crescimento.',
  },
  {
    id: 'capoeira', // Adicionado para corresponder ao workshops.js
    title: 'Capoeira',
    img: Capoeira,
    alt: 'Oficina de Capoeira',
    desc: 'Oficina de capoeira que une cultura, esporte e desenvolvimento físico.',
  },
  {
    id: 'futebol', // Adicionado para corresponder ao workshops.js
    title: 'Futebol',
    img: Futebol,
    alt: 'Oficina de Futebol',
    desc: 'Treinamento esportivo que incentiva trabalho em equipe e disciplina.',
  },
];

export default workshops;