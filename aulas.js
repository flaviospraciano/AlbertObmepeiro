// Albert OBMEPeiro — AULAS COMPLETAS (todos os conteúdos da OBMEP Nível 1)
// Tipos de cartão: txt (explicação), ex (exemplo resolvido passo a passo), q (pergunta rápida), trap (armadilha), sum (resumo)
(function(){
const S=(w,h,b)=>`<svg viewBox="0 0 ${w} ${h}" width="100%" style="max-width:${Math.min(w*1.6,330)}px;display:block;margin:12px auto" xmlns="http://www.w3.org/2000/svg" font-family="Nunito,Arial,sans-serif" font-weight="800">${b}</svg>`;
const T=(x,y,t,s=14,c='currentColor',a='middle')=>`<text x="${x}" y="${y}" font-size="${s}" fill="${c}" text-anchor="${a}">${t}</text>`;
const R=(x,y,w,h,f,st='currentColor',sw=1.6)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${f}" stroke="${st}" stroke-width="${sw}"/>`;
const grid=(c,r,u,fill,ox=4,oy=4)=>{let s='';for(let j=0;j<r;j++)for(let i=0;i<c;i++)s+=R(ox+i*u,oy+j*u,u,u,fill?fill(i,j):'none','currentColor',1);return s};
const pie=(cx,cy,r,n,k,col)=>{let s=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="currentColor" stroke-width="2"/>`;for(let i=0;i<n;i++){const a0=2*Math.PI*i/n-Math.PI/2,a1=2*Math.PI*(i+1)/n-Math.PI/2;const p=`M${cx} ${cy} L${(cx+r*Math.cos(a0)).toFixed(1)} ${(cy+r*Math.sin(a0)).toFixed(1)} A${r} ${r} 0 0 1 ${(cx+r*Math.cos(a1)).toFixed(1)} ${(cy+r*Math.sin(a1)).toFixed(1)} Z`;s+=`<path d="${p}" fill="${i<k?col:'none'}" stroke="currentColor" stroke-width="1.5"/>`}return s};
const bar=(x,y,n,k,w,col,lab)=>{let s='';for(let i=0;i<n;i++)s+=R(x+i*w,y,w,28,i<k?col:'none');return s+(lab?T(x+n*w/2,y+48,lab,13):'')};
const cube=(x,y,s,f='#FFE7B8')=>{const d=s*.45;return `<polygon points="${x},${y} ${x+s},${y} ${x+s},${y+s} ${x},${y+s}" fill="${f}" stroke="currentColor" stroke-width="1.5"/><polygon points="${x},${y} ${x+d},${y-d} ${x+s+d},${y-d} ${x+s},${y}" fill="#FFF3D6" stroke="currentColor" stroke-width="1.5"/><polygon points="${x+s},${y} ${x+s+d},${y-d} ${x+s+d},${y+s-d} ${x+s},${y+s}" fill="#F2C987" stroke="currentColor" stroke-width="1.5"/>`};

const A=[];
const add=(id,e,n,c,cats,cards)=>A.push({id,e,n,c,cats,cards});

/* ============ 1. ORDEM DAS OPERAÇÕES ============ */
add('ordem','🧮','Ordem das operações','#FF8A00',['A'],[
{t:'txt',h:'Toda conta tem uma ordem certa',p:['Imagine uma receita de bolo: se você assar antes de misturar, dá errado. Contas também têm uma ordem que **todo mundo** combina de seguir, para que a mesma conta dê sempre o mesmo resultado.','A ordem é:<br>1️⃣ **Parênteses** ( ), depois colchetes [ ], depois chaves { }<br>2️⃣ **Potências** (como 3²)<br>3️⃣ **Multiplicação e divisão**, da esquerda para a direita<br>4️⃣ **Soma e subtração**, da esquerda para a direita']},
{t:'ex',h:'Exemplo 1',q:'Quanto vale 5 + 3 × 4 ?',st:['A multiplicação vem antes da soma. Então primeiro: 3 × 4 = **12**.','Agora a soma: 5 + 12 = **17**.','⚠️ Se você somasse primeiro (5 + 3 = 8 e 8 × 4 = 32) erraria!'],r:'17'},
{t:'q',q:'Quanto vale 20 − 12 ÷ 4 ?',o:['2','17','8','32','4'],a:1,w:'Divisão antes da subtração: 12 ÷ 4 = 3. Depois 20 − 3 = **17**.'},
{t:'ex',h:'Exemplo 2: com parênteses',q:'Quanto vale (6 + 4) × 3 − 2 × 5 ?',st:['Parênteses primeiro: 6 + 4 = **10**. A conta vira 10 × 3 − 2 × 5.','Multiplicações, da esquerda para a direita: 10 × 3 = 30 e 2 × 5 = 10.','Por último a subtração: 30 − 10 = **20**.'],r:'20'},
{t:'txt',h:'Mesma prioridade? Da esquerda para a direita!',p:['Multiplicação e divisão têm a **mesma força**. Quando aparecem juntas, faça na ordem em que aparecem, da esquerda para a direita. O mesmo vale para soma e subtração.','Exemplo: 24 ÷ 4 × 2 = 6 × 2 = **12** (e não 24 ÷ 8 = 3).','Exemplo: 10 − 3 + 2 = 7 + 2 = **9** (e não 10 − 5 = 5).']},
{t:'q',q:'Quanto vale 36 ÷ 6 × 3 ?',o:['2','18','12','108','6'],a:1,w:'Da esquerda para a direita: 36 ÷ 6 = 6 e 6 × 3 = **18**.'},
{t:'trap',h:'Armadilha clássica',p:['Na OBMEP, alternativas erradas são **exatamente** os resultados de quem faz a conta fora de ordem. Se você encontrou um número que está nas alternativas, isso não prova que acertou!','Sempre confira: fiz parênteses primeiro? Multipliquei e dividi antes de somar?']},
{t:'q',q:'Qual é o resultado de 2 + 2 × 2 + 2 ?',o:['16','10','8','12','6'],a:2,w:'2 × 2 = 4 primeiro. Depois 2 + 4 + 2 = **8**.'},
{t:'q',q:'Quanto vale 100 − (30 + 20) ÷ 5 ?',o:['10','14','90','98','70'],a:2,w:'Parênteses: 30 + 20 = 50. Divisão: 50 ÷ 5 = 10. Subtração: 100 − 10 = **90**.'},
{t:'sum',p:['Parênteses → potências → × e ÷ → + e −','× e ÷ juntos: da esquerda para a direita','+ e − juntos: da esquerda para a direita','As alternativas erradas costumam ser contas feitas fora de ordem']}]);

/* ============ 2. CÁLCULO ESPERTO ============ */
add('calc','⚡','Cálculo esperto','#FF5A1F',['A','N'],[
{t:'txt',h:'Calcular rápido não é mágica: é truque!',p:['A OBMEP adora contas que parecem gigantes, mas ficam fáceis se você **olhar antes de calcular**. Quem sai fazendo conta direto perde tempo e erra.','Os 4 truques mais usados:<br>🔹 **Juntar os redondos**: 37 + 48 + 63 = (37 + 63) + 48 = 100 + 48<br>🔹 **Arredondar e compensar**: 99 × 7 = 100 × 7 − 7<br>🔹 **Dividir a conta em partes**: 25 × 16 = 25 × 4 × 4 = 100 × 4<br>🔹 **Propriedade distributiva**: 13 × 7 + 13 × 3 = 13 × (7 + 3) = 130']},
{t:'ex',h:'Juntando os redondos',q:'Quanto vale 18 + 27 + 82 + 73 ?',st:['Procure pares que dão números redondos: 18 + 82 = **100**.','E 27 + 73 = **100**.','Total: 100 + 100 = **200**. Sem armar conta nenhuma!'],r:'200'},
{t:'ex',h:'Arredondar e compensar',q:'Quanto vale 999 + 999 + 999 ?',st:['999 é 1000 menos 1.','Então são 3 vezes (1000 − 1) = 3000 − 3.','Resultado: **2997**.'],r:'2997'},
{t:'q',q:'Quanto vale 25 × 36 ?',o:['800','900','925','875','960'],a:1,w:'36 = 4 × 9. Então 25 × 4 × 9 = 100 × 9 = **900**.'},
{t:'ex',h:'Distributiva (o truque do fator comum)',q:'Quanto vale 47 × 8 + 47 × 2 ?',st:['Os dois produtos têm o **47** em comum.','Coloque em evidência: 47 × (8 + 2) = 47 × 10.','Resultado: **470**.'],r:'470'},
{t:'q',q:'Quanto vale 2025 − 2024 + 2023 − 2022 + 2021 − 2020 ?',o:['0','1','3','6','2021'],a:2,w:'Agrupe de dois em dois: (2025 − 2024) + (2023 − 2022) + (2021 − 2020) = 1 + 1 + 1 = **3**.'},
{t:'txt',h:'Estimar antes de calcular',p:['Antes de qualquer conta, faça uma **estimativa**: arredonde os números e veja mais ou menos quanto deve dar.','Ex.: 198 × 51 é parecido com 200 × 50 = 10 000. Se nas alternativas houver 1 098, 10 098 e 100 098, você já sabe que a resposta é **10 098**!','A estimativa elimina alternativas absurdas e mostra quando você errou uma conta.']},
{t:'q',q:'Sem fazer a conta inteira, qual pode ser 49 × 51 ?',o:['249','2 499','24 999','2 599','2 399'],a:1,w:'49 × 51 ≈ 50 × 50 = 2 500. O único próximo é **2 499** (na verdade, 49 × 51 = 2 500 − 1).'},
{t:'trap',h:'Cuidado com o "último algarismo"',p:['Um truque ótimo: o algarismo das unidades de um produto só depende das unidades dos fatores. 37 × 43 termina em 1, porque 7 × 3 = 2**1**.','Isso permite eliminar alternativas sem calcular tudo!']},
{t:'q',q:'Em que algarismo termina 123 × 456 × 789 ?',o:['2','4','6','8','0'],a:0,w:'Só as unidades importam: 3 × 6 = 18 (termina em 8), 8 × 9 = 72 → termina em **2**.'},
{t:'sum',p:['Olhe a conta inteira antes de começar','Junte números que dão 10, 100, 1000','Arredonde e compense (99 = 100 − 1)','Use a distributiva quando houver fator comum','Estime para eliminar alternativas']}]);

/* ============ 3. SISTEMA DE NUMERAÇÃO ============ */
add('numeracao','🔢','Algarismos e valor posicional','#E8A100',['N'],[
{t:'txt',h:'Algarismo ≠ número',p:['Usamos só **10 algarismos**: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. Com eles escrevemos qualquer número.','O valor de um algarismo depende da **posição**. No número 3 **5** 7, o 5 vale 50 (5 dezenas). Em **5**37 o 5 vale 500.'],svg:S(260,70,R(10,10,60,40,'#FFE7B8')+R(70,10,60,40,'#FFD7E6')+R(130,10,60,40,'#D9F2FF')+R(190,10,60,40,'#DBFBEC')+T(40,37,'milhar',12,'#333')+T(100,37,'centena',12,'#333')+T(160,37,'dezena',12,'#333')+T(220,37,'unidade',12,'#333')+T(130,66,'2 0 2 5 = 2×1000 + 0×100 + 2×10 + 5',12))},
{t:'ex',h:'Quantos algarismos?',q:'Para escrever os números de 1 a 100, quantos algarismos usamos?',st:['De 1 a 9: são **9** números com 1 algarismo → 9 algarismos.','De 10 a 99: são 90 números com 2 algarismos → **180** algarismos.','O 100 tem **3** algarismos.','Total: 9 + 180 + 3 = **192**.'],r:'192'},
{t:'q',q:'Quantos números de dois algarismos existem?',o:['99','100','90','89','91'],a:2,w:'Vão de 10 até 99: 99 − 10 + 1 = **90** números. (Lembre do "+1"!)'},
{t:'txt',h:'Contar de A até B: o "+1"',p:['Quantos números existem de 15 até 40? A conta é **40 − 15 + 1 = 26**.','Por quê o +1? Porque a subtração conta os "pulos" entre os números, e precisamos contar os números. De 1 até 3 há 3 números, mas só 2 pulos.']},
{t:'ex',h:'Maior e menor número',q:'Usando os algarismos 3, 0, 8 e 5 uma vez cada, qual é a diferença entre o maior e o menor número de 4 algarismos?',st:['Maior: algarismos em ordem decrescente → **8530**.','Menor: em ordem crescente, mas o 0 não pode começar (senão o número teria 3 algarismos). Então **3058**.','Diferença: 8530 − 3058 = **5472**.'],r:'5472'},
{t:'q',q:'Qual é o menor número de 3 algarismos diferentes?',o:['100','012','102','123','111'],a:2,w:'Começa com 1 (não pode ser 0), depois o menor possível 0, depois 2 (diferente dos outros): **102**.'},
{t:'txt',h:'Somar algarismos',p:['A **soma dos algarismos** aparece muito! De 2025 é 2 + 0 + 2 + 5 = 9.','Para achar o menor número com soma dos algarismos 20: use o **maior algarismo possível no final** (9) e o menor número de algarismos: 2 9 9 → **299**.']},
{t:'q',q:'Qual é o menor número cuja soma dos algarismos é 25?',o:['799','997','889','1699','979'],a:0,w:'25 = 7 + 9 + 9. Com 3 algarismos e os 9 no final: **799**.'},
{t:'trap',h:'Armadilha: o zero na frente',p:['0 na frente não conta! "0123" é o número 123, que tem 3 algarismos. Quando o problema pede números de 4 algarismos, o primeiro **nunca** pode ser 0.']},
{t:'sum',p:['10 algarismos; o valor depende da posição','De A até B há B − A + 1 números','Maior número: algarismos do maior para o menor','Menor número: do menor para o maior, sem 0 na frente','Soma de algarismos mínima/máxima: jogue os 9 para o final']}]);

/* ============ 4. MÚLTIPLOS E DIVISORES ============ */
add('divis','➗','Múltiplos, divisores e paridade','#C46A00',['N','A'],[
{t:'txt',h:'Múltiplos e divisores',p:['**Múltiplos de 6**: 0, 6, 12, 18, 24, … (a tabuada do 6).','**Divisores de 12**: números que dividem 12 sem sobrar nada: 1, 2, 3, 4, 6, 12.','Dica: divisores vêm em **pares**: 1×12, 2×6, 3×4. Procure até a "metade do caminho" e você acha todos.']},
{t:'txt',h:'Regras de divisibilidade (decore!)',p:['**2**: termina em 0, 2, 4, 6, 8<br>**3**: soma dos algarismos é múltiplo de 3<br>**4**: os dois últimos algarismos formam múltiplo de 4<br>**5**: termina em 0 ou 5<br>**6**: divisível por 2 **e** por 3<br>**9**: soma dos algarismos é múltiplo de 9<br>**10**: termina em 0']},
{t:'q',q:'Qual destes números é divisível por 9?',o:['2 024','3 726','1 234','5 555','7 001'],a:1,w:'3 + 7 + 2 + 6 = 18, que é múltiplo de 9. Então **3 726** é divisível por 9.'},
{t:'txt',h:'Par e ímpar',p:['par + par = **par**<br>ímpar + ímpar = **par**<br>par + ímpar = **ímpar**<br>ímpar × ímpar = **ímpar**; qualquer coisa × par = **par**','Isso resolve muitas questões sem conta: a soma de 5 números ímpares é ímpar; a soma de 6 ímpares é par.']},
{t:'q',q:'Somando 1 + 3 + 5 + … + 99 (todos os ímpares até 99), o resultado é:',o:['par','ímpar','não dá para saber'],a:0,w:'São 50 números ímpares. Ímpares se juntam em pares que dão par: 50 ímpares somados dão **par** (na verdade, 2500).'},
{t:'txt',h:'MMC: quando as coisas se encontram de novo',p:['Um ônibus passa a cada 6 min e outro a cada 8 min. Saíram juntos agora; quando saem juntos de novo? No **menor múltiplo comum**:','Múltiplos de 6: 6, 12, 18, **24**, 30…<br>Múltiplos de 8: 8, 16, **24**, 32…','Resposta: daqui a **24 minutos**.']},
{t:'ex',h:'MDC: dividir em partes iguais e máximas',q:'Tenho 24 balas e 36 pirulitos. Quero montar o maior número de saquinhos iguais, sem sobrar nada. Quantos saquinhos?',st:['O número de saquinhos tem que dividir 24 e 36.','Divisores de 24: 1, 2, 3, 4, 6, 8, **12**, 24. Divisores de 36: 1, 2, 3, 4, 6, 9, **12**, 18, 36.','O maior comum é **12** saquinhos (cada um com 2 balas e 3 pirulitos).'],r:'12'},
{t:'q',q:'Duas luzes piscam a cada 4 s e a cada 10 s. Piscaram juntas agora. Em quantos segundos piscam juntas de novo?',o:['14','40','20','10','6'],a:2,w:'MMC(4, 10): múltiplos de 10 são 10, 20…; 20 é múltiplo de 4. Resposta **20 s**.'},
{t:'txt',h:'Números primos',p:['**Primo** tem exatamente 2 divisores: 1 e ele mesmo. Os primeiros: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37…','O **1 não é primo** (só tem 1 divisor). O **2** é o único primo par.']},
{t:'sum',p:['Divisores vêm em pares','Regras do 2, 3, 4, 5, 6, 9, 10','Par/ímpar decide muitas questões sem conta','MMC = quando se encontram de novo','MDC = dividir em partes iguais e maiores possíveis','1 não é primo; 2 é o único primo par']}]);

/* ============ 5. DIVISÃO COM RESTO E CICLOS ============ */
add('resto','🔄','Divisão com resto e ciclos','#00B8C4',['S','N'],[
{t:'txt',h:'O resto é o que sobra',p:['17 ÷ 5 = 3 e sobra **2**. Escrevemos: **17 = 5 × 3 + 2**.','O resto é sempre **menor** que o divisor. Dividindo por 7, o resto só pode ser 0, 1, 2, 3, 4, 5 ou 6.']},
{t:'txt',h:'Ciclos: o super-poder do resto',p:['Tudo que se repete (dias da semana, cores que se alternam, giros) tem um **ciclo**. Para saber o 100º elemento, não precisa contar até 100!','Divida a posição pelo tamanho do ciclo. O **resto** diz em que lugar do ciclo você está. Resto 0 = último elemento do ciclo.'],svg:S(280,60,['🔴','🟡','🔵','🔴','🟡','🔵','🔴','…'].map((e,i)=>T(18+i*35,30,e,22)).join('')+T(140,55,'ciclo de 3: 🔴 🟡 🔵',13))},
{t:'ex',h:'Dia da semana',q:'Hoje é segunda-feira. Que dia da semana será daqui a 100 dias?',st:['A semana tem ciclo de **7** dias.','100 = 7 × 14 + **2**. Os 14 ciclos completos voltam para segunda.','Sobram 2 dias: segunda → terça → **quarta-feira**.'],r:'quarta-feira'},
{t:'q',q:'Na sequência A B C D A B C D A …, qual é a 50ª letra?',o:['A','B','C','D'],a:1,w:'Ciclo de 4. 50 = 4 × 12 + 2. Resto 2 → 2ª letra do ciclo: **B**.'},
{t:'ex',h:'Resto zero = último do ciclo',q:'Na sequência 🔴🟡🔵🔴🟡🔵…, qual é a cor da 60ª bolinha?',st:['Ciclo de tamanho 3.','60 = 3 × 20 + **0**. Resto 0!','Resto 0 significa que a 60ª é a **última** de um ciclo: 🔵 azul.'],r:'azul'},
{t:'q',q:'1º de janeiro de um ano foi domingo. Que dia da semana foi 1º de fevereiro desse ano?',o:['domingo','segunda','terça','quarta','quinta'],a:3,w:'Janeiro tem 31 dias, então 1º de fevereiro é 31 dias depois. 31 = 7 × 4 + 3. Domingo + 3 dias = **quarta-feira**.'},
{t:'txt',h:'Último algarismo de potências',p:['As potências também têm ciclos no último algarismo! 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32 … o último algarismo segue **2, 4, 8, 6, 2, 4, 8, 6…** (ciclo de 4).','Para saber o último algarismo de 2¹⁰⁰: 100 = 4 × 25 + 0 → resto 0 → último do ciclo: **6**.']},
{t:'q',q:'Qual é o algarismo das unidades de 3²⁰²⁵?',o:['1','3','9','7'],a:1,w:'Unidades de 3ⁿ: 3, 9, 7, 1 (ciclo de 4). 2025 = 4 × 506 + 1 → 1ª posição: **3**.'},
{t:'trap',h:'Cuidado ao contar "daqui a"',p:['"Daqui a 7 dias" cai no **mesmo** dia da semana. "O 7º dia a partir de hoje (contando hoje)" cai no dia **anterior**. Leia com atenção se o dia de hoje entra ou não na contagem.']},
{t:'sum',p:['Dividendo = divisor × quociente + resto','Resto < divisor','Ciclo de tamanho k: use o resto da divisão por k','Resto 0 = último elemento do ciclo','Semana: ciclo 7; meses de 31 dias pulam 3 dias da semana']}]);

/* ============ 6. FRAÇÕES ============ */
add('fracoes','🍕','Frações do zero ao craque','#FF2E88',['F'],[
{t:'txt',h:'O que é uma fração',p:['Fração é um **pedaço** de um inteiro dividido em partes **iguais**.','Em {3/4}: o 4 (denominador) diz em quantas partes iguais dividimos; o 3 (numerador) diz quantas pegamos.'],svg:S(260,125,pie(60,55,45,4,3,'#FF9DC4')+T(60,120,'3/4 da pizza',13)+bar(130,30,4,3,28,'#FF9DC4','3/4 da barra'))},
{t:'txt',h:'Frações equivalentes',p:['{1/2}, {2/4}, {3/6} e {4/8} são o **mesmo pedaço**! Multiplicando (ou dividindo) em cima e embaixo pelo mesmo número, a fração não muda.','Simplificar: {12/18} → divide por 6 → **{2/3}**.'],svg:S(260,90,bar(10,10,2,1,60,'#B9E6FF','1/2')+bar(140,10,4,2,30,'#B9E6FF','2/4'))},
{t:'ex',h:'Fração de uma quantidade',q:'Quanto é {2/5} de 30 balas?',st:['Primeiro descubra **uma** parte: 30 ÷ 5 = **6** (isso é {1/5}).','Depois pegue 2 partes: 2 × 6 = **12**.','Resposta: **12 balas**. Regra: divide pelo de baixo, multiplica pelo de cima.'],r:'12'},
{t:'q',q:'Quanto é {3/4} de 48?',o:['12','36','16','24','32'],a:1,w:'48 ÷ 4 = 12 (um quarto). 3 × 12 = **36**.'},
{t:'ex',h:'O caminho de volta',q:'{2/3} de um número é 18. Que número é esse?',st:['2 partes valem 18, então **1 parte** vale 18 ÷ 2 = 9.','O número inteiro tem 3 partes: 3 × 9 = **27**.','Confira: {2/3} de 27 = 27 ÷ 3 × 2 = 18 ✓'],r:'27'},
{t:'q',q:'Gastei {3/5} do meu dinheiro e ainda tenho R$ 20. Quanto eu tinha?',o:['R$ 30','R$ 50','R$ 40','R$ 60','R$ 100'],a:1,w:'Sobrou {2/5}, que vale 20. Então {1/5} vale 10 e o total ({5/5}) vale **R$ 50**.'},
{t:'txt',h:'Comparar frações',p:['Mesmo denominador: maior numerador ganha. {5/8} > {3/8}.','Mesmo numerador: **menor** denominador ganha (pedaços maiores!). {1/3} > {1/5}.','Diferentes: deixe com o mesmo denominador. {2/3} = {8/12} e {3/4} = {9/12} → {3/4} é maior.']},
{t:'txt',h:'Somar e subtrair',p:['Só dá para somar pedaços do **mesmo tamanho**. Iguale os denominadores primeiro:','{1/2} + {1/3} = {3/6} + {2/6} = **{5/6}**','Truque da OBMEP: pense em quantidades. Se a pizza tem 6 fatias, metade são 3 fatias e um terço são 2 fatias: juntas, 5 de 6.']},
{t:'q',q:'Ana comeu {1/4} de uma torta e Bia comeu {1/3}. Que fração sobrou?',o:['{5/12}','{7/12}','{2/7}','{1/2}','{1/12}'],a:0,w:'{1/4} + {1/3} = {3/12} + {4/12} = {7/12} comidos. Sobrou {12/12} − {7/12} = **{5/12}**.'},
{t:'trap',h:'Armadilha: "fração do que sobrou"',p:['"Gastei {1/2} e depois {1/3} **do que sobrou**" é diferente de "gastei {1/2} e {1/3} do total"!','Exemplo com 60: metade = 30, sobram 30. Um terço do que sobrou = 10. Sobram **20** (e não 60 − 30 − 20 = 10).']},
{t:'q',q:'Tinha 60 figurinhas. Dei {1/3} ao meu irmão e depois {1/4} do que sobrou à minha prima. Com quantas fiquei?',o:['25','30','35','40','15'],a:1,w:'{1/3} de 60 = 20, sobram 40. {1/4} de 40 = 10, sobram **30**.'},
{t:'sum',p:['Partes IGUAIS: baixo = em quantas, cima = quantas','Fração de quantidade: ÷ baixo, × cima','Volta: ache 1 parte, depois o todo','Comparar e somar: iguale os denominadores','"do que sobrou" muda tudo: calcule em etapas']}]);

/* ============ 7. DECIMAIS E PORCENTAGEM ============ */
add('decimais','💯','Decimais e porcentagem','#D9137A',['F','M'],[
{t:'txt',h:'Decimais são frações de 10, 100, 1000',p:['0,5 = {5/10} = metade. 0,25 = {25/100} = um quarto. 0,75 = três quartos.','Para somar ou subtrair decimais, **alinhe as vírgulas**: 3,5 + 1,25 = 3,50 + 1,25 = **4,75**.']},
{t:'q',q:'Qual é o maior: 0,7 ; 0,65 ; 0,699 ; 0,07 ?',o:['0,7','0,65','0,699','0,07'],a:0,w:'Complete com zeros: 0,700 ; 0,650 ; 0,699 ; 0,070. O maior é **0,7**. Número de casas não decide!'},
{t:'txt',h:'Porcentagem: "por cem"',p:['**25%** = 25 de cada 100 = {25/100} = {1/4}.','Atalhos que caem muito:<br>50% = metade · 25% = um quarto · 10% = divide por 10 · 1% = divide por 100 · 20% = um quinto · 75% = três quartos'],svg:S(220,60,grid(10,2,10,(i,j)=>i+j*10<5?'#FF9DC4':'none',10,10)+T(160,32,'5 de 20 = 25%',13))},
{t:'ex',h:'Calculando porcentagem',q:'Quanto é 30% de 250?',st:['10% de 250 = 250 ÷ 10 = **25**.','30% é 3 vezes isso: 3 × 25 = **75**.'],r:'75'},
{t:'q',q:'Uma camiseta de R$ 80 teve 15% de desconto. Quanto passou a custar?',o:['R$ 65','R$ 68','R$ 12','R$ 70','R$ 72'],a:1,w:'10% de 80 = 8, 5% = 4, então 15% = 12. 80 − 12 = **R$ 68**.'},
{t:'trap',h:'Aumentar e depois diminuir NÃO volta ao início',p:['Subir 10% e depois descer 10% **não** volta ao preço original! R$ 100 → +10% = R$ 110 → −10% de 110 = R$ 99.','A segunda porcentagem é calculada sobre o **novo** valor.']},
{t:'q',q:'Numa turma de 40 alunos, 60% são meninas. Quantos meninos?',o:['24','16','20','12','10'],a:1,w:'Meninos = 40%. 10% de 40 = 4, então 40% = **16**.'},
{t:'sum',p:['Alinhe as vírgulas para somar decimais','Compare decimais completando com zeros','% = de cada 100; use 10%, 50%, 25% como atalhos','Desconto/aumento seguidos: o 2º é sobre o novo valor']}]);

/* ============ 8. MEDIDAS, TEMPO E DINHEIRO ============ */
add('medidas','📏','Medidas, tempo e dinheiro','#FF5A1F',['M','T'],[
{t:'txt',h:'A regra de ouro: mesma unidade!',p:['Antes de qualquer conta, deixe **tudo na mesma unidade**. Não dá para somar 2 m com 30 cm sem converter: 2 m = 200 cm → 230 cm.','Comprimento: 1 km = 1000 m · 1 m = 100 cm · 1 cm = 10 mm<br>Massa: 1 kg = 1000 g<br>Volume: 1 L = 1000 mL']},
{t:'txt',h:'Tempo NÃO é decimal!',p:['1 hora = **60** minutos, 1 minuto = 60 segundos, 1 dia = 24 horas.','Por isso 1,5 hora = 1 h **30 min** (não 1 h 50 min!). E 2 h 45 min + 30 min = 2 h 75 min = **3 h 15 min**.']},
{t:'ex',h:'Contando o tempo que passou',q:'Um filme começou às 19 h 40 min e terminou às 21 h 15 min. Quanto tempo durou?',st:['De 19 h 40 até 20 h 00: **20 min**.','De 20 h 00 até 21 h 00: **1 h**.','De 21 h 00 até 21 h 15: **15 min**.','Total: 1 h + 20 + 15 min = **1 h 35 min**. (Truque: vá até a hora "redonda" e depois some.)'],r:'1 h 35 min'},
{t:'q',q:'Saí às 10 h 50 min e viajei 2 h 25 min. A que horas cheguei?',o:['12 h 75 min','13 h 15 min','13 h 25 min','12 h 15 min','13 h 05 min'],a:1,w:'10 h 50 + 2 h = 12 h 50. +10 min = 13 h 00, + 15 min = **13 h 15 min**.'},
{t:'txt',h:'Dinheiro: pense em centavos',p:['R$ 1,00 = 100 centavos. Para não errar vírgula, transforme tudo em centavos: R$ 3,75 = 375 centavos.','Troco = valor pago − preço. Se paguei com R$ 20 algo de R$ 13,45: 2000 − 1345 = 655 → **R$ 6,55**.']},
{t:'q',q:'Comprei 3 cadernos de R$ 7,50 e paguei com R$ 50. Qual o troco?',o:['R$ 22,50','R$ 27,50','R$ 25,50','R$ 28,50','R$ 32,50'],a:1,w:'3 × 7,50 = R$ 22,50. Troco: 50 − 22,50 = **R$ 27,50**.'},
{t:'txt',h:'Relógio de ponteiros',p:['O ponteiro **grande** marca os minutos; o **pequeno**, as horas. Cada número do relógio vale 5 minutos para o ponteiro grande.','Em 1 hora o ponteiro grande dá uma volta inteira (360°) e o pequeno anda só de um número para o próximo (30°).']},
{t:'trap',h:'Armadilha: "quantos intervalos?"',p:['Uma rua de 100 m com árvores a cada 10 m, incluindo as pontas, tem **11** árvores, não 10. Os intervalos são 10, mas as árvores são uma a mais!','Desenhe um caso pequeno para conferir.']},
{t:'q',q:'Um poste a cada 5 m numa rua reta de 50 m, com postes nas duas pontas. Quantos postes?',o:['10','11','9','12','50'],a:1,w:'50 ÷ 5 = 10 intervalos. Postes = intervalos + 1 = **11**.'},
{t:'sum',p:['Converta tudo para a mesma unidade','Tempo: 60 min = 1 h (não 100!)','Conte o tempo indo até a hora redonda','Dinheiro em centavos evita erro de vírgula','Objetos nas pontas: intervalos + 1']}]);

/* ============ 9. RAZÃO E PROPORÇÃO ============ */
add('razao','⚖️','Proporção e regra de três','#B04A00',['M','A','F'],[
{t:'txt',h:'Proporção: quando uma coisa acompanha a outra',p:['Se 2 chocolates custam R$ 6, então 4 custam R$ 12 e 6 custam R$ 18. Dobrou um, dobra o outro: isso é **proporção direta**.','Estratégia número 1: **descubra quanto vale 1 unidade**. 1 chocolate = R$ 3. Daí qualquer quantidade fica fácil.']},
{t:'ex',h:'Passando pela unidade',q:'5 cadernos custam R$ 40. Quanto custam 8 cadernos?',st:['1 caderno: 40 ÷ 5 = **R$ 8**.','8 cadernos: 8 × 8 = **R$ 64**.'],r:'R$ 64'},
{t:'q',q:'Uma receita usa 3 ovos para 12 biscoitos. Quantos ovos para 40 biscoitos?',o:['8','9','10','12','13'],a:2,w:'1 ovo faz 4 biscoitos. 40 ÷ 4 = **10 ovos**.'},
{t:'txt',h:'Proporção inversa',p:['Às vezes, quando um **aumenta**, o outro **diminui**. Mais pintores → menos dias de trabalho.','4 pintores fazem o serviço em 6 dias. O "total de trabalho" é 4 × 6 = **24 pintor-dias**. Com 8 pintores: 24 ÷ 8 = **3 dias**.']},
{t:'q',q:'3 torneiras enchem um tanque em 12 horas. Em quanto tempo 4 torneiras iguais enchem?',o:['16 h','9 h','8 h','10 h','15 h'],a:1,w:'Total = 3 × 12 = 36 "torneira-horas". Com 4: 36 ÷ 4 = **9 h**.'},
{t:'txt',h:'Velocidade = distância ÷ tempo',p:['Andando a 60 km/h, em 1 h percorro 60 km, em 2 h 120 km, em meia hora 30 km.','Distância = velocidade × tempo. Tempo = distância ÷ velocidade.']},
{t:'q',q:'Um ciclista anda 15 km em 45 minutos. Mantendo o ritmo, quantos km em 2 horas?',o:['30','35','40','45','60'],a:2,w:'45 min = 15 km → 15 min = 5 km → 1 h = 20 km. Em 2 h: **40 km**.'},
{t:'txt',h:'Razão e escala',p:['"Para cada 2 meninos há 3 meninas" (razão 2 : 3). Numa turma de 30: são 5 partes de 6 alunos → **12 meninos** e **18 meninas**.','Escala 1 : 100 → 1 cm no mapa = 100 cm (1 m) de verdade.']},
{t:'q',q:'Suco: 1 copo de concentrado para 4 de água. Quantos copos de concentrado em 20 copos de suco pronto?',o:['5','4','16','2','10'],a:1,w:'Cada "kit" tem 1 + 4 = 5 copos. 20 ÷ 5 = 4 kits → **4 copos** de concentrado.'},
{t:'sum',p:['Descubra o valor de 1 unidade','Direta: dobra um, dobra o outro','Inversa: multiplique para achar o "total de trabalho"','Distância = velocidade × tempo','Razão a : b → total dividido em a + b partes']}]);

/* ============ 10. PADRÕES E SEQUÊNCIAS ============ */
add('padroes','🔁','Padrões e sequências','#00A3AF',['S'],[
{t:'txt',h:'Descubra a regra',p:['Sequência é uma lista que segue uma **regra**. Para achar a regra, olhe a **diferença** entre termos vizinhos.','2, 5, 8, 11, … → soma 3 cada vez.<br>1, 2, 4, 8, 16, … → dobra cada vez.<br>1, 4, 9, 16, 25, … → quadrados (1×1, 2×2, 3×3…).']},
{t:'ex',h:'Termo distante',q:'Na sequência 4, 7, 10, 13, …, qual é o 20º termo?',st:['A diferença é **3**. O 1º termo é 4.','Do 1º ao 20º há **19 pulos** de 3: 19 × 3 = 57.','20º termo = 4 + 57 = **61**.'],r:'61'},
{t:'q',q:'Na sequência 5, 9, 13, 17, …, qual é o 50º termo?',o:['200','201','197','205','196'],a:1,w:'Diferença 4. Do 1º ao 50º: 49 pulos → 49 × 4 = 196. 5 + 196 = **201**.'},
{t:'txt',h:'Figuras que crescem',p:['Quando as figuras crescem, monte uma **tabela**: número da figura × quantidade de peças. A diferença mostra quanto cada figura acrescenta.'],svg:S(270,80,[1,2,3].map(n=>{let s='';for(let i=0;i<n;i++)s+=R(10+[0,50,120][n-1]+i*20,40,20,20,'#B9E6FF');for(let i=0;i<n;i++)s+=R(10+[0,50,120][n-1]+i*20,20,20,20,'#FFD7E6');return s+T(10+[0,50,120][n-1]+n*10,74,'fig '+n,11)}).join('')+T(235,45,'2, 4, 6…',13))},
{t:'ex',h:'Palitos em fila',q:'Com palitos formamos quadrados em fila: 1 quadrado usa 4 palitos, 2 quadrados usam 7, 3 usam 10. Quantos palitos para 30 quadrados?',st:['Cada quadrado novo acrescenta **3** palitos (o lado esquerdo já existe).','O primeiro usa 4. Os outros 29 usam 3 cada: 29 × 3 = 87.','Total: 4 + 87 = **91 palitos**. (Fórmula: 3 × n + 1.)'],r:'91'},
{t:'q',q:'Figura 1 tem 1 bolinha, figura 2 tem 4, figura 3 tem 9, figura 4 tem 16. Quantas bolinhas na figura 10?',o:['40','90','100','81','110'],a:2,w:'São quadrados: 1×1, 2×2, 3×3… Figura 10: 10 × 10 = **100**.'},
{t:'txt',h:'Soma de 1 até n (truque de Gauss)',p:['1 + 2 + 3 + … + 100: junte o primeiro com o último: 1 + 100 = 101, 2 + 99 = 101, … São **50 pares** de 101 → **5050**.','Em geral: (primeiro + último) × quantidade ÷ 2.']},
{t:'q',q:'Quanto vale 1 + 2 + 3 + … + 20?',o:['200','210','220','190','400'],a:1,w:'(1 + 20) × 20 ÷ 2 = 21 × 10 = **210**.'},
{t:'sum',p:['Olhe a diferença entre vizinhos','n-ésimo termo = 1º + (n − 1) × diferença','Monte tabela para figuras que crescem','Quadrados: 1, 4, 9, 16…','Soma = (1º + último) × quantidade ÷ 2']}]);

/* ============ 11. CONTAGEM ============ */
add('contagem','🎲','Contagem sem esquecer ninguém','#8F3BFF',['C'],[
{t:'txt',h:'Listar com organização',p:['Para contar possibilidades, faça uma **lista organizada** (em ordem) para não esquecer nem repetir nenhuma.','Ex.: números de 2 algarismos com algarismos 1, 2, 3 sem repetir: 12, 13, 21, 23, 31, 32 → **6**.']},
{t:'txt',h:'Princípio multiplicativo',p:['Se uma escolha tem **3** opções e a outra tem **4**, as combinações são **3 × 4 = 12**.','3 camisetas e 4 bermudas → 12 roupas diferentes.'],svg:S(260,100,['👕','👕','👕'].map((e,i)=>T(30,25+i*30,e,22)).join('')+['🩳','🩳','🩳','🩳'].map((e,i)=>T(220,20+i*25,e,18)).join('')+[0,1,2].map(i=>[0,1,2,3].map(j=>`<line x1="45" y1="${18+i*30}" x2="205" y2="${14+j*25}" stroke="currentColor" stroke-opacity=".35"/>`).join('')).join(''))},
{t:'ex',h:'Senhas',q:'Quantas senhas de 3 algarismos podem ser formadas só com 1, 2, 3 e 4, podendo repetir?',st:['1º algarismo: **4** opções. 2º: **4**. 3º: **4**.','Total: 4 × 4 × 4 = **64**.'],r:'64'},
{t:'q',q:'E se os 3 algarismos (de 1, 2, 3, 4) tiverem que ser diferentes?',o:['64','24','12','36','48'],a:1,w:'1º: 4 opções; 2º: 3 (não pode repetir); 3º: 2. Total: 4 × 3 × 2 = **24**.'},
{t:'txt',h:'Quando a ordem não importa: apertos de mão',p:['5 amigos se cumprimentam, cada par uma vez. Cada um aperta a mão de 4 → 5 × 4 = 20, mas cada aperto foi contado **2 vezes** (Ana-Bia e Bia-Ana). Resposta: 20 ÷ 2 = **10**.','O mesmo vale para jogos de um campeonato, segmentos ligando pontos, duplas formadas.']},
{t:'q',q:'Em um torneio com 6 times, cada time joga uma vez contra cada outro. Quantos jogos?',o:['30','36','12','15','6'],a:3,w:'6 × 5 = 30 contando cada jogo 2 vezes. 30 ÷ 2 = **15**.'},
{t:'ex',h:'Contar caminhos na malha',q:'Numa malha, só pode andar para a direita ou para cima. De quantas formas chego de A ao canto oposto de um retângulo 2 × 2?',st:['Em cada ponto, escreva **quantos caminhos chegam nele**: na borda é sempre 1.','Cada ponto de dentro = soma de quem está à esquerda + quem está embaixo.','Fazendo a tabela: 1, 1, 1 / 1, 2, 3 / 1, 3, **6**. São **6 caminhos**.'],r:'6'},
{t:'trap',h:'Armadilha: contar demais ou de menos',p:['Antes de responder, pergunte: **a ordem importa?** (senha: sim; dupla de amigos: não). Se não importa, divida pela quantidade de vezes que contou cada grupo.','E sempre teste com um caso pequeno que dê para listar à mão.']},
{t:'q',q:'Quantos triângulos têm vértices em 3 de 5 pontos de uma circunferência?',o:['5','10','15','20','60'],a:1,w:'Escolher 3 pontos em ordem: 5 × 4 × 3 = 60. Cada triângulo foi contado 6 vezes (ordens de 3 vértices). 60 ÷ 6 = **10**.'},
{t:'sum',p:['Liste com ordem para não esquecer','Escolhas seguidas: multiplique','Sem repetição: o número de opções diminui','Ordem não importa: divida pelas repetições','Caminhos: some os vizinhos de baixo e da esquerda']}]);

/* ============ 12. ÁREA E PERÍMETRO ============ */
add('areas','📐','Área e perímetro','#1E9BFF',['G'],[
{t:'txt',h:'Perímetro × área',p:['**Perímetro** = comprimento do contorno (soma dos lados). É a cerca do terreno.','**Área** = quanto de superfície há dentro. É a grama que cobre o terreno.'],svg:S(260,100,R(20,20,120,60,'#DBFBEC','#16C47F',4)+T(80,56,'área',14,'#333')+T(200,30,'perímetro =',12)+T(200,48,'contorno',12)+T(200,72,'área = dentro',12))},
{t:'txt',h:'Fórmulas que você precisa',p:['**Retângulo**: área = base × altura; perímetro = 2 × (base + altura)<br>**Quadrado** de lado L: área = L × L; perímetro = 4 × L<br>**Triângulo**: área = base × altura ÷ 2 (é metade de um retângulo!)']},
{t:'ex',h:'Contando na malha',q:'Uma figura na malha tem 7 quadradinhos inteiros e 4 meios quadradinhos (triângulos). Qual a área, em quadradinhos?',st:['Os 7 inteiros valem **7**.','Cada 2 metades formam 1 quadradinho: 4 metades = **2**.','Área = 7 + 2 = **9 quadradinhos**.'],r:'9'},
{t:'q',q:'Um retângulo tem perímetro 30 cm e um dos lados mede 10 cm. Qual é a área?',o:['50 cm²','150 cm²','100 cm²','300 cm²','20 cm²'],a:0,w:'2 × (10 + x) = 30 → 10 + x = 15 → x = 5. Área: 10 × 5 = **50 cm²**.'},
{t:'txt',h:'Tirar em vez de somar',p:['Figuras com "buracos" ou formas estranhas: calcule o **retângulo inteiro** e **tire** o que está sobrando. Muitas vezes é bem mais rápido!'],svg:S(220,100,R(20,10,120,80,'#B9E6FF')+R(90,10,50,40,'#fff')+T(60,60,'figura',13,'#333')+T(170,40,'= grande',12)+T(170,60,'− pedaço',12))},
{t:'ex',h:'Quadrado e triângulo dentro',q:'Num quadrado de lado 10 cm, ligamos um vértice aos pontos médios dos dois lados opostos. Qual a área do triângulo formado entre essas 2 linhas?',st:['Área do quadrado: 10 × 10 = **100**.','Os 3 triângulos de fora: dois com base 10 e altura 5 → 25 cada; um com catetos 5 e 5 → 12,5.','Triângulo do meio: 100 − 25 − 25 − 12,5 = **37,5 cm²**.'],r:'37,5'},
{t:'trap',h:'Armadilha: mesma área, perímetro diferente',p:['Figuras com a **mesma área** podem ter perímetros diferentes! Um retângulo 1 × 16 e um quadrado 4 × 4 têm área 16, mas perímetros 34 e 16.','E quando você "corta um cantinho" de um retângulo (em degrau), o perímetro **não muda**: os lados apenas mudam de lugar.']},
{t:'q',q:'Quantos quadrados de lado 2 cm cabem num retângulo de 8 cm por 6 cm?',o:['12','24','48','14','10'],a:0,w:'Na base cabem 8 ÷ 2 = 4; na altura 6 ÷ 2 = 3. Total: 4 × 3 = **12**.'},
{t:'q',q:'Dobro o lado de um quadrado. A área fica:',o:['dobrada','triplicada','4 vezes maior','igual','8 vezes maior'],a:2,w:'Lado 2L → área 2L × 2L = 4 × L × L. Fica **4 vezes maior**.'},
{t:'sum',p:['Perímetro = contorno; área = dentro','Retângulo: b × h; triângulo: b × h ÷ 2','Malha: inteiros + metades ÷ 2','Às vezes é melhor tirar do todo','Dobrar o lado → área × 4']}]);

/* ============ 13. ÂNGULOS E FIGURAS ============ */
add('angulos','📏','Ângulos, polígonos e simetria','#0B72C9',['G'],[
{t:'txt',h:'Ângulos que você precisa saber',p:['Volta inteira = **360°**. Meia volta (linha reta) = **180°**. Ângulo reto (canto de quadrado) = **90°**.','A soma dos ângulos de **qualquer triângulo** é **180°**. Num quadrilátero, **360°**.']},
{t:'q',q:'Um triângulo tem ângulos de 50° e 70°. Quanto mede o terceiro?',o:['50°','60°','70°','80°','120°'],a:1,w:'180 − 50 − 70 = **60°**.'},
{t:'txt',h:'Ângulos no relógio',p:['O relógio é um círculo de 360° dividido em 12 → cada número = **30°**.','Às 3 h os ponteiros fazem 3 × 30 = **90°**. Às 4 h, 120°.']},
{t:'q',q:'Qual o ângulo entre os ponteiros às 5 h em ponto?',o:['120°','150°','100°','180°','75°'],a:1,w:'5 números de distância × 30° = **150°**.'},
{t:'txt',h:'Polígonos',p:['Triângulo (3 lados), quadrilátero (4), pentágono (5), hexágono (6), heptágono (7), octógono (8).','**Regular** = todos os lados e ângulos iguais. Hexágono regular = 6 triângulos equiláteros juntos!'],svg:S(130,110,'<polygon points="65,10 110,35 110,85 65,110 20,85 20,35" fill="#FFF0DC" stroke="currentColor" stroke-width="2"/>'+[[65,10],[110,35],[110,85],[65,110],[20,85],[20,35]].map(([x,y])=>`<line x1="65" y1="60" x2="${x}" y2="${y}" stroke="currentColor"/>`).join(''))},
{t:'txt',h:'Simetria e espelho',p:['Uma figura tem **eixo de simetria** quando, dobrando ao meio, as duas partes coincidem.','No espelho, a direita vira esquerda: ↗ vira ↖. O número 2 no espelho fica ꙅ.','Dobrar papel e recortar: a figura aberta é **simétrica** em relação à dobra.']},
{t:'q',q:'Quantos eixos de simetria tem um quadrado?',o:['1','2','4','8','0'],a:2,w:'2 pelos meios dos lados e 2 pelas diagonais: **4**.'},
{t:'sum',p:['Triângulo: 180°; quadrilátero: 360°','Relógio: 30° por número','Hexágono regular = 6 triângulos equiláteros','Espelho troca direita e esquerda','Dobra + corte → figura simétrica']}]);

/* ============ 14. VISÃO ESPACIAL ============ */
add('espacial','🧊','Cubos, dados e planificações','#16C47F',['E'],[
{t:'txt',h:'O cubo',p:['Um cubo tem **6 faces**, **12 arestas** e **8 vértices**.','Cada face toca 4 outras e fica **oposta** a 1.'],svg:S(160,110,cube(30,40,60))},
{t:'txt',h:'O dado: opostos somam 7',p:['No dado comum, faces opostas sempre somam **7**: 1 ↔ 6, 2 ↔ 5, 3 ↔ 4.','Se você vê o 2 na frente, o 5 está atrás. Se o 3 está em cima, o 4 está embaixo.']},
{t:'q',q:'Num dado, vemos 1, 2 e 3 em três faces. Quanto somam as faces que não vemos?',o:['6','15','12','21','9'],a:1,w:'Opostas: 6, 5 e 4. Soma **15**. (Ou: total do dado 21 − 6 = 15.)'},
{t:'txt',h:'Planificações',p:['Planificar é "abrir a caixa" e deitar as faces no chão. Para um cubo há **11** planificações diferentes.','Truque: numa fileira de faces seguidas, faces **alternadas** (pulando uma) são **opostas**. Na cruz ✚, o quadrado de cima e o de baixo são opostos.'],svg:S(200,160,[[1,0],[0,1],[1,1],[2,1],[3,1],[1,2]].map(([i,j],k)=>R(20+i*40,10+j*40,40,40,'#FFF0DC')+T(40+i*40,36+j*40,'ABCDEF'[k],15,'#333')).join('')+T(100,152,'A↔F, B↔D, C↔E',12))},
{t:'q',q:'Na planificação em cruz acima, qual face fica oposta à C?',o:['A','B','D','E','F'],a:3,w:'Na fileira B C D E, pulando uma: C e E são opostas. Resposta **E**.'},
{t:'txt',h:'Contar cubinhos',p:['Para contar cubinhos de uma pilha, conte **coluna por coluna** (ou andar por andar). Não esqueça os escondidos atrás e embaixo: eles precisam existir para segurar os de cima!','Cubo pintado de lado 3 (27 cubinhos): 8 têm 3 faces pintadas (cantos), 12 têm 2 (meio das arestas), 6 têm 1 (centro das faces) e 1 não tem nenhuma.']},
{t:'q',q:'Um cubo 3 × 3 × 3 de cubinhos foi pintado por fora. Quantos cubinhos têm exatamente 2 faces pintadas?',o:['8','6','12','24','1'],a:2,w:'Ficam no meio de cada aresta: o cubo tem 12 arestas → **12**.'},
{t:'txt',h:'Vistas',p:['Vista **de frente**, **de cima** e **de lado** mostram só a "sombra" da pilha naquela direção. A vista de cima mostra quais colunas existem; a de frente mostra a altura máxima de cada coluna, olhando de frente.']},
{t:'sum',p:['Cubo: 6 faces, 12 arestas, 8 vértices','Dado: opostos somam 7 (total 21)','Planificação: alternadas na fileira são opostas','Conte cubinhos coluna por coluna','Cubo 3×3×3 pintado: 8, 12, 6 e 1']}]);

/* ============ 15. LÓGICA ============ */
add('logica','🕵️','Lógica de detetive','#6A2BF0',['L'],[
{t:'txt',h:'Pense como um detetive',p:['Em questões de lógica, **anote todas as pistas** antes de começar. Monte uma **tabela** com pessoas em linhas e opções em colunas, e marque ✓ (certo) ou ✗ (impossível).','Cada ✓ numa linha elimina o resto da linha e da coluna.']},
{t:'ex',h:'Tabela de pistas',q:'Ana, Bia e Caio têm um gato, um cão e um peixe (um cada). Ana não tem cão. Caio tem o peixe. Quem tem o gato?',st:['Caio = peixe ✓. Então ninguém mais tem peixe.','Sobram gato e cão para Ana e Bia. Ana **não** tem cão → Ana tem o **gato**.','Bia fica com o cão. Resposta: **Ana**.'],r:'Ana'},
{t:'txt',h:'Supor e testar (verdade/mentira)',p:['Quando há quem fala a verdade e quem mente: **suponha** que um deles diz a verdade e siga as consequências.','Se der **contradição**, a suposição era falsa. Teste a próxima. É a estratégia "supor e eliminar".']},
{t:'ex',h:'Quem mente?',q:'Ana, Bia ou Caio quebrou o vaso. Exatamente UM deles mente. Ana: "Foi a Bia". Bia: "Foi o Caio". Caio: "A Bia está mentindo". Quem quebrou?',st:['Suponha que foi o **Caio**: Ana mente, Bia fala verdade, Caio ("Bia mente") mente. São **2 mentirosos** ✗.','Suponha que foi a **Ana**: Ana mente e Bia também mente. **2 mentirosos** ✗.','Suponha que foi a **Bia**: Ana fala verdade, Bia mente, Caio fala verdade ("Bia mente" ✓). **Só 1 mentiroso** ✓.','Resposta: foi a **Bia**. Sempre teste **todos** os casos!'],r:'Bia'},
{t:'q',q:'Num grupo, cada um é honesto (sempre fala verdade) ou mentiroso (sempre mente). João diz: "eu sou mentiroso". Isso é possível?',o:['Sim, se ele for mentiroso','Sim, se ele for honesto','Não é possível'],a:2,w:'Se fosse honesto, estaria mentindo. Se fosse mentiroso, estaria falando a verdade. **Impossível** — ninguém pode dizer isso!'},
{t:'txt',h:'Princípio da casa dos pombos',p:['Se 13 pessoas estão numa sala, **pelo menos 2** fazem aniversário no mesmo mês (só existem 12 meses!).','"Qual o **mínimo** para garantir…?" → pense no **pior caso** (o mais azarado possível) e some 1.']},
{t:'q',q:'Numa gaveta há meias azuis e pretas misturadas. Pegando no escuro, quantas preciso tirar para garantir um par da mesma cor?',o:['2','3','4','5'],a:1,w:'Pior caso: 1 azul e 1 preta. A próxima forma par com certeza: **3**.'},
{t:'q',q:'Uma caixa tem 5 bolas vermelhas, 4 azuis e 3 verdes. Quantas tirar, no escuro, para garantir 2 vermelhas?',o:['2','9','8','12','7'],a:1,w:'Pior caso: tirar todas as 4 azuis e 3 verdes (7) antes. Depois mais 2 vermelhas: 7 + 2 = **9**.'},
{t:'sum',p:['Anote as pistas numa tabela ✓/✗','Supor → seguir → contradição elimina','Teste todos os casos antes de responder','Garantir = pense no pior caso + 1']}]);

/* ============ 16. PROBLEMAS SEM LETRA (balanças, idades) ============ */
add('balanca','🧩','Problemas com balanças e idades','#4A16B8',['L','A'],[
{t:'txt',h:'Balança em equilíbrio',p:['Uma balança equilibrada mostra que os dois lados **pesam igual**. Você pode tirar a **mesma coisa** dos dois lados que ela continua equilibrada.','Se 🍎🍎🍎 + 2 kg = 🍎 + 6 kg, tire 🍎 de cada lado: 🍎🍎 + 2 = 6 → 🍎🍎 = 4 → 🍎 = **2 kg**.']},
{t:'ex',h:'Desenho de barras',q:'Pedro e Lia têm juntos 50 figurinhas. Lia tem 8 a mais que Pedro. Quantas tem Pedro?',st:['Desenhe: Pedro = ▭ e Lia = ▭ + 8.','Juntos: ▭ + ▭ + 8 = 50 → ▭ + ▭ = 42.','▭ = 21. Pedro tem **21** (e Lia 29).'],r:'21'},
{t:'q',q:'Um caderno e uma caneta custam R$ 13. O caderno custa R$ 7 a mais que a caneta. Quanto custa a caneta?',o:['R$ 6','R$ 3','R$ 3,50','R$ 2','R$ 7'],a:1,w:'Tirando os R$ 7 extras: 13 − 7 = 6 para 2 canetas → caneta = **R$ 3**.'},
{t:'txt',h:'Problemas de idade',p:['A diferença de idade entre duas pessoas **nunca muda**! Se o pai tem 30 anos a mais que o filho hoje, terá 30 a mais daqui a 10 anos também.','E todos envelhecem juntos: daqui a 5 anos, **cada** pessoa terá 5 anos a mais.']},
{t:'ex',h:'Exemplo com idades',q:'Hoje a mãe tem 36 anos e o filho 6. Daqui a quantos anos a mãe terá o triplo da idade do filho?',st:['Diferença fixa: 36 − 6 = **30** anos.','Se a mãe tem o triplo, a diferença é 2 vezes a idade do filho: 2 × filho = 30 → filho = **15**.','Hoje ele tem 6 → faltam 15 − 6 = **9 anos**.'],r:'9'},
{t:'txt',h:'"Pensei num número"',p:['"Pensei num número, multipliquei por 3, somei 5 e deu 32." **Volte de trás para frente** com as operações contrárias: 32 − 5 = 27 → 27 ÷ 3 = **9**.']},
{t:'q',q:'Pensei num número, dobrei, tirei 6 e dividi por 2. Deu 10. Que número pensei?',o:['8','13','16','10','26'],a:1,w:'Voltando: 10 × 2 = 20 → 20 + 6 = 26 → 26 ÷ 2 = **13**.'},
{t:'sum',p:['Balança: tire o mesmo dos dois lados','Desenhe barras para comparar quantidades','Diferença de idades nunca muda','"Pensei num número": volte desfazendo']}]);

/* ============ 17. TABELAS E GRÁFICOS ============ */
add('tabelas','📊','Tabelas, gráficos e média','#0C9A62',['T'],[
{t:'txt',h:'Ler antes de calcular',p:['Em gráficos, leia **o título, os eixos e a escala** antes de tudo. Cada quadradinho do gráfico pode valer 1, 2, 5, 10…','Em tabelas, confira qual linha e qual coluna a pergunta quer.'],svg:S(240,110,'<line x1="30" y1="95" x2="230" y2="95" stroke="currentColor" stroke-width="2"/><line x1="30" y1="95" x2="30" y2="10" stroke="currentColor" stroke-width="2"/>'+[[40,6],[90,3],[140,8],[190,5]].map(([x,v])=>`<rect x="${x}" y="${95-v*10}" width="30" height="${v*10}" fill="#7FD9B0" stroke="currentColor"/>`).join('')+T(18,40,'10',10)+T(18,90,'0',10)+T(55,108,'seg',10)+T(105,108,'ter',10)+T(155,108,'qua',10)+T(205,108,'qui',10))},
{t:'txt',h:'Média',p:['**Média** = soma de todos os valores ÷ quantidade de valores.','Notas 6, 8 e 10: média = (6 + 8 + 10) ÷ 3 = 24 ÷ 3 = **8**.','Truque: se a média de 4 números é 15, a **soma** deles é 4 × 15 = 60.']},
{t:'q',q:'A média de 5 números é 12. Quatro deles são 10, 11, 13 e 14. Qual é o quinto?',o:['10','12','14','11','60'],a:1,w:'Soma total = 5 × 12 = 60. Os quatro somam 48. Quinto = 60 − 48 = **12**.'},
{t:'q',q:'No gráfico acima (cada linha vale 1), quantos a mais na quarta do que na terça?',o:['3','5','8','2','11'],a:1,w:'Quarta = 8, terça = 3. Diferença: **5**.'},
{t:'trap',h:'Armadilha: escala que não começa no zero',p:['Se o eixo do gráfico começa em 50 em vez de 0, as barras parecem muito diferentes mesmo com valores próximos. **Leia os números**, não só o tamanho das barras.']},
{t:'sum',p:['Leia título, eixos e escala primeiro','Média = soma ÷ quantidade','Soma = média × quantidade','Compare valores, não o tamanho visual']}]);

/* ============ 18. COMO FAZER A PROVA ============ */
add('estrategia','🏆','Como encarar a prova da OBMEP','#E8007D',Object.keys({A:1,F:1,G:1,E:1,C:1,L:1,S:1,N:1,M:1,T:1}),[
{t:'txt',h:'A prova da 1ª fase',p:['São **20 questões** de múltipla escolha (A a E), **2h30** de prova. As primeiras costumam ser mais fáceis e as últimas, mais difíceis.','Não existe ponto negativo: **nunca deixe questão em branco**!']},
{t:'txt',h:'Os 4 passos para cada questão',p:['1️⃣ **Leia duas vezes** e sublinhe o que a pergunta pede (o total? a diferença? quantos sobraram?).<br>2️⃣ **Desenhe** ou faça uma tabela. Quase toda questão fica mais clara no papel.<br>3️⃣ **Escolha a estratégia**: conta direta, testar alternativas, procurar padrão, trabalhar de trás para frente, dividir a figura…<br>4️⃣ **Confira** se a resposta faz sentido e responde exatamente à pergunta.']},
{t:'txt',h:'Use as alternativas a seu favor',p:['As 5 alternativas são **pistas**! Às vezes dá para testar cada uma. Às vezes uma estimativa já elimina 3 delas.','Se a questão pede "quantos números…", as alternativas mostram o tamanho da resposta: não precisa contar até 1000 se as opções são 5, 6, 7, 8 e 9.']},
{t:'q',q:'Você travou numa questão há 10 minutos. O melhor a fazer é:',o:['Insistir até resolver','Pular, marcar no rascunho e voltar depois','Deixar em branco'],a:1,w:'**Pule e volte depois**. Outras questões podem ser mais fáceis para você — e às vezes, voltando, a ideia aparece.'},
{t:'txt',h:'Controle do tempo',p:['150 minutos para 20 questões ≈ **7 minutos por questão**. Faça as fáceis rápido para ganhar tempo para as difíceis.','Nos 10 minutos finais, **marque todas** as que faltam, mesmo chutando com eliminação (eliminar 2 alternativas aumenta muito sua chance).']},
{t:'sum',p:['Leia duas vezes; sublinhe a pergunta','Desenhe, tabele, organize','Escolha a estratégia certa','As alternativas são pistas','~7 min por questão; nunca deixe em branco']}]);

window.AULAS=A;
window.AULA_BY=Object.fromEntries(A.map(a=>[a.id,a]));
// aulas de cada trecho do Vale dos Números
window.VALE_AULAS={contas:['ordem','calc','numeracao'],medidas:['medidas','razao','decimais'],fracoes:['fracoes'],padroes:['divis','resto','padroes','contagem'],areas:['areas','angulos','espacial'],logica:['logica','balanca','tabelas'],mistao:['estrategia']};
})();
