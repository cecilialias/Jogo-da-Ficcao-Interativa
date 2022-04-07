console.clear();
const prompt = require('prompt-sync')();
 
do {
    const variaveis_iniciais = {
        //variaveis iniciais!
        // funções para o funcionamento dos status do player
        vida: 10, //perda de vida!
        vida_function: function () {
            this.vida--;
        },
        chakra: 10, // ganho de poder!
        chakra_function: function () {
            this.chakra++;
        },
        superforca: 3, //habilidade especial
        superforca_funtion: function () {
            this.superforca++;
        },
    };
    // Apresentação do game!
    console.log('Ola seja bem-vindo você ira participa de um experimento, você irar para o mundo de Naruto e irar passar la apenas 24hrs. \nAtravessando o portal você logo ver Sakura, Kakashi e Naruto, eles vão ate você.');
    console.log('Kakashi chega em você e diz:')
    console.log('Oi você finalmente chegou ficamos sabendo que você ira ter uma experiência de ninja com o meu time')
    const nome = prompt('Qual seu nome? ');
    console.log(
        `\nSeja bem vindo(a) ${nome}! espero que você possa aprender alguma coisa nesse time, mas já estou logo falando que não pego leve.`,
    );
    console.log(
        '\nVamos não temos tempo a perder, ja temos uma missão para comprir, temos que entregar este pergaminho para Gara',
    );
    console.log();
    console.log(`Nivel de vida em: ${variaveis_iniciais.vida}`);
    console.log(`Nivel de Chakra em: ${variaveis_iniciais.chakra} `);
    console.log();
    // de manha
    lopping_manha: do {
        const player_pc = [];
        player_random = Math.floor(Math.random() * 3);
        player_pc.push(player_random);

        console.log(
            `Indo em direçao a vila da areia voces se deparam com Pain, um inimigo horrivel capaz de destruir uma cidade em alguns minutos, ajude os outros a derrota`,
        );
        console.log(
            `Kakashi - vamos temos que dispista o inimigo para escapa, nao conseguimos derota ele agora`,
        );
       console.log(
            `kakashi - Vamos eu sei que voce tem poder suficiente para esta batalha ${nome}`
        );
        const decisao1 = prompt(
            '\nVoce pode usar o Rasengan, apenas poucas pessoas usam esse jutsu. \nSe voce usar podem acaba descobrindo da onde voce veio?(sim ou nao) ',
        ).toLowerCase();

        if (decisao1 === 'sim') {
            console.log('Voce quasse para o Pain apenas jogar ele para longe o suficiente para poder escapar');
            console.log('Ja em um lugar suguro Kakashi logo perqunta quem e voce. \nComo consegue usar isto, por hora deixa para la acho melhor irmos a vila da areia')
        } else if (decisao1 === 'nao') {
            console.log('Você não usar o justsu mas em troca disso ele e mais rapido e ataca naruto');
            console.log('analisando a situação voce ver que o Pain quer apenas naruto você diz isso em voz alta e logo kakashi joga o pain para longe.');
            console.log();
            console.log(`Kakashi - ${nome} e Sakura vamos recuar`,);
        }
        console.log(
            `Indo em direção a vila da areia,${nome} voce ver um movimento em baixo da areia`,
        );
        console.log(`Escorpiões gigante aparece ao aredor de voces`);
        const combate1 = prompt(
            `\nVocê ataca primeiro?(sim ou nao) `,
        ).toLowerCase();

        if (combate1 == 'sim') {
            if (player_pc == 0) {
            } else if (player_pc == 1) {
                console.log('Voce o ataca mas nao consegue se defender, antes de morrer ele lhe ataca colocando um veneno.');
                variaveis_iniciais.vida_function();
                console.log(`Sua Vida agora é: ${variaveis_iniciais.vida}`);
            } else if (player_pc == 2) {
                console.log('Você foi atingido! Mas consegue derrota-lo!');
                variaveis_iniciais.vida_function;
                console.log(`Sua Vida agora é: ${variaveis_iniciais.vida}`);
            }
        } else if (combate1 == 'nao') {
            if (player_pc == 0) {
                console.log(
                    'Você se defendeu! E o derrotou com o seu golpe mais forte!',
                );
            } else if (player_pc == 1) {
                console.log('Você foi atingido! Mas consegue derrota-lo!');
            } else if (player_pc == 2) {
                console.log('Você recebeu um golpe crítico! voce morreu!');
                continue lopping_manha;
            }
        }
        if (decisao1 !== 'sim' && decisao1 !== 'nao') {
            console.log('\nApenas respostas de (sim ou nao)!');
            continue lopping_manha;
        }
        if (combate1 !== 'sim' && combate1 !== 'nao') {
            console.log('\nApenas respostas de (sim ou nao)!');
            continue lopping_manha;
        }
        if (variaveis_iniciais.vida <= 0) {
            console.log('Dead End! Terá que recomeçar!');
            continue lopping_manha;
        } else {
            console.log('Você e os outros conseguiram derrota aqueles escorpiões');
            console.log( `${nome} conseguiu passar sua manhã inteira sem morrer`,);
            console.log('Voce olha pro ceu e pensa que o dia nao pode piorar mais que isto');
            break lopping_manha;
        }
    } while (true);
    
    //NIVEL 2
    lopping_nivel2: do {
        const player_pc = [];
        player_random = Math.floor(Math.random() * 3);
        player_pc.push(player_random);

        console.log(`Kakashi fala - A tarde esta apenas começando`);
        console.log('Logo aparece Itachi, naruto some em um pisca de olhos e todos ao seu aredor')
        const decisao2 = prompt(
            `Voce ver Itachi atacar primeiro? (sim) ou (nao)`,
        ).toLowerCase();
        if (decisao2 == 'sim') {
            console.log(
                'Atacando ele some, e voce se sente um boba por nao lembra dos poderes dele \nItachi aparece novamente e diz: Pequena criança voce nao tem poder suficiente para mim atacar, irei lhe deixar viva por nao ser deste mundo',
            );
        } else if (decisao2 == 'nao') {
            console.log(
                'Pequena tola, eu poderia lhe matar em um pisca de olhos, mas como voce nao deste mundo nao irei lhe matar.',
            );
        }
        console.log(
            'voltando ao normal todos se preocupam com voce, mas voce diz que esta bem e melhor seguir ao seu objetivo',
        );
        console.log('Seguindo o rumo voce ver marionetes vindo ate voces.')
        const combate2 = prompt(
            `\n${nome} decide por atacar!(sim ou nao) `,
        ).toLowerCase();
        if (combate2 == 'sim') {
            if (player_pc == 0) {
                console.log('Você deu um ataque crítico!');
                variaveis_iniciais.chakra_function();
                console.log(
                    `Sua Chakra agora é ${variaveis_iniciais.chakra}`,
                );
            } else if (player_pc == 1) {
                console.log(
                    'Você tomou um golpe...mas continua bem',
                );
                variaveis_iniciais.vida_function();
                console.log(`Sua saúde agora é ${variaveis_iniciais.vida}`);
            } else if (player_pc == 2) {
                console.log('As marionetes eram um inimígo poderoso! Voce morreu!');
                continue lopping_nivel2;
            }
        } else if (combate2 == 'nao') {
            console.log(
                'As marionetes nao lhe atacam',
            );
            console.log('Elas passam direto por voces e nada acontece');
        }
        if (decisao2 !== 'sim' && decisao2 !== 'nao') {
            console.log('\nApenas respostas de (sim ou nao) por favor!');
            continue lopping_nivel2;
        }
        if (combate2 !== 'sim' && combate2 !== 'nao') {
            console.log('\nApenas respostas de (sim ou nao) por favor!');
            continue lopping_nivel2;
        }
        if (variaveis_iniciais.vida <= 0) {
            console.log('Dead End! Terá que recomeçar!');
            continue lopping_nivel2;
        } else {
            console.log(
                'Kakashi diz: devemos esta proximo ao nosso destino vamos',
            );
            break lopping_nivel2;
        }
    } while (true);
    // //NIVEL 3
    looping_nivel3: do {
        const player_pc = [];
        player_random = Math.floor(Math.random() * 3);
        player_pc.push(player_random);

        console.log(
            'Voce olha para o ceu e ver anoitecendo',
        );
        console.log('Naruto diz: espero que esta noite nao seja tao ruim');
        if (variaveis_iniciais.chakra == '1') {
            const bonus = prompt(
                `\n${nome} voce deseja usa seu chakra para se cura?(sim ou nao)`,
            ).toLowerCase();
            if (bonus == 'sim') {
                variaveis_iniciais.vida++;
                console.log(`Sua saúde agora é  ${variaveis_iniciais.vida}`);
            }
        }
        console.log(
            'Ja vendo a vila voces ver Deidara no ceu jogando bombas na vila da areia',
        );
        console.log('Voces correm para ajudar a vila')
        const decisao3 = prompt(
            `\nVoce acaba vendo pessoas de sua familia falará com eles?(sim ou nao) `,
        ).toLowerCase();
        if (decisao3 == 'sim') {
            console.log(
                `Voce deve esta alucinando tentando volta a realidade!`,
            );
            variaveis_iniciais.vida_function();
            console.log('');
        } else if (decisao3 == 'nao') {
            console.log(
                `Boa escolha voce se contra para eles poderem desaparecer!`,
            );
            variaveis_iniciais.vida_function();
            console.log('');
        }
        console.log(
            `Ainda indo em direcão a folha`,
        );
        console.log(
            `Kakashi diz em voz alta Naruto e ${nome} usem o Rasengan, esta e a unica forma de derrota-lo`,
        );
        const combate3 = prompt(
            `\nSua última batalha se inicia! ${nome} atacará primeiro?(sim ou nao) `,
        ).toLowerCase();
        if (combate3 == 'sim') {
            console.log(
                `Naruto diz: ${nome} voce é bem corajoso por se opor na frente!`,
            );
            console.log('Com seu poder de acumulado vocês dois acumulados fazem o Rasengan gigante! e o derrotam!!')
            if (variaveis_iniciais.chakra== 2) {
                console.log(
                    `Com seu poder de acumulado vocês dois acumulados fazem o Rasengan gigante!`,
                );
            } else if (variaveis_iniciais.chakra == 1) {
                console.log(
                    `Com alguma força que lhe restam voces o derrotam`,
                );
            } else if (variaveis_iniciais.chakra == 0) {
                console.log(`${nome} Não tem poder suficiente para isso!`);
                continue looping_nivel3;
            }
        } else if (combate3 == 'nao') {
            if (variaveis_iniciais.chakra == 2) {
                console.log(
                    `Com seu poder de acumulado vocês dois acumulados fazem o Rasengan gigante!`,
                );
            } else if (variaveis_iniciais.chakra > 0) {
                console.log(
                    `Por algum milágre voces conseguem derrota-lo`,
                );
            } else if (
                variaveis_iniciais.vida < 1 ||
                variaveis_iniciais.chakra < 1
            ) {
                console.log(
                    `${nome} não tem poder suficiente para esta batalha!`,
                );
            }
        }
        if (decisao3 !== 'sim' && decisao3 !== 'nao') {
            console.log('\nApenas respostas de (sim ou nao) por favor!');
            continue looping_nivel3;
        }
        if (combate3 !== 'sim' && combate3 !== 'nao') {
            console.log('\nApenas respostas de (sim ou nao) por favor!');
            continue looping_nivel3;
        }
        if (variaveis_iniciais.vida <= 0) {
            console.log('morreu! Terá que recomeçar!');
            continue looping_nivel3;
        } else {
            console.log('VITÓRIA!!!!');
            console.log(
                `${nome}, ao final da noite, voce diz adeus para todos e ver que ira sentir saudades`,
            );
            console.log(`Sua experiencia acabou!`);
            break looping_nivel3;
        }
    } while (true);
    console.log(`PARABÉNS ${nome}! Você chegou ao final do experimento, acabo pensando e nunca mais faço uma louca dessas!`);
    //restart
    var restart = prompt('\nDeseja recomeçar?(sim ou nao) ');
} while (restart == 'sim');