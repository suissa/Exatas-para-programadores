# Exatas-para-programadores

Vamos criar a maior biblioteca de funções EXPLICaDas implementadas em JS.

Como a maioria deve saber eu, [Suissa]() amo as disciplinas de Exatas, e gostaria de iniciar uma integraçao maior entre os alunos dessas disciplinas e nós programadores, pois nós podemos auxiliar qualquer disciplina a evoluir sua forma de ensino criando plataformas e ferramentas que ajudem nesse objetivo.

Por isso venho por meio deste repositório convidar programadores e alunos/entusiastas de:

- matematica;
- física;
- química;
- biologia.

Para criarmos desde as funções que implementam suas fórmulas até as ferramentas sócio-educacionais que utilizem-se de todo material, por nós criado, e facilite a entrada tanto de professores como alunos no mundo digital da educaçao.

Sabendo que nós somos os maiores agentes da transformaçao social, atualmente, creio que devemos nos focar mais em criar ferramentas para auxiliar a Educaçao do que ferramentas para auxiliar apenas outros programadores.

## Ideias

Imaginem os programadores se unirem para criarem uma plataforma unificada de conhecimento, inicialmente focado em Exatas, onde seria criado uma api para a criaçao e utilizaçao de fórmulas pré-existentes, onde as mesmas possuam toda sua explicaçao, conteúdos, etc relacionados.

Criar uma plataforma de criaçao de ferramentas sócio-educacionais onde os profissionais de cada disciplina irao sugerir tópicos a serem implementados e **um professor da Webschool** ficara responsavel pelo gerenciamento do projeto.

> Dando prioridade para trabalhos de TCC desses alunos das outras disciplinas. 


### Matem√tica



- sistema visual de ensino de operações
- sistema de execuçao de algoritmo em linguagem natural
- sistema de conversao do algoritmo em linguagens de programaçao
  - utilizando ast p/ varias langs
- sistema de exercícios via algoritmos
- mapeamento dos conhecimentos
  - iniciando pela + e números negativos


### Física

### Química

- tabela periódica remodelada

### Biologia


## Metodologia Disruptiva para

### Matem√tica

Primeiramente que acredito que antes de aprender/ensinar Matema´tica deve-se ensinar, nessa ordem: Lógica e algortimo.

> Por que isso Suissa?

> **\- Simples! Vc ñ precisa de Matematica para resolver um algoritmo, mas precisa de Lógica e algoritmo para resolver qualquer calculo.** Percebeu?

Fora que **eu** acredito que Matematica deveria ser ensinada como a Programaçao deveria ser ensinada: apenas após ter algum problema, das outras disciplinas, para resolver.

**Ensinar qualquer um deles sem um objetivo certo é ilógico!**

Fora que a disciplina de Lógica te ensina a pensar melhor e a de algoritmo te ensina a escrever em uma ordem lógica seu pensamento/soluçao, logo os 2 sao obrigatórios quando vc quer realmente entender como resolver algo e nao apenas resolver mecanicamente.

> Sabemos que a informaçao hoje é abundante e facil de ser achada, entao por que nao nos focamos no ensino do como fazer isso e nao do faça assim?

Quem trabalha, principalmente com programaçao, sabe que a maioria dos cenarios sao de correçao de algum erro, logo porque nao ensinar os alunos que eles tenham que corrigir um erro em um exemplo apresentado do que ter que decorar como aplicar aquela fórmula?

Todas disciplinas estao conectadas, principalmente Matematica e o idioma.

Se um dia vc precisar calcular um [mínimo múltiplo comum]() eu quero que vc possa inferir e fazer o calculo sem precisar pesquisar a fórmula pois isso **TODOS** terao a mao, quero que o aluno entenda qual o conceito de cada palavra:

- mínimo: adjetivo Excessivamente pequeno; diminuto. O menor em relaçao aos demais (num conjunto, numa lista, numa enumeraçao etc).
- múltiplo: adjetivo Diz-se do número que é exatamente divisível por outro sem deixar resto, ou daquele que contém outro uma porçao exata de vezes.
- comum: adjetivo Diz-se daquilo que pertence a todos ou do que cada um pode fazer parte ou participar: escritório comum.

Perceba que o conceito de múltiplo e divisível sao correlacionados, assim como a disivao é o inverso da multiplicacao, por exemplo múltiplos de 3: 3, 6, 9, 12, ...

Sabendo dos conceitos acima podemos inferir que se nos pedem um [MMC]() de 16 e 4 nós precisamos responder com um número que:

- seja divisível 
- seja divisível por 16 e 4
- seja o menor número divisível por 16 e 4

```

16 / 16 = 1
4 / 16 = 1/4

16 / 8 = 1
4 / 8 = 1/2

16/4 = 4
4/4 = 1


```

Só para demonstrar mais matematicamente:

```

Fatorando o número 16 temos:
Logo: 16 = 2*2*2*2 = 2^4

Fatorando o número 4 temos:

Logo: 4 = 2*2 = 2^2

Levando-se em conta os fatores comuns e não comuns, com os maiores expoentes temos que:
MMC(16, 4) = 2^4 = 16

Considerando-se os fatores comuns com os menores expoentes temos que:
MDC(16, 4) = 2^2 = 4


Com isso conseguimos separar o menor múltiplo comum porque achamos um número que é a menor parte inteira entre 4 e 16

assim como 27 e 9 acha o 9 como menor, 27 e 3 achara o 3. 

```

> Tudo se trata de proporçao!

