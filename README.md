# Desafio de Lógica - Módulo 1 - B2B T11 - DBE iFood

Este é o repositório referente ao desafio de lógica de programação do curso de desenvolvimento de software back-end da Cubos Academy (Ifood). 
Link do desafio no hackerrak: [link](https://www.hackerrank.com/desafio-de-logica-modulo-1-b2b-t11-dbe-ifood)

## Enunciados (14)

<details>
<summary><b>1) Soma dos Elementos</b></summary>
<br>

  Álvaro está economizando para comprar uma uma passagem para a europa. Por isso diariamente ele coloca um valor no cofre. Faça um programa que calcule o total acumulado no cofre até o momento.
    
  Input Format
    
  A entrada será sempre uma lista de inteiros positivos.
    
  Constraints
    
  A lista pode conter até 1000 inteiros positivos.
    
  Output Format
    
  Imprima na tela o total acumulado nessa lista.
    
  Sample Input 0
    
  1 2 3 4
    
  Sample Output 0
    
  10

</details>

<details>
<summary><b>2) Média Aritmética</b></summary>
<br>

  Álvaro está economizando para viajar para a europa. Todo dia ele coloca mais dinheiro no seu cofre. A quantidade de dinheiro que ele coloca no cofre a cada dia está registrada no array lista. Faça um programa que calcule quanto Álvaro vem acumulando, em média, por dia.
    
  Input Format
    
  A entrada é uma lista que contém quanto Álvaro guarda no cofre a cada dia.
    
  Constraints
    
  A lista tem de 0 a 1000 itens.
    
  Output Format
    
  Imprima na tela o quanto Álvaro vem acumulando, em média, por dia.
    
  Sample Input 0
    
  2 3 4
    
  Sample Output 0
    
  3

</details>

<details>
<summary><b>3) Números dentro de um Intervalo</b></summary>
<br>

  Jacqueline e Emanuel acabaram de sair da aulas desesperados pela quantidade de exercícios de matemática que a professora Raissa passou como dever de casa. Para a sorte deles, você sabe programação e vai criar um programa pra ajudá-los a resolver todos os problemas do assunto intervalos entre dois números.
    
  Eles pediram, então, para que você crie um programa que consiga fazer a prova-real de todos os exercícios da professora Raissa.
    
  Seu objetivo é:
    
  Implementar uma função que receba três argumentos: numero, limiteInferior e limiteSuperior;
    Essa função deve retornar se esse número pertence ao conjunto que é limitado pelo limiteInferior e limiteSuperior
    Pertencer ao conjunto significa que dado o numero, ele deve ser maior ou igual que o limiteInferior e menor ou igual do que o limiteSuperior.
    
  Input Format
    
  A entrada consista de três parâmetros: numero, limiteInferior e limiteSuperior.
    
  numero refere-se ao número desejado para saber se ele está dentro ou não do limite. limiteInferior refere-se ao menor valor do limite de um dado intervalo; limiteSuperior refere-se ao maior valor do limite de um dado intervalo;
    
  Constraints
    
  Quaisquer números inteiros;
  limiteInferior menor ou igual ao limiteSuperior;
    
  Output Format
    
  Imprima uma das duas opções abaixo:
    
  PERTENCE - para quando um número pertence ao limite delimitado;
  NAO PERTENCE - para quando um número não pertence ao limite delimitado;
    
  Sample Input 0
    
  10 5 20
    
  Sample Output 0
    
  PERTENCE
    
  Explanation 0
    
  O primeiro valor refere-se ao valor que deseja-se saber é pertercente ao intervalo;
  O segundo e terceiro valor refere-se ao intervalo.

</details>

