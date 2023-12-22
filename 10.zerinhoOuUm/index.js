function solucao(jogadores) {
    //seu codigo aqui

    let jogada_zero = 0;
    let jogada_um = 0;

    for (let objeto = 0; objeto < jogadores.length; objeto++) {
        if ((jogadores[objeto].jogada == 0)) {
            jogada_zero++
        }
        else if ((jogadores[objeto].jogada == 1)) {
            jogada_um++
        }
    };

    function nome_do_vencedor_valor_zero(objeto) {
        if (jogadores[objeto].jogada == 0) {
            console.log(jogadores[objeto].nome);
        }
    }
    function nome_do_vencedor_valor_jogada_um(objeto) {
        if (jogadores[objeto].jogada == 1) {
            console.log(jogadores[objeto].nome);
        }
    };

    for (let objeto = 0; objeto < jogadores.length; objeto++) {
        if ((jogada_zero == 1) && (jogada_um > 1)) {
            nome_do_vencedor_valor_zero(objeto);
        }
        else if ((jogada_zero > 1) && (jogada_um == 1)) {
            nome_do_vencedor_valor_jogada_um(objeto);
        }
        else {
            console.log('NINGUEM');
            break;
        }

    };

}