function solucao(min, km) {
    //seu codigo aqui

    let preco_do_tempo = 0;
    let preco_da_distancia = 0;

    let valor_final_viagem = 0;

    function calculo_do_tempo_ate_20_m() {
        if (min <= 20) {
            const valor = min * (0.50);
            preco_do_tempo = valor;
        }
        else if (min > 20) {
            const minutos_ate_20 = 20;
            const valor = minutos_ate_20 * (0.50);
            preco_do_tempo = valor;
        }
        return preco_do_tempo;
    }
    function calculo_do_tempo_maior_que_20_m() {
        const minutos_excedentes = min - 20;
        const valor = minutos_excedentes * (0.30);
        preco_do_tempo = valor;
        return preco_do_tempo;
    }
    function calculo_da_distancia_ate_10_km() {
        if (km <= 10) {
            const valor = km * (0.70);
            preco_da_distancia = valor;
        }
        else if (km > 10) {
            const distancia_ate_10 = 10;
            const valor = distancia_ate_10 * (0.70);
            preco_da_distancia = valor;
        }
        return preco_da_distancia;
    }
    function calculo_da_distancia_maior_que_10_km() {
        const distancia_excedente = km - 10;
        const valor = distancia_excedente * (0.50);
        preco_da_distancia = valor;
        return preco_da_distancia;
    };

    function preco_do_tempo_final() {
        if ((min > 0) && (min <= 20)) {
            const preco_final_ate_20_m = calculo_do_tempo_ate_20_m(min);
            return preco_final_ate_20_m;
        }
        else if (min > 20) {
            const preco_final_maior_que_20_m = calculo_do_tempo_ate_20_m(min) + calculo_do_tempo_maior_que_20_m(min);
            return preco_final_maior_que_20_m;
        };
    }
    function preco_da_distancia_final() {
        if ((km > 0) && (km <= 10)) {
            const preco_final_ate_10_km = calculo_da_distancia_ate_10_km(km);
            return preco_final_ate_10_km;
        }
        else if (km > 10) {
            const preco_final_maior_que_10_km = calculo_da_distancia_ate_10_km(km) + calculo_da_distancia_maior_que_10_km(km);
            return preco_final_maior_que_10_km;
        };
    };

    if (((min > 0) && (min <= 20)) && ((km > 0) && (km <= 10))) {
        valor_final_viagem = ((preco_do_tempo_final(min)) + (preco_da_distancia_final(km)));
        const valor_final_viagem_string = valor_final_viagem.toFixed(2);
        const valor_final_viagem_centavos = valor_final_viagem_string.replace('.', '');
        console.log(valor_final_viagem_centavos);
    }
    else if (((min > 20) && (km > 10))) {
        valor_final_viagem = ((preco_do_tempo_final(min)) + (preco_da_distancia_final(km)));
        const valor_final_viagem_string = valor_final_viagem.toFixed(2);
        const valor_final_viagem_centavos = valor_final_viagem_string.replace('.', '');
        console.log(valor_final_viagem_centavos);
    }
    else if ((((min > 0) && (min <= 20)) && (km > 10))) {
        valor_final_viagem = ((preco_do_tempo_final(min)) + (preco_da_distancia_final(km)));
        const valor_final_viagem_string = valor_final_viagem.toFixed(2);
        const valor_final_viagem_centavos = valor_final_viagem_string.replace('.', '');
        console.log(valor_final_viagem_centavos);
    }
    else if (((min > 20) && ((km > 0) && (km <= 10)))) {
        valor_final_viagem = ((preco_do_tempo_final(min)) + (preco_da_distancia_final(km)));
        const valor_final_viagem_string = valor_final_viagem.toFixed(2);
        const valor_final_viagem_centavos = valor_final_viagem_string.replace('.', '');
        console.log(valor_final_viagem_centavos);
    };

}