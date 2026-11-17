// Albert OBMEPeiro — conteúdo de aprendizado: estratégias, glossário, questões irmãs e flashcards
(function(){
const R=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
const pickA=a=>a[Math.floor(Math.random()*a.length)];
const shuf=a=>{for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const SV=(w,h,b)=>`<svg viewBox="0 0 ${w} ${h}" width="100%" style="max-width:260px;display:block;margin:8px auto" xmlns="http://www.w3.org/2000/svg" font-family="Nunito,sans-serif" font-weight="800">${b}</svg>`;

/* ================= ESTRATÉGIAS ================= */
const STRAT={
T:{e:'🎯',n:'Testar as alternativas',c:'#FF8A00',
 i:'Na OBMEP a resposta certa está entre as 5 alternativas. Quando montar a conta é difícil, coloque cada alternativa no lugar da resposta e veja qual obedece a todas as condições.',
 p:['Leia todas as condições do enunciado e anote.','Pegue uma alternativa e verifique as condições uma por uma.','Se alguma falhar, risque a alternativa e passe para a próxima.','Comece pela alternativa do meio: se ela der grande demais, a resposta é menor.'],
 x:'Exemplo (2013, questão 5): a professora errou a idade em 2, 3 e 5 anos. Testando 27: os palpites 22, 25 e 30 erram por 5, 2 e 3. É a resposta!'},
P:{e:'🔁',n:'Procurar o padrão',c:'#00B8C4',
 i:'Sequências, calendários, giros e figuras que crescem sempre se repetem de algum jeito. Escreva os primeiros casos, descubra a regra e use o resto da divisão para pular direto para o caso pedido.',
 p:['Escreva os 4 ou 5 primeiros casos numa tabela.','Descubra o que muda de um caso para o outro (soma 3? repete a cada 7?).','Para ciclos, divida a posição pelo tamanho do ciclo e olhe o resto.','Confira a regra num caso que você já conhece.'],
 x:'Exemplo (2019, questão 10): a semana do Planeta Pemob tem 5 dias. O ano tem 162 dias e 162 = 5 × 32 + 2, então o último dia é igual ao 2º dia: Iba.'},
R:{e:'⏪',n:'Trabalhar de trás para frente',c:'#8F3BFF',
 i:'Quando o problema conta várias etapas e dá o resultado final, desfaça as etapas do fim para o começo, usando a operação contrária (somar ↔ subtrair, multiplicar ↔ dividir).',
 p:['Comece pelo número final que o enunciado dá.','Desfaça a última etapa com a operação contrária.','Continue até chegar ao começo.','Confira refazendo o caminho na ordem normal.'],
 x:'Exemplo (2022, questão 20): para chegar a 78 depois de apagar a unidade, antes havia 780, 783, 786 ou 789. Voltando etapa por etapa, chega-se aos 13 números iniciais.'},
D:{e:'✂️',n:'Desenhar e dividir a figura',c:'#1E9BFF',
 i:'Figuras complicadas ficam fáceis quando divididas em pedaços conhecidos: quadradinhos, retângulos e triângulos que são metade de um quadradinho. Às vezes é melhor calcular a parte de fora e subtrair.',
 p:['Copie a figura no rascunho.','Divida em quadradinhos, retângulos ou triângulos iguais.','Conte as partes inteiras e junte as metades de duas em duas.','Se for difícil, calcule o retângulo inteiro e tire o que sobra.'],
 x:'Exemplo (2018, questão 5): o octógono rosa ocupa 5 quadradinhos inteiros e 4 meios: 7 dos 9 quadradinhos. Se 7 partes valem 28 cm², cada uma vale 4 e o quadrado tem 36 cm².'},
O:{e:'📋',n:'Organizar e listar os casos',c:'#E8007D',
 i:'Em problemas de "quantas maneiras", faça uma lista organizada ou uma tabela. Assim você não esquece nem repete casos. Quando as escolhas são independentes, multiplique.',
 p:['Decida uma ordem para listar (do menor para o maior, por exemplo).','Fixe a primeira escolha e liste todas as possibilidades para as outras.','Se as escolhas não dependem uma da outra, multiplique as quantidades.','Comece pela parte com mais restrições.'],
 x:'Exemplo (2015, questão 5): dezena 1, 2 ou 5 (3 opções) e unidade 0, 1, 2 ou 5 (4 opções): 3 × 4 = 12 números.'},
E:{e:'🕵️',n:'Supor e eliminar',c:'#6A2BF0',
 i:'Em problemas de lógica (quem mente, quem ganhou, quem é quem), suponha um caso e siga as pistas. Se aparecer uma contradição, aquele caso está eliminado.',
 p:['Faça uma tabela com as pessoas e as possibilidades.','Suponha que uma possibilidade é verdade.','Siga as pistas: se alguma ficar impossível, risque a suposição.','O caso que sobrar sem contradição é a resposta.'],
 x:'Exemplo (2010, questão 20): supondo Adriano tamanduá, as pistas mostram que ele seria preguiça. Contradição! Então Adriano é preguiça, e o resto se encaixa: 3 tamanduás.'},
U:{e:'🧩',n:'Achar o valor de uma parte',c:'#FF2E88',
 i:'Com frações, porcentagens e proporções, descubra quanto vale UMA parte e depois multiplique. Desenhar uma barra dividida em partes iguais ajuda muito.',
 p:['Desenhe uma barra e divida no número de partes do denominador.','Descubra o valor de uma única parte (divida).','Multiplique pelo número de partes pedido.','Para porcentagem, ache 1% ou 10% primeiro.'],
 x:'Exemplo (2018, questão 8): {3/8} do bolo custou R$ 4,50, então {1/8} custa R$ 1,50. João levou {5/8}: 5 × 1,50 = R$ 7,50.'},
C:{e:'⚖️',n:'Comparar e cancelar',c:'#16C47F',
 i:'Quando duas situações têm partes iguais, essas partes se cancelam. Comparar as duas situações (fazer a diferença) mostra só o que interessa. Também vale contar a mesma coisa de dois jeitos.',
 p:['Escreva as duas situações uma embaixo da outra.','Risque o que aparece igual nas duas.','O que sobrou mostra a diferença que o problema pede.','Em somas de regiões, veja o que foi contado duas vezes.'],
 x:'Exemplo (2011, questão 2): 3 pedaços = 1 pedaço + 0,8 kg. Tirando 1 pedaço de cada lado, 2 pedaços = 0,8 kg. Cada pedaço pesa 0,4 kg e o queijo, 1,6 kg.'},
X:{e:'🧗',n:'Pensar no pior caso e nos extremos',c:'#FF5A1F',
 i:'Para "maior", "menor", "no mínimo" ou "para ter certeza", pense no caso extremo: o maior possível, o menor possível ou o maior azar possível.',
 p:['Pergunte: qual é a pior situação que pode acontecer?','Para o maior número, coloque os algarismos maiores na frente.','Para "ter certeza", imagine o azar máximo e some 1.','Confira se o caso extremo realmente obedece às regras.'],
 x:'Exemplo (2017, questão 20): no pior azar, Joãozinho tira 10 verdes, 10 amarelas, 1 azul e 1 vermelha (22 bolas) e ainda não tem o grupo. Com 23, sempre tem.'},
Q:{e:'🔢',n:'Par, ímpar, divisores e restos',c:'#0BAA5C',
 i:'Muitas questões se resolvem olhando se os números são pares ou ímpares, múltiplos de algum número ou o resto da divisão. Às vezes basta olhar o último algarismo.',
 p:['Pergunte: o resultado precisa ser par? múltiplo de 3? de 9?','Use as regras de divisibilidade (2, 3, 5, 9, 10).','Para o último algarismo de uma conta, olhe só os últimos algarismos.','Mudar de cor um número par de vezes é o mesmo que não mudar.'],
 x:'Exemplo (2014, questão 11): cada face do cubo muda de cor 4 vezes (número par), então volta à cor original: as 6 faces terminam brancas.'},
M:{e:'✏️',n:'Traduzir para uma conta',c:'#D9A800',
 i:'Muitos problemas são uma conta escondida em uma história. Separe os dados, descubra a operação e organize o cálculo, com unidades iguais.',
 p:['Sublinhe os números e o que a pergunta quer.','Coloque tudo na mesma unidade (minutos, centavos, metros).','Escreva a conta e faça com calma.','Veja se o resultado faz sentido na história.'],
 x:'Exemplo (2018, questão 6): Sílvia faz 60 biscoitos em 60 ÷ 5 = 12 minutos. Nesse tempo Renato faz 3 × 12 = 36. Faltam 60 − 36 = 24.'}
};

function guessStrat(q){
  const s=(q.tx?q.tx.s.map(x=>x[1]).join(' '):'').toLowerCase();
  const sc={T:0,P:0,R:0,D:0,O:0,E:0,U:0,C:0,X:0,Q:0,M:0};
  const k=(c,re,w=1)=>{const m=s.match(re);if(m)sc[c]+=m.length*w};
  k('T',/test|teste|testando|confira[: ]/g,2);
  k('P',/padr[ãa]o|repete|ciclo|a cada \d|resto|sequ[êe]ncia|figura \d|aumenta \d/g,2);
  k('R',/de tr[áa]s para frente|antes do|desfa[çz]|volta(ndo)? etapa/g,3);
  k('D',/divid|quadricul|quadradinho|tri[âa]ngulo|metade de um|complete a figura|ret[âa]ngulo|desdobr|gir/g,1);
  k('O',/maneiras|op[çc][õo]es|caminhos|liste|lista|possibilidad|× \d+ = \*\*|total: \d+ ×|princ[íi]pio/g,1.5);
  k('E',/supon|contradi|mente|mentiu|verdade|se fosse|n[ãa]o pode ser|elimin/g,2);
  k('U',/\{\d+\/\d+\}|%|cada parte|uma parte|metade|por cento/g,1);
  k('C',/cancel|contad[oa]s? duas vezes|mesma|risque|tirando .* de cada lado|diferen[çc]a|somando os dois/g,1.5);
  k('X',/pior|azar|m[áa]ximo|m[íi]nimo|maior poss|menor poss|o maior|o menor/g,1.5);
  k('Q',/par|[íi]mpar|m[úu]ltiplo|divis|algarismo das unidades|termina em|primo/g,1);
  const best=Object.entries(sc).sort((a,b)=>b[1]-a[1])[0];
  if(best[1]>=2)return best[0];
  return {A:'M',F:'U',G:'D',E:'D',C:'O',L:'E',S:'P',N:'Q',M:'M',T:'M'}[q.c]||'M';
}

/* ================= GLOSSÁRIO ================= */
const G=[
['perímetro','A medida do contorno de uma figura: a soma de todos os lados.','Um retângulo de 5 cm por 3 cm tem perímetro 5 + 3 + 5 + 3 = 16 cm.',SV(200,120,'<rect x="30" y="20" width="140" height="80" fill="#ECE2FF" stroke="#FF2E88" stroke-width="6"/><text x="100" y="15" text-anchor="middle" font-size="14" fill="#1B1035">5 cm</text><text x="185" y="65" font-size="14" fill="#1B1035">3</text><text x="100" y="66" text-anchor="middle" font-size="13" fill="#6A2BF0">contorno</text>')],
['área','O tamanho da região dentro da figura: quantos quadradinhos cabem nela.','Um retângulo de 5 cm por 3 cm tem área 5 × 3 = 15 cm².',SV(200,120,'<g fill="#FFD23F" stroke="#1B1035" stroke-width="2">'+[0,1,2].map(r=>[0,1,2,3,4].map(c=>`<rect x="${40+c*24}" y="${24+r*24}" width="24" height="24"/>`).join('')).join('')+'</g><text x="100" y="114" text-anchor="middle" font-size="14" fill="#1B1035">15 quadradinhos</text>')],
['múltiplo','Um número é múltiplo de outro quando está na tabuada dele.','Múltiplos de 4: 0, 4, 8, 12, 16, 20…',SV(240,60,[0,4,8,12,16,20].map((n,i)=>`<circle cx="${20+i*40}" cy="30" r="17" fill="#16C47F"/><text x="${20+i*40}" y="36" text-anchor="middle" font-size="15" fill="#fff">${n}</text>`).join(''))],
['divisor','Um número que divide outro sem deixar resto.','Os divisores de 12 são 1, 2, 3, 4, 6 e 12.',SV(240,70,'<text x="120" y="25" text-anchor="middle" font-size="18" fill="#1B1035">12 = 3 × 4 = 2 × 6 = 1 × 12</text><text x="120" y="55" text-anchor="middle" font-size="14" fill="#0C9A62">divisores: 1, 2, 3, 4, 6, 12</text>')],
['consecutivo','Números que vêm um logo depois do outro, sem pular.','7, 8 e 9 são consecutivos. 7, 9 e 11 são ímpares consecutivos.',SV(240,60,'<line x1="10" y1="30" x2="230" y2="30" stroke="#1B1035" stroke-width="3"/>'+[6,7,8,9,10].map((n,i)=>`<circle cx="${30+i*45}" cy="30" r="14" fill="${n>=7&&n<=9?'#FF8A00':'#fff'}" stroke="#1B1035" stroke-width="2"/><text x="${30+i*45}" y="35" text-anchor="middle" font-size="13" fill="#1B1035">${n}</text>`).join(''))],
['par','Número que se divide por 2 sem sobrar nada. Termina em 0, 2, 4, 6 ou 8.','14 é par: dá para formar 7 duplas.',SV(220,60,[0,1,2,3].map(i=>`<circle cx="${30+i*50}" cy="18" r="10" fill="#1E9BFF"/><circle cx="${30+i*50}" cy="44" r="10" fill="#1E9BFF"/>`).join(''))],
['ímpar','Número que, dividido por 2, sobra 1. Termina em 1, 3, 5, 7 ou 9.','9 é ímpar: formando duplas, sempre sobra um.',SV(220,60,[0,1,2,3].map(i=>`<circle cx="${30+i*45}" cy="18" r="10" fill="#FF2E88"/><circle cx="${30+i*45}" cy="44" r="10" fill="#FF2E88"/>`).join('')+'<circle cx="200" cy="18" r="10" fill="#FF8A00"/>')],
['algarismo','Os símbolos usados para escrever números: 0, 1, 2, 3, 4, 5, 6, 7, 8 e 9.','O número 2025 tem 4 algarismos: 2, 0, 2 e 5.',SV(220,60,['2','0','2','5'].map((d,i)=>`<rect x="${20+i*48}" y="8" width="40" height="44" rx="8" fill="#ECE2FF" stroke="#6A2BF0" stroke-width="3"/><text x="${40+i*48}" y="40" text-anchor="middle" font-size="24" fill="#1B1035">${d}</text>`).join(''))],
['fração','Uma parte de um inteiro dividido em partes iguais. O número de baixo diz em quantas partes dividimos; o de cima, quantas pegamos.','{3/4}: dividimos em 4 partes iguais e pegamos 3.',SV(200,110,'<circle cx="100" cy="55" r="48" fill="#fff" stroke="#1B1035" stroke-width="3"/><path d="M100 55 L100 7 A48 48 0 1 1 52 55 Z" fill="#FF8A00" stroke="#1B1035" stroke-width="3"/><line x1="52" y1="55" x2="148" y2="55" stroke="#1B1035" stroke-width="3"/><line x1="100" y1="7" x2="100" y2="103" stroke="#1B1035" stroke-width="3"/>')],
['numerador','O número de cima da fração: quantas partes pegamos.','Em {3/4}, o numerador é 3.',''],
['denominador','O número de baixo da fração: em quantas partes iguais o inteiro foi dividido.','Em {3/4}, o denominador é 4.',''],
['porcentagem','Uma fração com denominador 100. 25% quer dizer 25 de cada 100.','25% de 80 = {25/100} × 80 = 20.',SV(220,50,'<rect x="10" y="10" width="200" height="30" rx="6" fill="#fff" stroke="#1B1035" stroke-width="3"/><rect x="10" y="10" width="50" height="30" rx="6" fill="#16C47F"/><text x="35" y="31" text-anchor="middle" font-size="13" fill="#fff">25%</text>')],
['média','Soma todos os valores e divide pela quantidade de valores.','A média de 6, 8 e 10 é (6 + 8 + 10) ÷ 3 = 8.',''],
['dobro','O número multiplicado por 2.','O dobro de 7 é 14.',''],
['triplo','O número multiplicado por 3.','O triplo de 7 é 21.',''],
['metade','O número dividido por 2.','A metade de 18 é 9.',''],
['quadrado','Figura de 4 lados iguais e 4 ângulos retos. Também é o número multiplicado por ele mesmo.','Quadrado de 5: 5 × 5 = 25.',SV(120,110,'<rect x="20" y="10" width="80" height="80" fill="#1E9BFF" stroke="#1B1035" stroke-width="3"/><text x="60" y="106" text-anchor="middle" font-size="13" fill="#1B1035">lados iguais</text>')],
['retângulo','Figura de 4 lados com 4 ângulos retos; os lados opostos são iguais.','Área = base × altura.',SV(200,90,'<rect x="20" y="15" width="160" height="60" fill="#FFD23F" stroke="#1B1035" stroke-width="3"/>')],
['triângulo','Figura com 3 lados e 3 vértices. A área é (base × altura) ÷ 2.','Um triângulo de base 6 e altura 4 tem área 12.',SV(200,110,'<path d="M20 95 L180 95 L70 15 Z" fill="#FF2E88" stroke="#1B1035" stroke-width="3"/><line x1="70" y1="15" x2="70" y2="95" stroke="#fff" stroke-width="2" stroke-dasharray="5 4"/>')],
['vértice','O "canto" de uma figura, onde dois lados se encontram. No cubo, é onde se encontram 3 arestas.','O quadrado tem 4 vértices; o cubo tem 8.',SV(120,110,'<rect x="20" y="15" width="80" height="80" fill="none" stroke="#1B1035" stroke-width="3"/>'+[[20,15],[100,15],[20,95],[100,95]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="7" fill="#FF2E88"/>`).join(''))],
['aresta','A linha onde duas faces de um sólido se encontram.','O cubo tem 12 arestas.',SV(140,120,'<path d="M30 45 L80 20 L120 40 L70 65 Z" fill="#ECE2FF" stroke="#1B1035" stroke-width="2"/><path d="M30 45 L30 100 L70 120 L70 65 Z" fill="#C9B6FF" stroke="#1B1035" stroke-width="2"/><path d="M70 65 L120 40 L120 95 L70 120 Z" fill="#A98BFF" stroke="#1B1035" stroke-width="2"/><line x1="70" y1="65" x2="70" y2="120" stroke="#FF2E88" stroke-width="5"/>')],
['face','Cada um dos lados planos de um sólido. O cubo e o dado têm 6 faces.','Num dado, faces opostas somam 7.',''],
['cubo','Sólido com 6 faces quadradas iguais, 12 arestas e 8 vértices.','O dado é um cubo.',SV(140,120,'<path d="M30 45 L80 20 L120 40 L70 65 Z" fill="#FFE58A" stroke="#1B1035" stroke-width="2"/><path d="M30 45 L30 100 L70 120 L70 65 Z" fill="#FFD23F" stroke="#1B1035" stroke-width="2"/><path d="M70 65 L120 40 L120 95 L70 120 Z" fill="#FF9F1C" stroke="#1B1035" stroke-width="2"/>')],
['planificação','O "molde" de um sólido aberto e esticado no plano. Dobrando, ele vira o sólido.','A planificação do cubo tem 6 quadrados.',SV(200,150,'<g fill="#ECE2FF" stroke="#1B1035" stroke-width="2">'+[[70,5],[20,55],[70,55],[120,55],[170,55],[70,105]].map(([x,y])=>`<rect x="${x-10}" y="${y}" width="40" height="40"/>`).join('')+'</g>')],
['diagonal','Segmento que liga dois vértices que não são vizinhos.','O quadrado tem 2 diagonais.',SV(120,110,'<rect x="20" y="15" width="80" height="80" fill="none" stroke="#1B1035" stroke-width="3"/><line x1="20" y1="15" x2="100" y2="95" stroke="#FF8A00" stroke-width="4"/><line x1="100" y1="15" x2="20" y2="95" stroke="#FF8A00" stroke-width="4"/>')],
['ponto médio','O ponto que divide um segmento em duas partes iguais.','O ponto médio do segmento de 0 a 10 é o 5.',SV(220,50,'<line x1="20" y1="25" x2="200" y2="25" stroke="#1B1035" stroke-width="3"/><circle cx="20" cy="25" r="6" fill="#1B1035"/><circle cx="200" cy="25" r="6" fill="#1B1035"/><circle cx="110" cy="25" r="8" fill="#FF2E88"/>')],
['simetria','Uma figura é simétrica quando, dobrada numa linha, as duas metades se encaixam perfeitamente.','Ao desdobrar um papel cortado, os furos aparecem espelhados.',SV(200,110,'<path d="M100 10 C60 10 30 50 60 100 L100 100 Z" fill="#16C47F"/><path d="M100 10 C140 10 170 50 140 100 L100 100 Z" fill="#16C47F" opacity=".6"/><line x1="100" y1="5" x2="100" y2="105" stroke="#1B1035" stroke-width="2" stroke-dasharray="6 4"/>')],
['ângulo','A "abertura" entre duas linhas que se encontram, medida em graus. Uma volta completa tem 360°.','O ângulo reto mede 90°.',SV(160,110,'<line x1="30" y1="90" x2="140" y2="90" stroke="#1B1035" stroke-width="3"/><line x1="30" y1="90" x2="30" y2="10" stroke="#1B1035" stroke-width="3"/><rect x="30" y="72" width="18" height="18" fill="none" stroke="#FF2E88" stroke-width="3"/><text x="80" y="60" font-size="16" fill="#FF2E88">90°</text>')],
['paralelo','Linhas que nunca se encontram, mantendo sempre a mesma distância.','Os trilhos de um trem são paralelos.',SV(200,60,'<line x1="10" y1="18" x2="190" y2="18" stroke="#1E9BFF" stroke-width="4"/><line x1="10" y1="44" x2="190" y2="44" stroke="#1E9BFF" stroke-width="4"/>')],
['perpendicular','Linhas que se cruzam formando ângulos retos (90°).','As linhas de um caderno quadriculado são perpendiculares.',''],
['produto','O resultado de uma multiplicação.','O produto de 3 por 4 é 12.',''],
['soma','O resultado de uma adição.','A soma de 3 com 4 é 7.',''],
['diferença','O resultado de uma subtração.','A diferença entre 9 e 4 é 5.',''],
['quociente','O resultado de uma divisão.','Em 20 ÷ 4 = 5, o quociente é 5.',''],
['resto','O que sobra numa divisão que não é exata.','23 ÷ 5 = 4 e sobra 3: o resto é 3.',SV(240,60,[0,1,2,3].map(i=>`<rect x="${10+i*48}" y="10" width="42" height="20" rx="5" fill="#ECE2FF" stroke="#6A2BF0" stroke-width="2"/><text x="${31+i*48}" y="25" text-anchor="middle" font-size="12" fill="#1B1035">5</text>`).join('')+'<circle cx="210" cy="20" r="8" fill="#FF8A00"/><circle cx="228" cy="20" r="8" fill="#FF8A00"/><circle cx="219" cy="40" r="8" fill="#FF8A00"/>')],
['número primo','Número maior que 1 que só pode ser dividido por 1 e por ele mesmo.','2, 3, 5, 7, 11 e 13 são primos.',''],
['dezena','Grupo de 10 unidades. Também é a posição do segundo algarismo da direita.','Em 47, o 4 está na casa das dezenas.',''],
['unidade','A posição do último algarismo de um número.','Em 47, o 7 está na casa das unidades.',''],
['crescente','Do menor para o maior.','3, 7, 12 estão em ordem crescente.',''],
['decrescente','Do maior para o menor.','12, 7, 3 estão em ordem decrescente.',''],
['horário','O sentido em que giram os ponteiros do relógio.','Para a direita, por cima.',''],
];
const GLOS={};G.forEach(([t,d,ex,svg])=>GLOS[t]={t,d,ex,svg});

/* ================= QUESTÕES IRMÃS (geradas) ================= */
function alts(ans,dist,fmt=String){
  const set=new Set([ans]);dist.forEach(d=>{if(d!==ans&&set.size<5&&d>=0)set.add(d)});
  let k=1;while(set.size<5){const v=ans+(k%2?1:-1)*Math.ceil(k/2);if(v>=0&&!set.has(v))set.add(v);k++}
  const arr=[...set].sort((a,b)=>a-b);const L='ABCDE'[arr.indexOf(ans)];return {a:arr.map(fmt),L}
}
const fr=(a,b)=>`{${a}/${b}}`;
const money=v=>'R$ '+v.toFixed(2).replace('.',',');
const GEN={
A:()=>{const a=R(3,20),b=R(2,9),c=R(2,9),e=pickA([2,3,4,5]),d=e*R(2,6);const ans=a+b*c-d/e;
 const o=alts(ans,[(a+b)*c-d/e,a+b*c-d,(a+b*c-d)/e,ans+e]);
 return {t:[`Qual é o resultado de ${a} + ${b} × ${c} − ${d} ÷ ${e}?`],...o,s:[`Primeiro as multiplicações e divisões: ${b} × ${c} = ${b*c} e ${d} ÷ ${e} = ${d/e}.`,`Depois, da esquerda para a direita: ${a} + ${b*c} − ${d/e} = **${ans}**.`]}},
F:()=>{const q=pickA([3,4,5,6,8]),p=R(1,q-1),k=R(2,9),n=q*k;const ans=p*k;
 const it=pickA(['figurinhas','balas','bolinhas','canetas','fichas']),who=pickA(['Ana','Bruno','Carla','Davi','Luíza']);
 const o=alts(ans,[k,n-ans,n/p|0,ans+k]);
 return {t:[`${who} tinha ${n} ${it} e deu ${fr(p,q)} delas para um amigo. Quantas ${it} ${who} deu?`],...o,s:[`Divida ${n} em ${q} partes iguais: cada parte tem ${n} ÷ ${q} = ${k}.`,`${who} deu ${p} partes: ${p} × ${k} = **${ans}**.`]}},
G:()=>{const b=R(3,12),h=R(2,9);const area=Math.random()<.5;const ans=area?b*h:2*(b+h);
 const o=alts(ans,area?[2*(b+h),b+h,b*h*2,b*h+b]:[b*h,b+h,b*h-2,2*b+h]);
 return {t:[`Um retângulo tem ${b} cm de base e ${h} cm de altura. Qual é ${area?'a sua área':'o seu perímetro'}?`],a:o.a.map(v=>v+(area?' cm²':' cm')),L:o.L,
  s:area?[`A área do retângulo é base × altura.`,`${b} × ${h} = **${ans} cm²**.`]:[`O perímetro é a soma dos 4 lados: dois de ${b} cm e dois de ${h} cm.`,`${b} + ${h} + ${b} + ${h} = **${ans} cm**.`],fig:SV(220,120,`<rect x="40" y="20" width="${Math.min(160,b*14)}" height="${Math.min(80,h*10)}" fill="#ECE2FF" stroke="#6A2BF0" stroke-width="4"/><text x="${40+Math.min(160,b*14)/2}" y="14" text-anchor="middle" font-size="14" fill="#1B1035">${b} cm</text><text x="30" y="${20+Math.min(80,h*10)/2+5}" text-anchor="end" font-size="14" fill="#1B1035">${h}</text>`)}},
E:()=>{const n=R(2,6),top=[];for(let i=0;i<n;i++)top.push(R(1,6));const S=top.reduce((a,b)=>a+b,0);const ans=7*n-S;
 const o=alts(ans,[S,6*n-S,7*n,ans+n]);
 return {t:[`Em um dado, a soma dos pontos de duas faces opostas é sempre 7. Foram lançados ${n} dados e a soma das faces de cima deu ${S}. Qual é a soma das faces de baixo?`],...o,s:[`Em cada dado, cima + baixo = 7. Em ${n} dados: ${n} × 7 = ${7*n}.`,`Faces de baixo: ${7*n} − ${S} = **${ans}**.`]}},
C:()=>{const a=R(2,6),b=R(2,6),c=Math.random()<.5?R(2,4):1;const ans=a*b*c;
 const o=alts(ans,[a+b+c,a*b,a*b+c,(a+b)*c]);
 return {t:[`Uma lanchonete oferece ${a} tipos de pão, ${b} tipos de recheio${c>1?` e ${c} tipos de suco`:''}. De quantas maneiras diferentes dá para montar um lanche com um pão, um recheio${c>1?' e um suco':''}?`],...o,s:[`Para cada pão há ${b} recheios: ${a} × ${b} = ${a*b} sanduíches.`,c>1?`Cada sanduíche combina com ${c} sucos: ${a*b} × ${c} = **${ans}**.`:`Total: **${ans}**.`]}},
L:()=>{const N=R(12,30),fA=R(2,N-8),bB=R(2,N-fA-3);const posA=fA+1,posB=N-bB;const lo=Math.min(posA,posB),hi=Math.max(posA,posB);const ans=Math.max(0,hi-lo-1);
 const o=alts(ans,[ans+2,ans+1,hi-lo,N-fA-bB]);
 return {t:[`Uma fila tem ${N} pessoas, incluindo Léo e Bia. Há ${fA} pessoas na frente de Léo e ${bB} pessoas atrás de Bia. Quantas pessoas há entre Léo e Bia?`],...o,s:[`Léo está na posição ${posA} (${fA} pessoas na frente dele).`,`Bia está na posição ${N} − ${bB} = ${posB}.`,`Entre as posições ${lo} e ${hi} há ${hi} − ${lo} − 1 = **${ans}** pessoas.`]}},
S:()=>{const D=['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'];const s=R(0,6),n=R(20,300);const ans=(s+n)%7;
 const ch=shuf([0,1,2,3,4,5,6].filter(x=>x!==ans)).slice(0,4).concat(ans).sort((a,b)=>a-b);
 return {t:[`Hoje é ${D[s]}. Que dia da semana será daqui a ${n} dias?`],a:ch.map(x=>D[x]),L:'ABCDE'[ch.indexOf(ans)],s:[`A cada 7 dias o dia da semana se repete.`,`${n} = 7 × ${Math.floor(n/7)} + ${n%7}: é o mesmo que andar ${n%7} dia(s) a partir de ${D[s]}.`,`Resposta: **${D[ans]}**.`]}},
N:()=>{const k=pickA([7,11,13,17,19,23]);const big=Math.random()<.5;const ans=big?Math.floor(999/k)*k:Math.ceil(100/k)*k;
 const o=alts(ans,big?[999-k,ans-k,999,ans+1]:[100,ans+k,100+k,ans-1]);
 return {t:[`Qual é o ${big?'maior':'menor'} número de três algarismos que é múltiplo de ${k}?`],...o,s:big?[`Divida 999 por ${k}: 999 = ${k} × ${Math.floor(999/k)} + ${999%k}.`,`Tirando o resto: 999 − ${999%k} = **${ans}**.`]:[`Divida 100 por ${k}: 100 = ${k} × ${Math.floor(100/k)} + ${100%k}.`,`O próximo múltiplo é ${k} × ${Math.ceil(100/k)} = **${ans}**.`]}},
M:()=>{if(Math.random()<.5){const h=R(7,16),m=R(0,11)*5,d=R(35,170);const t=h*60+m+d;const f=(x)=>`${Math.floor(x/60)}h${String(x%60).padStart(2,'0')}`;
  const ch=shuf([t+10,t-10,t+60,t-60,t+5]).slice(0,4).concat(t).sort((a,b)=>a-b);
  return {t:[`Um filme começou às ${f(h*60+m)} e durou ${d} minutos. A que horas ele terminou?`],a:ch.map(f),L:'ABCDE'[ch.indexOf(t)],s:[`${d} minutos = ${Math.floor(d/60)} hora(s) e ${d%60} minutos.`,`${f(h*60+m)} + ${Math.floor(d/60)}h${String(d%60).padStart(2,'0')} = **${f(t)}**.`]}}
 const p=R(3,40)+R(0,19)*0.05,pay=pickA([50,100]);const ans=Math.round((pay-p)*100)/100;
 const ch=[ans,ans+1,ans-1,ans+0.5,ans+10].map(v=>Math.round(v*100)/100).sort((a,b)=>a-b);
 return {t:[`Marta comprou um livro de ${money(p)} e pagou com uma nota de R$ ${pay},00. Quanto ela recebeu de troco?`],a:ch.map(money),L:'ABCDE'[ch.indexOf(ans)],s:[`Troco = valor pago − preço.`,`${money(pay)} − ${money(p)} = **${money(ans)}**.`]}},
T:()=>{const n=['Ana','Beto','Caio','Duda'],v=n.map(()=>R(3,25));const i=R(0,3),j=(i+R(1,3))%4;const ans=v[i]-v[j];const ab=Math.abs(ans);
 const o=alts(ab,[v[i]+v[j],v[i],v[j],ab+2]);
 return {t:[`A tabela mostra quantos votos cada candidato recebeu na eleição da turma:`,n.map((x,k)=>`${x}: ${v[k]} votos`).join('<br>'),`Qual é a diferença de votos entre ${n[i]} e ${n[j]}?`],...o,s:[`Leia na tabela: ${n[i]} teve ${v[i]} e ${n[j]} teve ${v[j]}.`,`Diferença: ${Math.max(v[i],v[j])} − ${Math.min(v[i],v[j])} = **${ab}**.`]}}
};
function sister(cat){const g=GEN[cat]||GEN.A;for(let k=0;k<20;k++){try{const r=g();if(r&&r.a&&r.a.length===5&&new Set(r.a).size===5)return r}catch(e){}}return GEN.A()}

/* ================= FLASHCARDS ================= */
const FL={
tab:{n:'Tabuada',e:'✖️',c:'#FF8A00',g:()=>{const a=R(2,10),b=R(2,10),ans=a*b;return {q:`${a} × ${b}`,ok:String(ans),opts:[ans,ans+a,ans-b,a*(b+1)+1]}}},
fra:{n:'Frações equivalentes',e:'🍕',c:'#FF2E88',g:()=>{const b=R(2,6),a=R(1,b-1),k=R(2,6),ans=a*k;return {q:`${fr(a,b)} = ${fr('?',b*k)}`,ok:String(ans),opts:[ans,a+k,b*k-ans,ans+1]}}},
dad:{n:'Faces do dado',e:'🎲',c:'#16C47F',g:()=>{const f=R(1,6),ans=7-f;return {q:`No dado, qual é a face oposta ao ${f}?`,ok:String(ans),opts:[ans,...[1,2,3,4,5,6].filter(x=>x!==ans&&x!==f)].slice(0,4)}}},
div:{n:'Divisibilidade',e:'➗',c:'#1E9BFF',g:()=>{const k=pickA([2,3,4,5,6,9,10]);const yes=Math.random()<.5;let n=k*R(12,120);if(!yes)n+=R(1,k-1);return {q:`${n} é divisível por ${k}?`,ok:yes?'Sim':'Não',opts:['Sim','Não'],two:true}}},
dob:{n:'Dobro e metade',e:'🔄',c:'#8F3BFF',g:()=>{const d=Math.random()<.5;const n=d?R(6,99):R(3,60)*2;const ans=d?2*n:n/2;return {q:`${d?'O dobro':'A metade'} de ${n}`,ok:String(ans),opts:[ans,d?n/2|0:n*2,ans+2,ans-1]}}},
pot:{n:'Quadrados perfeitos',e:'🟦',c:'#0BAA5C',g:()=>{const a=R(2,15),ans=a*a;return {q:`${a} × ${a}`,ok:String(ans),opts:[ans,a*2,ans+a,ans-1]}}},
ord:{n:'Ordem das operações',e:'🧮',c:'#E8007D',g:()=>{const a=R(2,9),b=R(2,9),c=R(2,9),ans=a+b*c;return {q:`${a} + ${b} × ${c}`,ok:String(ans),opts:[ans,(a+b)*c,a*b+c,ans+1]}}},
};
function flashCard(k){const r=FL[k].g();let o=[...new Set(r.opts.map(String))];let x=1;while(!r.two&&o.length<4){const v=String(+r.ok+x*(x%2?3:-2));if(+v>=0&&!o.includes(v))o.push(v);x++}return {q:r.q,ok:r.ok,opts:r.two?['Sim','Não']:shuf(o.slice(0,4))}}

window.APR={STRAT,guessStrat,GLOS,G,sister,FL,flashCard};
})();