<details>
<summary><b>4) Mesa de Póker</b></summary>
<br>

  Numa mesa de poker existe um valor mínimo de dinheiro que você precisa ter para poder jogar naquela mesa. Contudo, há também um limite máximo, pois jogadores com muito mais dinheiro na mesa levam vantagem. Faça um programa que selecione dentre um lista de valores, apenas aqueles que são permitidos para se jogar numa determiada mesa de poker.
  
  Input Format
  
  A entrada é costituida de 3 variáveis:
  
  min é o mínimo necessário para se poder jogar nesta mesa. É necessário ter o mínimo ou mais.
  max é o máximo permitido para se poder jogar nesta mesa. É necessário ter o máximo, ou menos.
  valores é um array que contém os valores com os quais o jogadores estão tentando sentar na mesa para jogar
  
  Constraints
  
  A lista tem de 1 a 1000 itens.
  
  Output Format
  
  Imprima na tela a lista contendo apeas os valores que são autorizados a jogar nessa mesa, mantendo a mesma ordem da entrada.
  
  Sample Input 0
  
  2
  10
  0 5 6 10 11
  
  Sample Output 0
  
  [ 5, 6, 10 ]
  
  Sample Input 1
  
  1
  1
  1 2 3 4 5 6 7 8 9
  
  Sample Output 1
  
  [ 1 ]

</details>

<details>
<summary><b>5) Truco</b></summary>
<br>

  O jogo de truco é muito popular pelo Brasil. Numa de suas versões, ele é jogado apenas com as cartas Q J K A 2 3. Elas tem essa ordem de "força" nesse jogo, sendo 3 a mais valiosa e Q a menos valiosa. Contudo, a cada partida é virada uma carta com a face pra cima na mesa. Esta carta serve para indicar que a próxima carta é a manilha, ou seja, a carta mais poderosa para essa partida. Fizemos uma tabela resumo para explicar essa mecânica:
  
  	
| Carta virada pra cima |  Manilha  |
| :-: | :-: |
|  Q  |  J  |
|  J  |  K  |
|  K  |  A  |
|  A  |  2  |
|  2  |  3  |
|  3  |  Q  |
  
  Supondo que a carta virada pra cima dessa rodada seja um ás (A), a manilha será 2, isso significa que 2 é a carta mais forte dessa rodada.
  
  Faça um programa que diga qual é a manilha, dada uma carta virada para cima.
  
  Input Format
  
  A entrada é um string armazenado na variável cartaParaCima que indica qual carta ficou virada para cima. Será sempre uma das opções: Q, J, K, A, 2, 3.
  
  Constraints
  
  -
  
  Output Format
  
  Imprima na tela qual é a manilha desta partida. Sua resposta deve ser sempre uma das opções: Q, J, K, A, 2, 3.
  
  Sample Input 0
  
  Q
  
  Sample Output 0
  
  J

</details>

<details>
<summary><b>6) Caçula dos Adultos</b></summary>
<br>

  Um determinado evento é permitido apenas para maiores de idade. Através de um lista com as idades dos potenciais participantes, seu objetivo é fazer um programa que determine qual a idade da pessoa mais nova, dentre os que podem participar (maiores de idade).
  
  Input Format
  
  A entrada é um array com as idades das pessoas que tentam participar.
  
  Constraints
  
  A lista contém de 1 a 1000 itens
  
  Output Format
  
  Imprima na tela a idade da pessoa mais jovem que pode participar. Se ninguém puder participar, você deve imprimir CRESCA E APARECA na tela.
  
  Sample Input 0
  
  12 18 27
  
  Sample Output 0
  
  18

</details>

<details>
<summary><b>7) Contador de Palavras</b></summary>
<br>

  Todo bom editor de texto informa no rodapé do programa quantas palavras tem no texto. Você está trabalhando numa empresa que está desenvolvendo um editor de texto e ficou com a tarefa de desenvolver esta funcionalidade. Para o texto dado na entrada, imprima na tela quantas palavras existem neste texto.
  
  Input Format
  
  A entrada será sempre um texto qualquer
  
  Constraints
  
  A entrada será sempre um texto qualquer com no máximo 5000 caracteres.
  
  Output Format
  
  Imprima na tela a quantidade de palavras contidas no texto.
  
  Sample Input 0
  
  Um texto qualquer
  
  Sample Output 0
  
  3
  
  Sample Input 1
  
  Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem querer 
  
  Sample Output 1
  
  14

