import reforco1 from './ReforçoMatemática/reforço.jpg';
import reforco2 from './ReforçoMatemática/reforço2.jpg';
import reforco3 from './ReforçoMatemática/reforço3.jpg';
import escolar from './ReforçoEscolar/escolar6.jpg';
import escolar2 from './ReforçoEscolar/escolar2.jpg';
import escolar3 from './ReforçoEscolar/escolar3.jpg';
import escolar4 from './ReforçoEscolar/escolar4.jpg';
import escolar5 from './ReforçoEscolar/escolar5.jpg';
import escolar6 from './ReforçoEscolar/escolar.jpg';
import alfabetizacao from './Alfabetização/alfabetizacao5.jpg';
import alfabetizacao2 from './Alfabetização/alfabetizacao2.jpg';
import alfabetizacao3 from './Alfabetização/alfabetizacao3.jpg';
import alfabetizacao4 from './Alfabetização/alfabetizacao4.jpg';
import alfabetizacao5 from './Alfabetização/alfabetizacao.jpg';
import capoeira from './Capoeira/capoeira.jpg';
import capoeira2 from './Capoeira/capoeira2.jpg';
import capoeira3 from './Capoeira/capoeira3.jpg';
import capoeira4 from './Capoeira/capoeira4.jpg';
import futebol from './Futebol/futebol3.jpg';
import futebol2 from './Futebol/futebol2.jpg';
import futebol3 from './Futebol/futebol.jpg';
import futebol4 from './Futebol/futebol4.jpg';

