function solucao(lista) {
    //seu codigo aqui

    if ((lista.length >= 0) && (lista.length <= 1000)) {

        let soma_cofre = 0;
        let media_aritmetica = 0;
        for (let valor of lista) {
            soma_cofre += valor;
            media_aritmetica = (soma_cofre / lista.length)
        }

        console.log(media_aritmetica);
    };

}