</details>

<details>
<summary><b>8) Americano</b></summary>
<br>

   Num jogo de futebol entre amigos é muito comum que ninguém queira ser o goleiro. Para resolver esse impasse, um time decidiu utilizar o jogo "Americano".
  
  Neste jogo, o time faz uma roda e cada um dos jogadores "joga" um número X qualquer. Após isso, o capitão do time soma todos os números jogados e obtém o resultado S. Depois, começa a contar de 1 até S apontando inicialmente para si mesmo (e falando alto e claramente "um"), depois para o jogador imediatamente a sua direita (e falando "dois") e assim por diante. O goleiro será aquele que estiver sendo apontado quando o capitão chegar a S.
  
  Para fins de facilitar a resposta do problema, vamos considerar que o capitão está na posição 1, o jogador a sua direita está na posição 2, o jogador a direita deste está na posição 3, e assim por diante.
  
  Você deve fazer um programa que determina qual a posição do jogador que deve ser o goleiro.
  
  Input Format
  
  A entrada será um array com N números, que corresempondem ao número jogado por cada um dos jogadores do time. Logo, se o array tiver tamanho 11, significa que este time tem 11 jogadores, por exemplo.
  
  Constraints
  
  0 < X < 11
  
  N <= 12
  
  Output Format
  
  Imprima na tela a posição em que está o jogodar que foi sorteado para ser o goleiro.
  
  Sample Input 0
  
  1 3 2 1
  
  Sample Output 0
  
  3
  
  Sample Input 1
  
  1 1 1
  
  Sample Output 1
  
  3

</details>

<details>
<summary><b>9) Promoção!</b></summary>
<br>

  Para o dia dos namorados, um loja de presentes que, sabiamente, investiu em tecnologia e fazia uma profunda análise de dados percebeu que mais de 80% dos seus clientes compravam 2 itens nessa época. Com o objetivo de tentar aumentar o faturamento, essa loja lançou uma promoção, na qual o cliente que comprasse pelo menos 3 itens, teria um desconto de 50% no item mais barato.
  
  Contudo, juntando a alta demanda desse período com o fato de o caixa ter que calcular esse desconto manualmente está causando filas demais. Seu papel, como desenvolvedor(a) dessa empresa é fazer um algoritmo que calcule automaticamente o valor devido pelo cliente ao se aplicar essa promoção quando necessário.
  
  Input Format
  
  A entrada será sempre um vetor de inteiros positivos. Cada inteiro desse representa o valor de cada produto comprado por um dado cliente, em centavos.
  
  Constraints
  
  O vetor terá sempre no máximo 100 itens.
  
  Output Format
  
  Imprima o valor a ser pago pelo cliente, visto que esta promoção está em vigor. Imprima este valor também em centavos.
  
  Sample Input 0
  
  150 50
  
  Sample Output 0
  
  200
  
  Sample Input 1
  
  100 100 100
  
  Sample Output 1
  
  250
  
  Sample Input 2
  
  200 150 50 100
  
  Sample Output 2
  
  475

</details>