const workshops = [
  {
    id: 'reforco-de-matematica',
    title: 'Reforço de Matemática',
    icon: 'Calculator',
    images: [reforco1, reforco2, reforco3],
    description:
      'Nossa ONG é focada em oferecer reforço de matemática para crianças e jovens que enfrentam dificuldades na disciplina. Com metodologias práticas e dinâmicas, trabalhamos para tornar a matemática acessível e descomplicada, ajudando os estudantes a melhorar o desempenho escolar e a confiança em suas habilidades. Nossas aulas incluem resolução de problemas, conceitos fundamentais e estratégias para desenvolver o raciocínio lógico, tudo em um ambiente acolhedor e estimulante. Acreditamos que, com o suporte certo, todos podem alcançar o sucesso e se apaixonar pela matemática!',
    infoText: `Nossa ONG é especializada em oferecer reforço de matemática para crianças e jovens que enfrentam desafios na disciplina. Com metodologias práticas e envolventes, buscamos desmistificar a matemática, tornando-a acessível e cativante. Nossas aulas focam na resolução de problemas, no domínio de conceitos essenciais e no desenvolvimento de estratégias que fortalecem o raciocínio lógico, ajudando os estudantes a melhorar seu desempenho escolar e a ganhar confiança em suas habilidades. Em um ambiente acolhedor e motivador, incentivamos cada aluno a explorar o potencial da matemática. Acreditamos que, com o apoio certo, todos podem superar dificuldades, alcançar o sucesso e descobrir o prazer de aprender matemática!`,
    schedule:
      'Terças e Quartas, Grupo 1: 17:30h às 19h, e Grupo 2: 19h às 20:30',
    studentsInfo: '20+ alunos estudando',
  },
  {
    id: 'reforco-escolar',
    title: 'Reforço Escolar',
    icon: 'Book',
    images: [escolar, escolar2, escolar3, escolar4, escolar5, escolar6],
    description:
      'Oferecemos aulas de reforço escolar para crianças e adolescentes, auxiliando no aprendizado de disciplinas fundamentais. Com um ambiente acolhedor e professores dedicados, buscamos fortalecer o desempenho acadêmico e estimular a confiança dos alunos, proporcionando melhores oportunidades para o futuro!',
    infoText: `Nossa ONG é dedicada a apoiar crianças e adolescentes por meio de programas de reforço escolar, oferecendo oportunidades para que cada estudante alcance seu pleno potencial acadêmico. Com metodologias práticas e dinâmicas, promovemos o aprendizado de diversas disciplinas, ajudando os jovens a superarem dificuldades, aprimorarem suas habilidades e ganharem confiança em seu desempenho escolar. Em um ambiente acolhedor e motivador, nossas aulas abordam conceitos fundamentais, resolução de problemas e estratégias que estimulam o raciocínio e o interesse pelo conhecimento. Acreditamos que, com o suporte certo, a educação é a chave para transformar vidas, empoderar comunidades e abrir caminhos para um futuro mais promissor!`,
    schedule:
      'Terças e Quartas, Grupo 1: 17:30h às 19h, e Grupo 2: 19h às 20:30',
    studentsInfo: '30+ alunos estudando',
  },
  {
    id: 'alfabetizacao',
    title: 'Alfabetização',
    icon: 'Book',
    images: [alfabetizacao, alfabetizacao2, alfabetizacao3, alfabetizacao4, alfabetizacao5],
    description:
      'Nossa ONG tem como missão promover a alfabetização de crianças e adultos em situações de vulnerabilidade social. Acreditamos que a leitura e a escrita são direitos fundamentais para o exercício da cidadania e o desenvolvimento pessoal. Por meio de programas de ensino personalizados, oferecemos apoio a estudantes que estão em processo de alfabetização, utilizando metodologias dinâmicas e interativas que facilitam o aprendizado.',
    infoText: `Nossa ONG tem como missão promover a alfabetização de crianças e adultos em situações de vulnerabilidade social. Acreditamos que a leitura e a escrita são direitos fundamentais para o exercício da cidadania e o desenvolvimento pessoal. Por meio de programas de ensino personalizados, oferecemos apoio a estudantes que estão em processo de alfabetização, utilizando metodologias dinâmicas e interativas que facilitam o aprendizado.`,
    schedule:
      'Terças e Quartas, Grupo 1: 17:30h às 19h, e Grupo 2: 19h às 20:30',
    studentsInfo: '10+ alunos estudando',
  },
  {
    id: 'capoeira',
    title: 'Capoeira',
    icon: 'Book',
    images: [capoeira, capoeira2, capoeira3, capoeira4],
    description:
      'Nossa ONG promove a capoeira como instrumento de transformação social, resgate cultural e fortalecimento comunitário. Oferecemos aulas e rodas de capoeira que integram movimento, música e história, proporcionando às crianças, jovens e adultos uma experiência única de aprendizado e conexão com suas raízes. Mais do que uma expressão cultural, a capoeira ensina valores como disciplina, respeito, resistência e cooperação. Acreditamos que, por meio dessa arte, é possível empoderar indivíduos e construir um futuro mais inclusivo e cheio de possibilidades!',
    infoText: `Nossa ONG tem como missão promover a capoeira como um poderoso instrumento de transformação social, resgate cultural e fortalecimento comunitário. Por meio de aulas e rodas de capoeira, integramos movimento, música e história, oferecendo a crianças, jovens e adultos uma experiência envolvente de aprendizado e conexão profunda com suas raízes culturais. Mais do que uma expressão artística, a capoeira transmite valores essenciais como disciplina, respeito, resiliência e cooperação, incentivando o desenvolvimento pessoal e coletivo. Com um ambiente acolhedor e dinâmico, nossa iniciativa busca empoderar indivíduos, celebrar a diversidade cultural e construir comunidades mais unidas, inclusivas e cheias de possibilidades para um futuro transformador.`,
    schedule:
      'Terças e Quartas, Grupo 1: 17:30h às 19h, e Grupo 2: 19h às 20:30',
    studentsInfo: '40+ alunos estudando',
  },
  {
    id: 'futebol',
    title: 'Futebol',
    icon: 'Book', // Considere criar um ícone específico para futebol, se disponível
    images: [futebol, futebol2, futebol3, futebol4],
    description:
      'Nossa ONG utiliza o futebol como ferramenta de inclusão social, desenvolvimento pessoal e formação cidadã. Por meio de treinos e atividades educativas, promovemos a disciplina, o trabalho em equipe e o respeito entre crianças e jovens de comunidades. Além de ensinar técnicas e fundamentos do esporte, também incentivamos valores como comprometimento, liderança e solidariedade. Acreditamos que o futebol vai além do campo, sendo um caminho para construir oportunidades e transformar vidas!',
    infoText: `Nossa ONG utiliza o futebol como uma poderosa ferramenta de inclusão social, desenvolvimento pessoal e formação cidadã. Por meio de treinos estruturados e atividades educativas, promovemos valores como disciplina, trabalho em equipe, respeito e solidariedade entre crianças e jovens de comunidades. Além de ensinar técnicas e fundamentos do esporte, nossas iniciativas incentivam o comprometimento, a liderança e a cooperação, fortalecendo o caráter e a autoestima dos participantes. Em um ambiente acolhedor e motivador, acreditamos que o futebol transcende o campo, criando oportunidades, transformando vidas e construindo um futuro mais justo e promissor para todos.`,
    schedule:
      'Terças e Quartas, Grupo 1: 17:30h às 19h, e Grupo 2: 19h às 20:30',
    studentsInfo: '30+ alunos estudando',
  },
];

export default workshops;