Além do que precisamos ensinar do micro para o macro, demonstrar que qualquer calculo matematico pode ser reduzido em `+` e `-`, onde o que importa é vc saber o que fazer com eles.



> Eu, IMHO, nao irei ensinar fórmulas, mas sim os conceitos e como liga-los.

Precisamos entender que é mais importante um aluno resolver **qualquer** calculo criando um algoritmo que ele possa ir testando passo-a-passo e o sistema responder com um feedback onde ele errou, igual os erros em programaçao, e faça o aluno aprender sozinho e correr atras do conhecimento que lhe falta, do que apenas ensinar uma fórmula e como aplica-la corretamente.

> Demora-se muito mais tempo para escrever um algoritmo que faça uma divisao do que fazer algumas delas na mao, porém escrevendo uma vez a soluçao para **todos os casos** você só ira precisar usar essa funçao pois você ja entendeu como funcion.

Fora isso os alunos precisam aprender conceitos como *looping* e tipos antes mesmo de aprender Matematica.

> Se vc perguntar para uma criança qual o resultado de laranja + gato ela nao vai responder: uma laranjada de gato. Porque ela sabe que nao pode.

E esse nao poder juntar coisas diferentes nada mais é do que a tipagem na Programaçao.

Uma criança ja sabe que 1 quadrado nao encaixa em um circulo, entao porque nao usar desse pré-conhecimento da criança e sempre passar ele a frente com aplicações praticas.

Qualquer exercício devera ser baseado nas competências necessarias para fazê-lo, por exemplo um exercício de raiz quadrada:

```

√x = y

```

Antes disso o aluno tera que ter criado o algoritmo da divisao e multiplicacao, pois ele sabera que uma raiz ou potência nada mais é que um *looping* de divisões ou multiplicações e que divisao e multiplicacao nada mais é que um *looping* de subatrações e adições.

Com isso o aluno sempre tera que fazer os algorimos necessarios para chegar até aquele conhecimento, para que entenda que Exatas nao é decorar fórmulas, mas sim entendê-las.

Como essa soluçao que encontrei brincando e é bem simples de implementar:

```

√x = y

x = y^2

x = y * y

x / y = y

y = x / y

```

### Física

Conseguir inferir que a aceleraçao é uma diferença na velocidade de um corpo apenas analisando sua definicao:

> aceleraçao: substantivo feminino - Aumento da velocidade, pressa. [Física] Aumento de velocidade, por unidade de tempo, nos corpos em movimento.

Logo para que ela exista precisa-se da velocidade e a definicao de velocidade é:

> velocidade: substantivo feminino - Qualidade de veloz. Movimento rapido; rapidez. Distancia percorrida durante uma unidade de tempo: a velocidade do som.

Entendendo essa parte: "Distancia percorrida durante uma unidade de tempo".

> distancia: substantivo feminino - Espaço entre dois pontos. 

> unidade: substantivo feminino - número um. Qualidade do que é um ou único.

> tempo: substantivo masculino - Período sem interrup��es no qual os acontecimentos ocorrem;

Quando lemos `unidade de tempo` podemos inferir que é algo único baseado no tempo e para termos algo único com tantos números nós os agrupamos em conjuntos.

Por exemplo:

```

1 hora = 60 minutos
1 minuto = 60 segundos

```

Tanto hora, minuto e segundo sao **unidades** de tempo mesmo possuindo valores diferentes todas sao relacionadas ao tempo, por isso temos uma forma únida de medi-lo.

E sabendo que a distancia é um espaço entre 2 pontos, podemos inferir que sao a posicaoInicial e posicaoFinal. Logo para existir uma distancia precisa existir uma diferença entre esses dois pontos.

Logo:


```

distancia = posicaoFinal - posicaoInicial

distancia = ( posicaoInicial, posicaoFinal ) => posicaoFinal - posicaoInicial

```

Lembrando que a velocidade é a:

> "Distancia percorrida durante uma unidade de tempo"


Podemos inferir que quando nos falam "100km/h" estao dizendo que o corpo percorreu uma distancia que poderia ser 100 kilometros em 1 hora. 

> Se ele percorreu uma distancia logo ele partiu de um ponto X para um Y, correto?

Essa é a diferença da distancia ou, como chamamos, delta da distancia. 

O mesmo ocorre com a velocidade, o corpo inciou em um tempoInicial e terminou em um tempoFinal.

Entao para a velocidade nós temos:

```

distanciaFinal - distanciaInicial 
_________________________________
tempoInicial - tempoInicial 


delta( d ) // km
__________
delta( t ) // h


// Por isso km/h

```

Lembrando o que é aceleracao:

>  substantivo feminino - Aumento da velocidade, pressa. [Física] Aumento de velocidade, por unidade de tempo, nos corpos em movimento.

Ou seja:

```

aceleracao = velocidade / tempo

aceleracao = delta( d ) / delta( t ) / tempo

aceleracao = delta( d ) / delta( t ) / delta( t )

aceleracao = delta( d )
            ___________
            delta( t )
            ___________
            delta( t )


aceleracao = delta( d )
            ___________
            delta( t )
            ___________
                 1
            ___________
            delta( t )

aceleracao = delta( d )       1
            ___________ x ___________
            delta( t )     delta( t )
            
aceleracao = delta( d ) 
            ___________ 
            delta( t )  x delta( t )
            
aceleracao = delta( d ) 
            ___________ 
            delta( t )^2

// Por isso a aceleracao é km/m^2

```