<details>
<summary><b>10) Zerinho ou Um</b></summary>
<br>

  Quando precisa-se escolher apenas uma pessoa aleatoriamente dentro de um grupo, é comum jogar "zerinho ou um" para sortear alguém. O jogo é muito simples: cada jogador joga 0 ou 1 com as mão. Aquele que for o único(a) a jogar zero ou um é o sorteado. Faça um programa que imprima o nome da pessoa que foi sorteada, ou NINGUEM, caso ninguém tenha sido sorteado(a).
  
  Input Format
  
  A entrada será sempre um vetor de objetos chamado jogadores, em que cada objeto é uma pessoa, com o seguinte formato:
  
  {
      nome: "Herbert",
      jogada: 0 // será sempre 0 ou 1
  }
  Constraints
  
  Pode-se assumir que sempre haverá pelo menos 3 pessoas jogando, ou seja, a entrada será sempre um vetor com pelo menos 3 itens. Você não precisa fazer nenhum código para checar isso.
  
  Output Format
  
  Imprima na tela o nome do jogador que foi sorteado.
  
  Sample Input 0
  
  [
    {
      "nome": "Herman",
      "jogada": 1
    },
    {
      "nome": "Rhodes",
      "jogada": 0
    },
    {
      "nome": "Beach",
      "jogada": 0
    },
    {
      "nome": "Laurel",
      "jogada": 0
    },
    {
      "nome": "Beatrice",
      "jogada": 0
    },
    {
      "nome": "Alison",
      "jogada": 0
    },
    {
      "nome": "Saundra",
      "jogada": 0
    },
    {
      "nome": "Klein",
      "jogada": 0
    }
  ]
 
  Sample Output 0
  
  Herman

</details>

<details>
<summary><b>11) Taxímetro</b></summary>
<br>

  Você é o programador responsável por programar o "taxímetro" do novo aplicativo de mobilidade que a empresa onde você trabalha está lançando. Nessa tarefa, dada uma distância percorrida e um tempo de viagem, você tem que fazer um programa que calcula o preço da viagem. Sabe-se que o app deve cobrar, inicialmente, 50 centavos por minuto de viagem e mais 70 centavos por cada quilômtro de viagem realizado. Caso a viagem tenha mais de 10km, cada km adicional (acima de 10) fica mais barato, passando a custar apenas 50 centavos por km. Caso a viagem dure mais de 20min, cada min adicional (acima de 20) fica mais barato, passando a custar apenas 30 cetavos por minuto. Seu trabalho é fazer a parte do programa que calcula, em centavos, o valor a ser pago pelo cliente (quanta responsabilidade, hein?). Lembre-se de arredondar para baixo o valor final a ser pago.
  
  Input Format
  
  A entrada é composta por duas variáveis: - min representa quantos minutos de duração a viagem teve. É sempre um número inteiro. - km representa quantos quilômetros foram percorridos na viagem. Pode ser um número com casas decimais.
  
  Constraints
  
  -
  
  Output Format
  
  Imprima na tela um único inteiro que representa o valor que deve ser pago pelo cliente, em centavos.
  
  Sample Input 0
  
  25 11.5
  
  Sample Output 0
  
  1925

</details>

<details>
<summary><b>12) cAPS lOCK oN</b></summary>
<br>

  vOCÊ ESTÁ DESENVOLVENDO UM FORMULÁRIO DE CADASTRO E NOS PRIMEIROS TESTES DE USABILIDADE COM USUÁRIOS REAIS NOTOU ALGO PECULIAR: mUITOS USUÁRIOS PREENCHEM O FORMULÁRIO TODO COM A TECLA cAPS lOCK ATIVA, DEIXANDO TUDO BEM MENOS AGRADÁVEL DE LER. a SOLUÇÃO ESCOLHIDA NO dAILY DO DIA SEGUINTE FOI DE DETECTAR QUANDO O USUÁRIO ESTÁ ESCREVENDO DESSA FORMA E CORRIGIR AUTOMATICAMENTE. vOCÊ DEVE AGORA ESCREVER ESSE ALGORITMO.
  
  cONSIDERAMOS QUE UMA PALAVRA FOI ESCRITA COM cAPS lOCK SE OU TODAS AS SUAS LETRAS FOREM MAIÚSCULAS OU SE A PRIMEIRA FOR MINÚSCULA E TODAS AS OUTRAS MAIÚSCULAS. a CORREÇÃO NESSES CASOS É INVERTER TODAS AS LETRAS.
  
  Input Format
  
  a ENTRADA CONSISTE DE UMA ÚNICA PALAVRA CONTENDO APENAS LETRAS LATINAS (A-Z), MINÚSCULAS OU MAIÚSCULAS.
  
  Constraints
  
  uMA PALAVRA POSSUI NO MÁXIMO 100 LETRAS.
  
  Output Format
  
  iMPRIMA A PALAVRA CORRIGIDA, CASO O ALGORITMO TENHA DETECTADO QUE ELA FOI ESCRITA COM cAPS lOCK ATIVO.
  
  Sample Input 0
  
  cAPS
  
  Sample Output 0
  
  Caps
  
  Explanation 0
  
  Ao receber um input com o texto contendo a primeira letra minúscula e o restante da palavra maiúscula devemos retornar o formato inverso, ou seja, a primeira letra maiúscula e o restante da palavra minúscula
  
  Sample Input 1
  
  lock
  
  Sample Output 1
  
  lock
  
  Explanation 1
  
  Ao receber um input com o texto minúsculo devemos retornar o texto no mesmo formato
  
  Sample Input 2
  
  CAPS
  
  Sample Output 2
  
  caps
  
  Explanation 2
  
  Ao receber um input com o texto todo maiúsculo devemos retornar o texto minúsculo

</details>

<details>
<summary><b>13) Distância Máxima</b></summary>
<br>

  Thacila está preocupada com as condições de trabalho em nosso ambiente cúbico, em especial com o quanto as pessoas precisam andar dentro da sala. Também é comum na Cubos que uma pessoa tire dúvidas com outra indo até a mesa do colega, caminhando a distância. Ela está fazendo um trabalho de realocar as mesas da sala para que as pessoas precisem andar o mínimo possível. Para tal, ela precisa primeiro rever a posição atual e determinar qual é a maior distância que precisa ser andada para uma pessoa chegar na mesa do colega. Como o número de pessoas está ficando bem grande, ela precisa escrever um programa para isso. Considere que cada pessoa é um ponto no plano euclidiano e que a distância é sempre uma linha reta entre dois pontos.
  
  Input Format
  
  Neste problema a entranda é um único string que você deve tratar adequadamente para obter as informações que você precisa em variáveis separadas.
  
  A primeira linha deste string será o inteiro N que indica o número de funcionários da Cubos. Nas próximas N linhas você lerá dois números, as coordenadas X e Y do i-ésimo funcionário.
  
  Constraints
  
  0 ≤ N ≤ 10^3 -1000 ≤ X, Y ≤ 1000
  
  Output Format
  
  Imprima um único número, a resposta para o problema.
  
  Sample Input 0
  
  3
  0 0
  0 3
  4 0
  
  Sample Output 0
  
  5.0
  
  Sample Input 1
  
  5
  3.56 17
  -5.1 36.3
  0.0002 -2
  5 5
  -9.01 -17.7
  
  Sample Output 1
  
  54.141371427033505

</details>

<details>
<summary><b>14) Cofre Bugadão</b></summary>
<br>


  Um novo cofre foi desenvolvido com a mais moderna tecnologia em segurança e criptografia. Na porta do cofre há um teclado com todas as letras do alfabeto em que a pessoa pode digitar a senha predefinida para abrir a porta.
  
  Durante alguns testes de rotina foi descoberto um bug na hora de validar a senha: O cofre ignora letras erradas durante a digitação da senha, desde que todas as letras da senha tenham sido digitadas na ordem correta.
  
  Por exemplo, se a senha for “cubos” e for digitado “cuggbyos”, o cofre irá abrir.
  
  Input Format
  
  A entrada consistirá em duas linhas, na primeira linha estará a senha correta, de até S caracteres. Na segunda linha estará a palavra digitada pela pessoa, de até N caracteres.
  
  Constraints
  
  S ≤ 10^3 N ≤ 10^5
  
  Output Format
  
  Imprima “SIM” caso o cofre abra. Caso contrário, imprimir “NAO”.
  
  Sample Input 0
  
  cubos
  cuggbyos
  
  Sample Output 0
  
  SIM
  
  Sample Input 1
  
  cubos
  ewvelrabsocaeln
  
  Sample Output 1
  
  NAO


  ****
